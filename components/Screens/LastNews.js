import React,{useState,useContext,useRef} from 'react'
import { StyleSheet,View, Text,Image,RefreshControl,StatusBar,TouchableOpacity,SafeAreaView,FlatList,TextInput,ScrollView,ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NewsContext } from './../../api/Context'

import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import Trending from './SubSources/Trending';
import BottomNavBar from './BottomNavBar';
import TrendingContent from './SubSources/TrendingContent';


export default function LastNews() {
  const navigation = useNavigation();
  const {articles} = useContext(NewsContext);


  {/*RefreshScreen*/}
  const [refresh,setRefresh] = useState(false)
  const pullMe = () => { setRefresh(true),setTimeout(() => { setRefresh(false) },3000)}
     

    




  


  return (
    <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <View style={styles.HeaderLeft}>
                <Feather name="search" size={20} color={colors.textDarkOne} style={styles.HeaderLeftIcon}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.HeaderRight}>اخر الاخبار</Text>
          </View>
          </SafeAreaView>

          <ScrollView showsVerticalScrollIndicator={false} refreshControl={ <RefreshControl refreshing={refresh} onRefresh={() =>pullMe()} /> }>
          {/*NavHomeArea*/}
          <View style={styles.WrapperNavHomeArea}>
            <TouchableOpacity>
            <View style={styles.NavHomeAreaField}>
                <View style={styles.NavHomeAreaFieldTop}>
                <Image source={require('../../layout/images/Home_icons/enjoy.png')} resizeMode="contain" style={styles.NavHomeAreaFieldTopImage}/></View>
                <Text style={styles.NavHomeAreaFieldText}>ترفيه</Text>
            </View></TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.NavHomeAreaField}>
                <View style={styles.NavHomeAreaFieldTop}>
                <Image source={require('../../layout/images/Home_icons/live.png')} resizeMode="contain" style={styles.NavHomeAreaFieldTopImage}/></View>
                <Text style={styles.NavHomeAreaFieldText}>مباشر</Text>
            </View></TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.NavHomeAreaField}>
                <View style={styles.NavHomeAreaFieldTop}>
                <Image source={require('../../layout/images/Home_icons/virus.png')} resizeMode="contain" style={styles.NavHomeAreaFieldTopImage}/></View>
                <Text style={styles.NavHomeAreaFieldText}>كورونا</Text>
            </View></TouchableOpacity>

            <TouchableOpacity>
            <View style={styles.NavHomeAreaField}>
                <View style={styles.NavHomeAreaFieldTop}>
                <Image source={require('../../layout/images/Home_icons/video.png')} resizeMode="contain" style={styles.NavHomeAreaFieldTopImage}/></View>
                <Text style={styles.NavHomeAreaFieldText}>فيديو</Text>
            </View></TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('World')}>
            <View style={styles.NavHomeAreaField}>
                <View style={styles.NavHomeAreaFieldTop}>
                <Image source={require('../../layout/images/Home_icons/world.png')} resizeMode="contain" style={styles.NavHomeAreaFieldTopImage}/></View>
                <Text style={styles.NavHomeAreaFieldText}>العالم</Text>
            </View></TouchableOpacity>

          </View>
          {/*TrendingNewsArea*/}
          <View style={styles.WrapperTrendingNewsArea}>
            
            <View style={styles.TrendingNewsArea}>
                <TouchableOpacity>
                  <View style={styles.TrendingNewsAreaLeft}>
                    <Feather name="chevron-left" size={20} color={colors.primery} style={styles.TrendingNewsAreaLeftIcon}/>
                    <Text style={styles.TrendingNewsAreaLeftText}>عرض الكل</Text>
                  </View>
                </TouchableOpacity>
                <Text style={styles.TrendingNewsAreaRight}>الاخبار المتداولة</Text>
            </View>

            <View style={styles.TrendingNewsAreaBottom}>
              <FlatList
                data={articles}
                renderItem={({item}) =>
                    <Trending
                urlToImage = {item.urlToImage}
                title = {item.title}
                description = {item.description}
                author = {item.author}
                publishedAt = {item.publishedAt}
                sourceName = {item.source.name} 
                url={item.url}    
                />}
                keyExtractor = {(item) => item.title}
                horizontal={true}
                inverted
                showsHorizontalScrollIndicator={false}
                />

            </View>
          </View>
          {/*PostTextArea
          <View style={styles.WrapperPostTextArea}>
            <TrendingContent/>
          </View>*/}
         
        

    </ScrollView>
    <BottomNavBar/>
    </View>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundOne,
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
    WrapperNavHomeArea: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.background,
        marginHorizontal:10,
        marginTop:10,
        paddingHorizontal:10,
        paddingVertical:10,
        borderRadius:10,
        

    },
    NavHomeAreaField: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    NavHomeAreaFieldTop: {
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:50,
        backgroundColor:colors.textDarkOne,
    },
    NavHomeAreaFieldTopImage: {
        height:20,
        width:20,
    }, 
    NavHomeAreaFieldText: {
        fontSize:14,
        fontWeight:'500',
        color:colors.textDark,
        marginTop:5,
    },
    WrapperTrendingNewsArea: {
        marginHorizontal:10,
        marginTop:10,
        backgroundColor:colors.background,
    },
    TrendingNewsArea: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:5,
        paddingVertical:5,
    },
    TrendingNewsAreaLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    TrendingNewsAreaLeftIcon: {},
    TrendingNewsAreaLeftText: {
        fontSize:12,
        fontWeight:'600',
        color:colors.primery,
    },
    TrendingNewsAreaRight: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    TrendingNewsAreaBottom: {},
    TrendingNewsAreaBottomContent: { 
        backgroundColor:colors.lightOne,
        marginHorizontal:6,
        marginVertical:12,
        borderRadius:10,
    },
    TrendingNewsAreaBottomContentImage: {
        height:120,
        width:210,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    TrendingNewsAreaBottomContentText: {
        fontSize:14,
        fontWeight:'700',
        color:colors.textDark,
        marginTop:10,
        paddingRight:10,

    },
    TrendingNewsAreaBottomContentTextOne: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primery,
        paddingVertical:10,
        paddingRight:10,

    },
    WrapperPostTextArea: {
        marginHorizontal:10,
        marginTop:5,
        marginBottom:60,
        ////////////////////////////////////////   
    },
    PostTextArea: {
        marginVertical:5,
        backgroundColor:colors.background,
        paddingHorizontal:5,
        paddingVertical:5,
        
    },
    PostTextAreaTitle: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    PostTextAreaTitleLeft: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primery,
    },
    PostTextAreaTitleRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    PostTextAreaTitleRightText: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.textDark,
        paddingRight:5,
    }, 
    PostTextAreaTitleRightImage: {
        height:35,
        width:35,
        borderColor:colors.textDark,
        borderWidth:0.5,
    },
    PostTextAreaDescripe: {},
    PostTextAreaDescripeText: {
        fontSize:12.5,
        fontWeight:'bold',
        color:colors.textDarkOne,
        paddingHorizontal:5,
        paddingVertical:15,
    },
    PostTextAreaDescripeImage: {
        height:200,
        width:'100%', 
    },
    PostTextAreaBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
        marginBottom:5,
        //borderColor:colors.textDark,
        //borderWidth:0.5,

    },
    PostTextAreaBottomRight: {
        height:17,
        width:17,
        marginRight:5,
    },
    PostTextAreaBottomLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    PostTextAreaBottomLeftText: {
        fontSize:12,
        fontWeight:'600',
        color:colors.textDark,
        marginLeft:3,
    }, 
    PostTextAreaBottomLeftImage: {
        height:17,
        width:17,
        marginLeft:5,
    },
    

    

});