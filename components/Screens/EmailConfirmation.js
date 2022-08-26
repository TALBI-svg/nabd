import React,{useState} from 'react'
import { StyleSheet,View, Text,Image,StatusBar,Alert, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Auth } from 'aws-amplify'
import {useForm, Controller} from 'react-hook-form';
import {useRoute} from '@react-navigation/native';
 
import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function EmailConfirmation() {
    const navigation = useNavigation();
    const route  = useRoute();
    const {control, handleSubmit,formState: {errors},watch} = useForm({
      defaultValues: {username: route?.params?.username},
    });

    const username = watch('username');

    const WhenConfirm = async data  => {
      try {
        await Auth.confirmSignUp(data.username, data.code);
        navigation.navigate('Signin')
      } catch (e) {
          Alert.alert('Oops', e.message);
      }
      //console.log(data);
      //user validation
      //navigation.navigate('Home');
    };

    const WhenResend = async ()  => {
      try {
        await Auth.resendSignUp(username);
        Alert.alert('تحقق من بريدك ','تم إعادة إرسال الرمز إلى بريدك الإلكتروني');
      } catch (e) {
        Alert.alert('Oops',e.message);
      }
    };

  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <AntDesign name="arrowleft" size={20} color={colors.background} style={styles.HeaderLeft}/>
          </TouchableOpacity>
          <Text style={styles.HeaderRight}>تاكيد البريدالالكتروني</Text>
        </View>
      </SafeAreaView>
      {/*FormContenArea*/}
      <View style={styles.WrapperFormContenArea}>
        <Text style={styles.FormContenAreaText}>تم إرسال رمز التحقق إلى بريدك الإلكتروني</Text>
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
         placeholder="اسم المستخدم (كما سيظهر في التعليقات)"
         style={styles.FormContenAreaInputInput} 
         keyboardType="default"/></View> 
         {error && (
          <Text style={{color:'red',marginLeft:10, fontFamily:'Montserrat-Medium',fontSize:10,}}>
           {error.message || 'error'}{/*error*/}
          </Text>)}</> 
         )}
        />
         <Controller
         rules={{
           required: 'تاكد من ادخال رمز التاكيد',
         }}
         control={control}
         name="code"
         render={({field: {value, onChange, onBlur}, fieldState: {error}}) => ( 
         <>
         <View>
         <TextInput 
         value={value}
         onChangeText={onChange}
         onBlur={onBlur}
         placeholderTextColor={colors.textDarkOne}
         placeholder="رمز التاكيد"
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
          <TouchableOpacity onPress={handleSubmit(WhenConfirm)}>
            <Text style={styles.FormContenAreaSubmitText}>تاكيد</Text>
          </TouchableOpacity>

        </View> 

        {/*FormContenAreaBottom*/}
        <View style={styles.FormContenAreaBottom}>
          <TouchableOpacity>
            <Text style={styles.FormContenAreaBottomText}>الرجوع الى انشاء حساب</Text>
          </TouchableOpacity> 

          <TouchableOpacity onPress={handleSubmit(WhenResend)}>
            <Text style={[styles.FormContenAreaBottomText,{marginTop:10,marginLeft:5,}]}>ارسال رمز التاكيد مجددا</Text>
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
        fontSize:12,
        fontWeight:'bold',
        color:colors.green,
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
        paddingHorizontal:170,
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
    

});