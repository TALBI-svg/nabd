import React,{useState,useEffect,useContext} from "react";
import { StyleSheet, View, Linking,Text,SafeAreaView, TouchableOpacity,Image,FlatList, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import axios from 'axios'
import { NewsContext } from '../../../api/Context'

import moment from "moment";
import 'moment/locale/ar-ma'  // without this line it didn't work
moment.locale('ar-ma')

import colors from "../../../layout/colors/colors";


const TrendingContent = () => {
  const navigation = useNavigation();
  const {articles} = useContext(NewsContext);
  


    return(
        <View style={styles.containner}>
        {articles.map((item) => (

         <TouchableOpacity key={item.title} onPress={() => Linking.openURL(item.url)}>
         <View style={styles.PostTextArea}>
          <View style={styles.PostTextAreaTitle}>
             <Text style={styles.PostTextAreaTitleLeft}>{moment(item.publishedAt).fromNow()}</Text>
             <View style={styles.PostTextAreaTitleRight}>
                 <Text style={styles.PostTextAreaTitleRightText}>{item.source.name}</Text>
                 <Image source={{uri: item.urlToImage }} style={styles.PostTextAreaTitleRightImage}/>
             </View>
          </View>

          <View style={styles.PostTextAreaDescripe}>
             <Text style={styles.PostTextAreaDescripeText}>{item.description}</Text>
             <Image source={{uri: item.urlToImage }}  style={styles.PostTextAreaDescripeImage}/>
          </View>

          <View style={styles.PostTextAreaBottom}>
           <TouchableOpacity>
             <View style={styles.PostTextAreaBottomLeft}>
               <Image source={require('../../../layout/images/Profile_icons/comment.png')}  style={styles.PostTextAreaBottomLeftImage}/>
               <Text style={styles.PostTextAreaBottomLeftText}>{item.comments}2</Text>
             </View>
           </TouchableOpacity>

           <TouchableOpacity>
             <Image source={require('../../../layout/images/Profile_icons/shear.png')}  style={styles.PostTextAreaBottomRight}/>
           </TouchableOpacity>
          </View>
         </View></TouchableOpacity>

        ))}


      </View> 
    )
}

export default TrendingContent;

const styles = StyleSheet.create({
    containner: {
        flex:1,
        //backgroundColor:colors.background,
        //height: hp('100%'), // 100% of height device screen
        //width: wp('100%')   // 100% of width device screen
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
        alignItems:'flex-start',
    },
    PostTextAreaTitleLeft: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primery,
    },
    PostTextAreaTitleRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'flex-start',
    },
    PostTextAreaTitleRightText: {
        fontSize:12,
        fontWeight:'bold',
        color:colors.textDarkOne,
        paddingRight:5,
    }, 
    PostTextAreaTitleRightImage: {
        height:35,
        width:35,
        borderRadius:30,
    },
    PostTextAreaDescripe: {},
    PostTextAreaDescripeText: {
        fontSize:12.5,
        fontWeight:'bold',
        color:colors.textDark,
        paddingHorizontal:5,
        paddingVertical:15,
    },
    PostTextAreaDescripeImage: {
        height:200,
        width:'100%',
        marginTop:5, 
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
