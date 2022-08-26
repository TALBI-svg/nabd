import React,{useState} from 'react'
import { StyleSheet,View, Text,Image,StatusBar,Alert,TouchableOpacity,SafeAreaView,TouchableOpacityBase,TextInput,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify'
import {useForm, Controller} from 'react-hook-form';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export default function Signup() {
  const navigation = useNavigation();

  const WhenSignup = async data => {
    const {username, password, email} = data;
    try {
        await Auth.signUp({
            username,
            password,
            attributes: {email, preferred_username: username}, 
        });
    navigation.navigate('EmailConfirmation', {username});
    } catch (e) {
        Alert.alert('Oops', e.message);
    }

  
  //navigation.navigate('ConfirmEmail');
  };
  const {control, handleSubmit,formState: {errors},watch} = useForm();
  const pwd = watch('password');


  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <AntDesign name="arrowleft" size={20} color={colors.background} style={styles.HeaderLeft}/>
          </TouchableOpacity>
          <Text style={styles.HeaderRight}>حساب جديد</Text>
        </View>
      </SafeAreaView>
      {/*FormContenArea*/}
      <View style={styles.WrapperFormContenArea}>
        <Text style={styles.FormContenAreaText}> انشاء حساب عبر البريد الالكتروني </Text>
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
          placeholder="اسم المستخدم  (كما سيظهر في التعليقات)"
          style={styles.FormContenAreaInputInput}
          keyboardType="default"/></View> 
          {error && (
            <Text style={{color:'red',marginLeft:10, fontFamily:'Montserrat-Medium',fontSize:10,}}>
             {error.message || 'error'}{/*error*/}
            </Text>)}</> 
          )}
         />

         {/*Email*/} 
         <Controller
          rules={{
             required: 'تاكد من ادخال البريد الالكتروني',
             pattern: {
                 value: EMAIL_REGEX,
                 message:'تاكد من ادخال البريد الالكتروني بشكل صحيح',
             }
            }}
          control={control}
          name="email"
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
         <View>
         <TextInput 
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholderTextColor={colors.textDarkOne}
          placeholder="البريد الالكتروني"
          style={styles.FormContenAreaInputInput} 
          keyboardType="email-address"/></View>
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
              minLength: {
                  value: 8,
                  message:'يجب ألا تقل كلمة المرور عن 8 أحرف',
                 },
              maxLength: {
                 value: 24,
                 message:'يجب أن تكون كلمة المرور 24 حرفًا كحد أقصى',
                 },
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

          {/*PasswordRepeat*/} 
          <Controller
          rules={{
              validate: value =>
                value === pwd || 'كلمة المرور غير متطابقة',
             }}
          control={control}
          name="password-repeat"
          render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
         <View>
         <TextInput 
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          placeholderTextColor={colors.textDarkOne}
          placeholder="تاكيد كلمة السر"
          secureTextEntry
          style={styles.FormContenAreaInputInput} 
          keyboardType="default"/></View>
          {error && (
            <Text style={{color:'red',marginLeft:10, fontFamily:'Montserrat-Medium',fontSize:11,}}>
             {error.message || 'error'}{/*error*/}
            </Text>)}</>
          )}
         />
          
        </View>

        {/*FormContenAreaSubmit*/}
        <View style={styles.FormContenAreaSubmit}>
          <TouchableOpacity onPress={handleSubmit(WhenSignup)}>
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
    WrapperFormContenArea: {
        marginTop:'10%',
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