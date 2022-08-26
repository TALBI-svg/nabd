import React,{useState,useEffect,useCallback, useRef,} from 'react'
import { StyleSheet,View, Text,FlatList,SafeAreaView, TouchableOpacity,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import BottomNavBar from './BottomNavBar';

import { useNavigation } from '@react-navigation/native';
import WorldSlider from './SubSources/WorldSlider';
import WorldSeparator from './SubSources/WorldSeparator';
import WorldListItems from './SubSources/WorldListItems';
import { getFeaturedPosts, getLatestPosts, getSinglePost } from '../../api/post';



let pageNu = 0;
const limit = 5
export default function World () {
  const navigation = useNavigation();
  const [featuredPosts,setFeaturedPosts] = useState([]);
  const [latestPosts, setLatestPosts] = useState([])
  const [reachedToEnd, setReachedToEnd] = useState(false)
  const [busy, setBusy] = useState(false)

  const fetchFeaturedPosts = async () => {
    const {error,posts} = await getFeaturedPosts()
      if(error) return console.log(error)
 
      setFeaturedPosts(posts)
  } 


  const fetchLatestPosts = async () => {
    const {error, posts} = await getLatestPosts()
    if(error) return console.log(error);

    setLatestPosts(posts)
  }

  const fetchMorePosts = async () => {
    //console.log('running')
    if(reachedToEnd || busy)return;

    pageNu +=1
    setBusy(true)
    const {error, posts, postCount} = await getLatestPosts(limit, pageNu)
    setBusy(false)
    if(error) return console.log(error);
    
    if(postCount === latestPosts.length) return setReachedToEnd(true)
    setLatestPosts([...latestPosts, ...posts])
  }


  const fetchSinglePost = async (postInfo) => {
    const slug = postInfo.slug || postInfo
    const {error, post} = await getSinglePost(slug)

    if(error) console.log(error)
    navigation.navigate('WorldDetailsPost', {post})
  }


  
  useEffect(() => {
    fetchFeaturedPosts()
    fetchLatestPosts()

    return () => {
      pageNu = 0 
      setReachedToEnd(false) 
    }
  },[])
  const separatorItem = () => {
    return (
      <WorldSeparator  width='95%'  style={{marginTop:5,}}/>
    )
  }
  const renderItem = ({item}) => {
    return(
      <View style={styles.WrapperContentArea}>
          <WorldListItems onPress={() => fetchSinglePost(item.slug)} post={item}/>
      </View>
      )
    }
  const ListHeaderComponent = useCallback(() => {
    return (
        <View>
          {featuredPosts.length ?(<WorldSlider onSlidePress={fetchSinglePost}  data={featuredPosts} title='title'/>): null}
          <View style={styles.WrapperTitleArea}>
            <WorldSeparator />
          </View>
        </View>
    )
  },[featuredPosts])

  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('LastNews')}>
              <View style={styles.HeaderLeft}>
                <Feather name="arrow-left" size={20} color={colors.textDarkOne} style={styles.HeaderLeftIcon}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.HeaderRight}>اخبار العالم</Text>
          </View> 
          </SafeAreaView>
      <FlatList
       data={latestPosts}
       keyExtractor={item => item.id} 
       ListHeaderComponent={ListHeaderComponent}
       ItemSeparatorComponent={separatorItem}
       showsVerticalScrollIndicator={false}
       renderItem={renderItem}
       onEndReached={fetchMorePosts}
       onEndReachedThreshold={0}
       
       ListFooterComponent={() => {
       return(reachedToEnd ?(<Text style={styles.Footer}>You reached to end !</Text>): null)
       }}
       />
     
    </View>
  )
}

const styles = StyleSheet.create({
  containner: {
    //flex:1,
    //backgroundColor:colors.background,
    height: hp('100%'), // 100% of height device screen
    width: wp('100%')   // 100% of width device screen
  },
  WrapperHeader: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingVertical:10,
    paddingHorizontal:10,
    backgroundColor:colors.background,
  },
  HeaderLeft: {
    padding:5,
    borderRadius:30,
    backgroundColor:colors.backgroundOne,
  },
  HeaderRight: {
    fontSize:16,
    fontWeight:'bold',
    color:colors.textDarkOne,
  },
  WrapperTitleArea: {
    rmarginTop:5,
  },
  WrapperContentArea: {  
    paddingHorizontal:10,

  },
  Footer: {
    paddingVertical:15,
    marginTop:5,
    marginHorizontal:10,
    fontSize:12,
    fontWeight:'400',
    backgroundColor:colors.backgroundOne,
    color:colors.textDarkOne,
    textAlign:'center',
    
  },
  
})