import React,{useRef} from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput, ScrollView,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { Auth} from 'aws-amplify'
import Share from 'react-native-share';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BottomNavBar from './BottomNavBar';



export default function Profile() {
  const navigation = useNavigation();
  
  const signOut = () => {
    Auth.signOut();
    navigation.navigate('Signin')
  };

  const WhenShare = async () => {
    const shareOptions = {
      message:'share area',
    }
    try {
      const ShareResponse = await Share.open(shareOptions)
      console.log(JSON.stringify(ShareResponse))
    } catch (error) {
      console.log('Error ==> ',error)
    }
  }
  
  return (
    <View style={styles.containner}>
      {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          
          <Text style={styles.HeaderRight}>حسابي</Text>
        </View> 
      </SafeAreaView>
      {/*UserInfoArea*/}
      <View style={styles.WrapperUserInfoArea}>
        <View style={styles.UserInfoArea}>
          <View style={styles.UserInfoAreaLeft}>
            <Text style={styles.UserInfoAreaLeftText}>مستخدم </Text>
            <Text style={styles.UserInfoAreaLeftTextOne}>mostakhdem@gmail.com</Text>
          </View> 
          <Image source={require('../../layout/images/Profile_icons/user.png')} resizeMode="contain" style={styles.UserInfoAreaRight}/>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/*FavoritInteractArea*/}
      <View style={styles.WrapperFavoritInteractArea}>
        <TouchableOpacity>
        <View style={styles.FavoritInteractArea}>
          <Text style={styles.FavoritInteractAreaText}>المفضلة</Text>
          <Image source={require('../../layout/images/Profile_icons/star.png')} resizeMode="contain" style={styles.FavoritInteractAreaImage}/>
        </View></TouchableOpacity>
        <TouchableOpacity>
        <View style={[styles.FavoritInteractArea,{marginTop:10,}]}>
          <Text style={styles.FavoritInteractAreaText}>التفاعلات</Text>
          <Image source={require('../../layout/images/Profile_icons/comment.png')} resizeMode="contain" style={styles.FavoritInteractAreaImage}/>
        </View></TouchableOpacity>
      </View>
      {/*SettingsArea*/}
      <View style={styles.WrapperSettingsArea}>
        <View style={styles.SettingsArea}>
          <Text style={styles.SettingsAreaTexet}>الاعدادات</Text>
          <TouchableOpacity>
          <View style={styles.SettingsAreaContent}>
            <Text style={styles.SettingsAreaContentText}>تعديل المصادر</Text>
            <Image source={require('../../layout/images/Profile_icons/settings.png')} resizeMode="contain" style={styles.SettingsAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.SettingsAreaContent}>
            <Text style={styles.SettingsAreaContentText}>حجم العناوين</Text>
            <Image source={require('../../layout/images/Profile_icons/fontSize.png')} resizeMode="contain" style={styles.SettingsAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.SettingsAreaContent}>
            <Text style={styles.SettingsAreaContentText}>التغيل التلقائي للفيديو</Text>
            <Image source={require('../../layout/images/Profile_icons/replay.png')} resizeMode="contain" style={styles.SettingsAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.SettingsAreaContent}>
            <Text style={styles.SettingsAreaContentText}>اعدادات الوضع الليلي</Text>
            <Image source={require('../../layout/images/Profile_icons/darkMode.png')} resizeMode="contain" style={styles.SettingsAreaContentImage}/>
          </View></TouchableOpacity>
        </View>
      </View>
      {/*NotiArea*/}
      <View style={styles.WrapperNotiArea}> 
        <View style={styles.NotiArea}>
          <Text style={styles.NotiAreaTexet}>التنبيهات</Text>
          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>تنبيهات الاخبار العاجلة</Text>
            <Image source={require('../../layout/images/Profile_icons/notifications.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>اختيار مصادر التنبيهات العاجلة</Text>
            <Image source={require('../../layout/images/Profile_icons/list.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>تنبيهات اهم الاخبار</Text>
            <Image source={require('../../layout/images/Profile_icons/news.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>تنبيهات اخبار الرياضة</Text>
            <Image source={require('../../layout/images/Profile_icons/sport.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>تنبيهات نتائج المبارايات</Text>
            <Image source={require('../../layout/images/Profile_icons/ball.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>صوت التنبيهات</Text>
            <Image source={require('../../layout/images/Profile_icons/sond.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>اختبار عمل التنبيهات</Text>
            <Image source={require('../../layout/images/Profile_icons/validate.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.NotiAreaContent}>
            <Text style={styles.NotiAreaContentText}>النشرة الاخبارية</Text>
            <Image source={require('../../layout/images/Profile_icons/email.png')} resizeMode="contain" style={styles.NotiAreaContentImage}/>
          </View></TouchableOpacity>
        </View>
      </View>
      {/*NabdApp*/}
      <View style={styles.WrapperNabdApp}> 
        <View style={styles.NabdApp}>
          <Text style={styles.NabdAppTexet}>تطبيق نبض</Text>
          <TouchableOpacity onPress={WhenShare}>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>انشر تطبيق نبض</Text>
            <Image source={require('../../layout/images/Profile_icons/shear.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>الاتصال بنا</Text>
            <Image source={require('../../layout/images/Profile_icons/call.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>nabdApp</Text>
            <Image source={require('../../layout/images/Profile_icons/facebook.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>@nabdApp</Text>
            <Image source={require('../../layout/images/Profile_icons/twitter.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>@nabdApp</Text>
            <Image source={require('../../layout/images/Profile_icons/instagram.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>قيم تطبيق نبض</Text>
            <Image source={require('../../layout/images/Profile_icons/like.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>

          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>الاسئلة الشائعة</Text>
            <Image source={require('../../layout/images/Profile_icons/quetions.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>
          
          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>الابلاغ عن خلل</Text>
            <Image source={require('../../layout/images/Profile_icons/report.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>
          
          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>سياسة الخصوصية (Privacy Plicy)</Text>
            <Image source={require('../../layout/images/Profile_icons/lock.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>
          
          <TouchableOpacity>
          <View style={styles.NabdAppContent}>
            <Text style={styles.NabdAppContentText}>شروط الاستخدام(Terms of Services)</Text>
            <Image source={require('../../layout/images/Profile_icons/terms.png')} resizeMode="contain" style={styles.NabdAppContentImage}/>
          </View></TouchableOpacity>
        </View>
      </View>
      {/*LogoutArea*/}
      <View style={styles.WrapperLogoutArea}>
        <View style={styles.LogoutArea}>
          <Text style={styles.LogoutAreaTexet}>تسجيل الخروج</Text>
          <TouchableOpacity onPress={signOut}>
          <View style={styles.LogoutAreaContent}>
            <Text style={styles.LogoutAreaContentText}>تسجيل الخروج</Text>
            <Image source={require('../../layout/images/Profile_icons/logout.png')} resizeMode="contain" style={styles.LogoutAreaContentImage}/>
          </View></TouchableOpacity>

        </View>
      </View>

      
      </ScrollView>
      <BottomNavBar/>
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
      justifyContent:'flex-end',
      alignItems:'flex-end',
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
  WrapperUserInfoArea: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,
    

  },
  UserInfoArea: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      marginHorizontal:20,
      //marginTop:10,
  },
  UserInfoAreaLeft: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginRight:10,

  },
  UserInfoAreaLeftText: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  UserInfoAreaLeftTextOne: {
      fontSize:14,
      fontWeight:'300',
      color:colors.textDark,
  },
  UserInfoAreaRight: {
      height:50,
      width:50,
  },
  WrapperFavoritInteractArea: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,

  },
  FavoritInteractArea: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      marginHorizontal:20,

  },
  FavoritInteractAreaText: {
      marginRight:10,
      color:colors.textDarkOne,
  },
  FavoritInteractAreaImage: {
      height:20,
      width:20,

  },
  WrapperSettingsArea: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,

  },
  SettingsArea: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginHorizontal:20,

  },
  SettingsAreaTexet: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  SettingsAreaContent: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      //marginHorizontal:20,
      marginVertical:10,
  },
  SettingsAreaContentImage: {
      height:20,
      width:20,
  },
  SettingsAreaContentText: {
      marginRight:10,
      color:colors.textDarkOne,
  },
  /////////////////////////////////////////////////
  WrapperNotiArea: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,
  },
  NotiArea: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginHorizontal:20,

  },
  NotiAreaTexet: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  NotiAreaContent: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      //marginHorizontal:20,
      marginVertical:10,
  }, 
  NotiAreaContentText: {
      marginRight:10,
      color:colors.textDarkOne,
  }, 
  NotiAreaContentImage: {
      height:20,
      width:20,
  },
  WrapperNabdApp: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,
  },
  NabdApp: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginHorizontal:20,

  },
  NabdAppTexet: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  NabdAppContent: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      //marginHorizontal:20,
      marginVertical:10,
  }, 
  NabdAppContentText: {
      marginRight:10,
  }, 
  NabdAppContentImage: {
      height:20,
      width:20,
  },
  ////////////////////////////////////////
  WrapperLogoutArea: {
      //borderBottomColor:colors.light,
      //borderBottomWidth:0.3,
      paddingVertical:10,
      marginBottom:50,
  },
  LogoutArea: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginHorizontal:20,
  },
  LogoutAreaTexet: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  LogoutAreaContent: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      //marginHorizontal:20,
      marginVertical:10,
  }, 
  LogoutAreaContentText: {
      marginRight:10,
    
  }, 
  LogoutAreaContentImage: {
      height:20,
      width:20,
  },
});
