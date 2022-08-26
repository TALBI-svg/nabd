import React from "react";
import { StyleSheet, View, Linking,Text,SafeAreaView, TouchableOpacity,Image,FlatList, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";


import moment from "moment";
import 'moment/locale/ar-ma'  // without this line it didn't work
moment.locale('ar-ma')
import colors from "../../../layout/colors/colors";


const Trending= (props) => {
  const navigation = useNavigation(); 
  
 
  

    return(
      <View style={styles.containner}>
        <TouchableOpacity  onPress={() => Linking.openURL(props.url)}>
          <View style={styles.TrendingNewsAreaBottomContent}>
            <Image source={{uri: props.urlToImage }} style={styles.TrendingNewsAreaBottomContentImage}/>
            <Text style={styles.TrendingNewsAreaBottomContentText}>{props.title}</Text>
            <Text style={styles.TrendingNewsAreaBottomContentTextOne}>{moment(props.publishedAt).fromNow()}</Text>
          </View></TouchableOpacity>
       
       </View>
    )
}

export default Trending;

const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.background,
        //height: hp('100%'), // 100% of height device screen
        //width: wp('100%')   // 100% of width device screen
    },
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
        fontSize:12,
        fontWeight:'bold',
        marginTop:10,
        marginHorizontal:5,
        paddingHorizontal:5,
        width:200, 
        height:50,
        color:colors.textDark,
    },
    TrendingNewsAreaBottomContentTextOne: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primery,
        paddingVertical:10,
        paddingRight:10,
        //borderColor:colors.textDark,
        //borderWidth:1,

    },
   
});