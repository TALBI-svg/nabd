import React from 'react'
import { StyleSheet, Text,Image,SafeAreaView,Linking,Alert,TouchableOpacity, View, Dimensions, ScrollView } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../../layout/colors/colors';
import { useNavigation } from '@react-navigation/native';
import dateFormat from 'dateformat';
import Markdown from 'react-native-markdown-display'
import { getSinglePost } from '../../../api/post'
import WorldSimilarPosts from './WorldSimilarPosts';


const width = Dimensions.get('window').width-15
const MY_WEBSITE_LINK = 'mypost.com/post'

const WorldDetailsPost = ({route}) => {
  
  const navigation = useNavigation();
  const post = route.params?.post
  //console.log(route.params)
 

  const getImage = (uri) => {
    if(uri) return {uri}

    return require('../../../layout/images/Error_messages/no-data.png')
  }

  const handleSinglePostFetch = async (slug) => {
    const {error, post} = await getSinglePost(slug)

    if(error) return console.log(error)
    navigation.push('WorldDetailsPost', {post})
  }

  const handleOnLinkPress = async (url) => {
    if(url.includes(MY_WEBSITE_LINK)){
      const slug = url.split(MY_WEBSITE_LINK + '/')[1]  

      if(!slug) return false;
      handleSinglePostFetch(slug)
      const {error, post} = await getSinglePost(slug)

      if(error) return console.log(error)
      navigation.push('WorldDetailsPost', {post})
      return false;
     
    } 

    const res = await Linking.canOpenURL(url)
    if(res){
      Linking.openURL(url)  
    }else {
      Alert.alert('Invalid URL', 'Can not open this broken link!')
    }
     
  }


  if(!post) return null
  const {title, thumbnail, tags, createdAt, author, content} = post
  
  return (
    <View style={styles.container}>
       {/*Header*/}
       <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('World')}>
              <View style={styles.HeaderLeft}>
                <Feather name="arrow-left" size={20} color={colors.textDarkOne} style={styles.HeaderLeftIcon}/>
              </View>
            </TouchableOpacity>
           
          </View>
          </SafeAreaView>
          {/*ContentArea*/}
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Content}>
            <Image source={getImage(thumbnail)}style={{width:width,height:width/1.7,}} />
            
              <Text style={styles.ContentTitle}>{title}</Text>
              <View style={styles.ContentBottom}>
                <Text style={styles.ContentBottomText}>By {author}</Text>
                <Text style={styles.ContentBottomText}>{dateFormat(createdAt, 'mediumDate')}</Text>
              </View>
              <Text style={styles.ContentText}>{tags.map((tag, index) => <Text key={tag + index}><Text style={styles.ContentTextMark}>#</Text>{tag}  </Text>)}</Text>
              <Markdown onLinkPress={handleOnLinkPress} style={styles.Markdown}>{content}</Markdown>
            </View>
          
            <View style={styles.SimilarArea}>
              <WorldSimilarPosts onPostPress={handleSinglePostFetch} postId={post.id}/>
            </View>  
          </ScrollView>

          
    </View>
  )
}

export default WorldDetailsPost

const styles = StyleSheet.create({
    container: {},
    Content: {
      alignSelf:'center',
      marginTop:7.5,
      marginHorizontal:15,
    },
    WrapperHeader: {
      flexDirection:'row',
      justifyContent:'flex-start',
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
    ContentTitle: {
      fontSize:14,
      fontWeight:'700',
      color:colors.textDark,
      marginVertical:10,
    },
    ContentBottom: {
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    ContentBottomText: {
      fontSize:10,
      fontWeight:'400',
      color:colors.textDarkOne,
    },
    ContentText: {
      fontSize:12,
      fontWeight:'400',
      color:colors.textDarkOne,
      paddingTop:20,
    },
    ContentTextMark: {
      fontSize:12,
      fontWeight:'400',
      color:colors.primery,
      paddingTop:10,

    },
    Markdown: {
      paragraph: {
        fontSize:13,
        lineHeight:22,
        color:colors.textDark,
      },
      body: {
        fontSize:16,
      },
      link: {
        color:colors.primery,
      },
      list_item: {
        color:colors.textDarkOne,
        fontSize:12,
      },
    },
    SimilarArea: {
      //marginTop:10,
      marginHorizontal:8,
      marginBottom:100,
    },
})