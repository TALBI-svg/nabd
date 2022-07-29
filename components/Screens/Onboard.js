import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'


export default function Onboard() {
  return (
    <View style={styles.containner}>
      {/*WrapperTopArea*/}
      <View style={styles.WrapperLogo}>
        {/*TopArea*/}
        <View style={styles.WrapperLogoTop}>
          <View style={styles.LogoTopRight}>
            <View style={styles.LogoTopRightTop}>
              <Image source={require('../../layout/images/Onboard_icons/sport.png')} style={styles.LogoTopRightTopImage}/>
            </View>
          </View>
          <View style={styles.LogoTopLeft}>
            <View style={styles.LogoTopLeftTop}>
              <Image source={require('../../layout/images/Onboard_icons/world.png')} style={styles.LogoTopLeftTopImage}/>
            </View>
          </View>
        </View>
        {/*TopPlusArea*/}
        <View style={{marginTop:-40,}}>
          <View style={{marginBottom:30,marginHorizontal:150,}}>
            <Image source={require('../../layout/images/Onboard_icons/plus.png')} style={{height:10,width:10,}}/>
          </View>
        </View>
        {/*MiddleArea*/}
        <View style={styles.Logo}>
          <View style={styles.LogoContent}>
            <Image source={require('../../layout/images/Onboard_icons/news.png')} style={styles.LogoContentImage}/>
          </View>
        </View>
        {/*BottomArea*/}
        <View style={styles.WrapperLogoBottom}>
          <View style={styles.LogoBottomRight}>
            <View style={styles.LogoBottomRightBottom}>
              <Image source={require('../../layout/images/Onboard_icons/youtube.png')} style={styles.LogoBottomRightBottomImage}/>
            </View>
          </View>
          <View style={styles.LogoBottomLeft}>
            <View style={styles.LogoBottomLeftBottom}>
              <Image source={require('../../layout/images/Onboard_icons/contact.png')} style={styles.LogoBottomLeftBottomImage}/>
            </View>
          </View>
        </View>
        {/*BottomPlusArea*/}
        <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginHorizontal:110,}}>
          <View>
            <Image source={require('../../layout/images/Onboard_icons/plus.png')} style={{height:20,width:20,}}/>
          </View>
        </View>
      </View>
      {/*WrapperSubmitArea*/}
      <View style={styles.WrapperSubmitArea}>
        <View style={styles.SubmitAreaTop}>
          <Text style={styles.SubmitAreaTopText}>تابع الاخبار في مختلف المجالات في مكان واحد</Text>
        </View>

        <View style={styles.SubmitAreaBottom}>

          <TouchableOpacity>
            <Text style={styles.SubmitAreaBottomText}>اختيار مصادرك</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.SubmitAreaBottomTouchab}>
            <Text style={styles.SubmitAreaBottomTouchabText}>تسجيل الدخول (الاسترجاع مصادرك)</Text>
          </TouchableOpacity>

        </View>
        
      </View>

        
    </View>
  )
}

const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.backgroundScreen,
        height: hp('100%'), // 100% of height device screen
        width: wp('100%')   // 100% of width device screen
    },
    WrapperLogo: {
        marginTop:150,
    },
    WrapperLogoTop: {
        marginBottom:-55,
    },
    LogoTopRight: {
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginBottom:-25,
        marginHorizontal:120,
    },
    LogoTopRightTop: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.lightOne, 
        height:60,
        width:60,
        borderRadius:100,
    },
    LogoTopRightTopImage: {
        height:30,
        width:30,

    },
    LogoTopLeft: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginHorizontal:85,

    },
    LogoTopLeftTop: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.lightOne, 
        height:60,
        width:60,
        borderRadius:100,

    },
    LogoTopLeftTopImage: {
        height:30,
        width:30,
    },
    Logo: {
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:'30%',
        backgroundColor:colors.lightOne, 
        height:175,
        width:175,
        borderRadius:100,
    },
    LogoContent: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.backgroundOne,
        height:130,
        width:130,
        borderRadius:100,
    },
    LogoContentImage: {
        height:80,
        width:80,
    },
    WrapperLogoBottom: {
        //marginBottom:-55,
        marginTop:-100,
    },
    LogoBottomRight: {
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginBottom:-25,
        marginHorizontal:75,

    },
    LogoBottomRightBottom: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.lightOne, 
        height:60,
        width:60,
        borderRadius:100,

    },
    LogoBottomRightBottomImage: {
        height:30,
        width:30,
    },
    LogoBottomLeft: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:-15,
        marginHorizontal:75,
    },
    LogoBottomLeftBottom: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.lightOne, 
        height:60,
        width:60,
        borderRadius:100,
    },
    LogoBottomLeftBottomImage: {
        height:30,
        width:30,
    },
    WrapperSubmitArea: {
        marginTop:100,
        marginHorizontal:20,

    },
    SubmitAreaTop: {
        justifyContent:'center',
        alignItems:'center',

    },
    SubmitAreaTopText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDark,
    },
    SubmitAreaBottom: {
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',

    },
    SubmitAreaBottomText: {
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:colors.primery,
        color:colors.background,
        paddingHorizontal:100,
        paddingVertical:12,
        borderRadius:5,

    },
    SubmitAreaBottomTouchab: {
        marginTop:10,
        backgroundColor:colors.backgroundOne,
        paddingHorizontal:67,
        paddingVertical:14,
        borderRadius:5,

    },
    SubmitAreaBottomTouchabText: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primeryOne,
        

    },

});
