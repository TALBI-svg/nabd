import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Signup() {
  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={20} color={colors.background} style={styles.HeaderLeft}/>
          </TouchableOpacity>
          <Text style={styles.HeaderRight}>حساب جديد</Text>
        </View>
      </SafeAreaView>
      {/*SocialMediaArea*/}
      <View style={styles.WrapperSocialMediaArea}>
        <TouchableOpacity>
          <View style={styles.SocialMediaArea}>
            <Text style={styles.SocialMediaAreaText}>تسجيل الدخول عبر حساب فايسبوك</Text>
            <Image source={require('../../layout/images/Signup_icons/facebook.png')} style={styles.SocialMediaAreaImage}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.SocialMediaArea,{backgroundColor:colors.twitter,}]}>
            <Text style={[styles.SocialMediaAreaText,{marginRight:20,}]}>تسجيل الدخول عبر حساب تويتر</Text>
            <Image source={require('../../layout/images/Signup_icons/twitter.png')} style={styles.SocialMediaAreaImage}/>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={[styles.SocialMediaArea,{backgroundColor:colors.backgroundOne,}]}>
            <Text style={[styles.SocialMediaAreaText,{color:colors.textDarkOne,marginRight:20,}]}>تسجيل الدخول عبر حساب جوجل</Text>
            <Image source={require('../../layout/images/Signup_icons/google.png')} style={styles.SocialMediaAreaImage}/>
          </View>
        </TouchableOpacity>
      </View>

      {/*FormContenArea*/}
      <View style={styles.WrapperFormContenArea}>
        <Text style={styles.FormContenAreaText}>او الدخول عبر البريد الالكتروني</Text>
        <View style={styles.FormContenAreaInput}>
          <TextInput
           placeholderTextColor={colors.textDarkOne}
           placeholder="اسم المستخدم  (كما سيظهر في التعليقات)"
           style={styles.FormContenAreaInputInput}
          />
          <TextInput
           placeholderTextColor={colors.textDarkOne}
           placeholder="البريد الالكتروني"
           style={styles.FormContenAreaInputInput}
          />
          <TextInput
           placeholderTextColor={colors.textDarkOne}
           placeholder="كلمة السر"
           secureTextEntry
           style={styles.FormContenAreaInputInput}
          />
          <TextInput
           placeholderTextColor={colors.textDarkOne}
           placeholder="تاكيد كلمة السر"
           secureTextEntry
           style={styles.FormContenAreaInputInput}
          />
          
        </View>

        {/*FormContenAreaSubmit*/}
        <View style={styles.FormContenAreaSubmit}>
          <TouchableOpacity>
            <Text style={styles.FormContenAreaSubmitText}>انشاء حساب جديد</Text>
          </TouchableOpacity>

        </View> 

        {/*FormContenAreaBottom*/}
        <View style={styles.FormContenAreaBottom}>


          {/*FormContenAreaBottomTerms*/}
          <View style={styles.FormContenAreaBottomTerms}> 
            <Text style={styles.FormContenAreaBottomTermsText}>By tapping “Login”, you agree to the</Text>
            <TouchableOpacity>
              <Text style={styles.FormContenAreaBottomTermsTextOne}> Terms of Services</Text>
            </TouchableOpacity>
            <Text style={styles.FormContenAreaBottomTermsText}> and</Text>
            <TouchableOpacity>
              <Text style={styles.FormContenAreaBottomTermsTextOne}> Privacy</Text>
            </TouchableOpacity>
          </View>
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
    WrapperHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:colors.primery,

    },
    HeaderLeft: {},
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,
    },
    WrapperSocialMediaArea: {
        //borderColor:colors.textDark,
        //borderWidth:1,
        marginTop:20,
        marginHorizontal:20,
    },
    SocialMediaArea: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor:colors.facebook,
        marginTop:7,
        paddingVertical:5,
        borderRadius:8,
    },
    SocialMediaAreaText: {
        marginRight:20,
        color:colors.background,
        textAlign:'center',
    },
    SocialMediaAreaImage: {
        height:30,
        width:30,
        marginRight:10,
    },
    WrapperFormContenArea: {
        marginTop:20,
        marginHorizontal:20,
    },
    FormContenAreaText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDark,
        marginRight:3,
    },
    FormContenAreaInput: {
        marginTop:15,
    },
    FormContenAreaInputInput: {
        marginTop:15,
        padding:0,
        paddingVertical:5,
        paddingHorizontal:3,
        borderBottomColor:colors.textDarkOne,
        borderBottomWidth:0.4,
    },
    FormContenAreaSubmit: {
        marginTop:100,
        justifyContent:'center',
        alignItems:'center',
    },
    FormContenAreaSubmitText: {
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:colors.yellow,
        color:colors.textDark,
        paddingHorizontal:135,
        paddingVertical:14,
        borderRadius:10,
        
    },
    FormContenAreaBottom: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:15,
        marginHorizontal:10,    
    },
    FormContenAreaBottomTerms: {
        marginTop:10,
        flexDirection:'row',
    },
    FormContenAreaBottomTermsText: {
        fontSize:12,
        fontWeight:'400',
        color:colors.primery,
    },
    FormContenAreaBottomTermsTextOne: {
        fontSize:12,
        fontWeight:'400',
        color:colors.textDark,
    },

});