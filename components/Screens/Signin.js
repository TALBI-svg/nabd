import React,{useEffect,useState} from 'react'
import { StyleSheet,View, Text,Image,StatusBar,Alert,TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { Auth } from 'aws-amplify'
import {useForm, Controller} from 'react-hook-form';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function Signin() {
    const navigation = useNavigation();
    const SignUp = () => {
      navigation.navigate('Signup')
    }

    /////////////////////googleLogin/////////////////////
    const googleLogin = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        } else if (error.code === statusCodes.IN_PROGRESS) {
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        } else {}
      }
      navigation.navigate('LastNews')
      };
      useEffect(() => {
        GoogleSignin.configure()
      
      }, [])
    
    /////////////////////Login////////////////////////
    const WhenLogin = async (data) => {
      try {
        await Auth.signIn(data.username, data.password);
        navigation.navigate('LastNews');
       } catch (e) {
           Alert.alert('Oops', e.message);
       }
     };
     const {control, handleSubmit,formState: {errors} } = useForm();

     
      
     






  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={20} color={colors.background} style={styles.HeaderLeft}/>
          </TouchableOpacity>
          <Text style={styles.HeaderRight}>تسجيل الدخول</Text>
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

        <TouchableOpacity onPress={googleLogin}>
          <View style={[styles.SocialMediaArea,{backgroundColor:colors.backgroundOne,}]}>
            <Text style={[styles.SocialMediaAreaText,{color:colors.textDark,marginRight:20,}]}>تسجيل الدخول عبر حساب جوجل</Text>
            <Image source={require('../../layout/images/Signup_icons/google.png')} style={styles.SocialMediaAreaImage}/>
          </View>
        </TouchableOpacity>
      </View>

      {/*FormContenArea*/}
      <View style={styles.WrapperFormContenArea}>
        <Text style={styles.FormContenAreaText}>او الدخول عبر البريد الالكتروني</Text>
        <View style={styles.FormContenAreaInput}> 
        {/*Username*/} 
        <Controller
         rules={{
           required: 'تاكد من ادخال اسم المستخدم',
         }} 
         control={control}
         name="username"
         render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( 
         <>
         <View>
         <TextInput 
         value={value}
         onChangeText={onChange}
         onBlur={onBlur}
         placeholderTextColor={colors.textDarkOne}
         placeholder="اسم المستخدم"
         style={styles.FormContenAreaInputInput}
         keyboardType="default"/></View> 
          {error && (
           <Text style={{color:'red',marginLeft:10, fontFamily:'Montserrat-Medium',fontSize:10,}}>
             {error.message || 'error'}{/*error*/}
           </Text>)}</> 
          )}
        /> 
        {/*Password*/} 
        <Controller
         rules={{
            required: 'تاكد من كلمة المرور',
         }}
         control={control}
         name="password"
         render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
         <>
         <View>
         <TextInput 
         value={value}
         onChangeText={onChange}
         onBlur={onBlur}
         placeholderTextColor={colors.textDarkOne}
         placeholder="كلمة السر"
         secureTextEntry
         style={styles.FormContenAreaInputInput}
         keyboardType="default"/></View>
          {error && (
            <Text style={{color:'red',marginLeft:10, fontFamily:'Montserrat-Medium',fontSize:10,}}>
              {error.message || 'error'}{/*error*/}
            </Text>)}</>
          )}
        />
        
        </View>
        {/*FormContenAreaSubmit*/}
        <View style={styles.FormContenAreaSubmit}>
          <TouchableOpacity onPress={handleSubmit(WhenLogin)}>
            <Text style={styles.FormContenAreaSubmitText}>تسجيل الدخول</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={SignUp}>
            <Text style={styles.FormContenAreaSubmitTextOne}>حساب جديد</Text>
          </TouchableOpacity>
        </View> 

        {/*FormContenAreaBottom*/}
        <View style={styles.FormContenAreaBottom}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.FormContenAreaBottomText}>نسيت كلمة السر؟</Text>
          </TouchableOpacity>  

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
        paddingHorizontal:142,
        paddingVertical:14,
        borderRadius:10,
        
    },
    FormContenAreaSubmitTextOne: {
        marginTop:10,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:colors.backgroundOne,
        color:colors.primery,
        paddingHorizontal:148,
        paddingVertical:14,
        borderRadius:10,

    },
    FormContenAreaBottom: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:15,
        marginHorizontal:10,
        
    },
    FormContenAreaBottomText: {
        fontSize:14,
        fontWeight:'400',
        color:colors.primery,
    },
    FormContenAreaBottomTerms: {
        marginTop:30,
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