import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput, ScrollView,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'



export default function BottomNavBar() {
const navigation = useNavigation();

  const MyAccount= () => {
    navigation.navigate('Profile');
    
  }
  const Magazines = () => {
    navigation.navigate('Magazines');

  }

  const MySources = () => {
    navigation.navigate('MySources');

  }

  const Sport = () => {
    navigation.navigate('Sport');
    
  }

  const LastNews = () => {
    navigation.navigate('LastNews');
    
  }



  return (
    <View style={styles.containner}> 
      <View style={styles.WrapperBottomNavbar}>
        <View style={styles.BottomNavbar}>
          <TouchableOpacity onPress={LastNews}>
          <View style={styles.BottomNavbarContent}>
            <Image source={require('../../layout/images/BottomNavBar_cions/world.png')} resizeMode="contain" style={styles.BottomNavbarContentImage}/>
            <Text style={styles.BottomNavbarContentText}>اخر الاخبار</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={Sport}>
          <View style={styles.BottomNavbarContent}>
            <Image source={require('../../layout/images/BottomNavBar_cions/ball.png')} resizeMode="contain" style={styles.BottomNavbarContentImage}/>
            <Text style={styles.BottomNavbarContentText}>رياضة</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={MySources}>
          <View style={styles.BottomNavbarContent}>
            <Image source={require('../../layout/images/BottomNavBar_cions/list.png')} resizeMode="contain" style={styles.BottomNavbarContentImage}/>
            <Text style={styles.BottomNavbarContentText}>مصادري</Text>
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={Magazines}>
          <View style={styles.BottomNavbarContent}>
            <Image source={require('../../layout/images/BottomNavBar_cions/book.png')} resizeMode="contain" style={styles.BottomNavbarContentImage}/>
            <Text style={styles.BottomNavbarContentText}>مجلات نبض</Text>
          </View>
           </TouchableOpacity>

          <TouchableOpacity onPress={MyAccount}>
          <View style={styles.BottomNavbarContent}>
            <Image source={require('../../layout/images/BottomNavBar_cions/user.png')} resizeMode="contain" style={styles.BottomNavbarContentImage}/>
            <Text style={styles.BottomNavbarContentText}>حسابي</Text>
          </View>
          </TouchableOpacity>
        </View>
    
      </View>
        
    </View> 
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        //backgroundColor:colors.backgroundScreen,
        height: hp('100%'), // 100% of height device screen
        width: wp('100%')   // 100% of width device screen
    },
    WrapperBottomNavbar: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.background,
        borderTopColor:colors.light,
        borderTopWidth:0.3,
        width:'100%',
        height:45,
        position: 'absolute',  
        bottom:0,
    },
    BottomNavbar: {
        flexDirection:'row',
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    BottomNavbarContent: {
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    },
    BottomNavbarContentImage: {
        height:20,
        width:20,
        marginHorizontal:33.5,
        
    },
    BottomNavbarContentText: {
      fontSize:10,
      fontWeight:'400',
      color:colors.textDark,
    },
});