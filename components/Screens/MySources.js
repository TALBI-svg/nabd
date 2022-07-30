import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput, ScrollView, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import BottomNavBar from './BottomNavBar';



export default function MySources() {
  const navigation = useNavigation();

  
  return (
    <View style={styles.containner}>
        {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
            <View style={styles.HeaderLeft}>
              <TouchableOpacity>
                <Image source={require('../../layout/images/Profile_icons/settings_1.png')} style={styles.HeaderLeftImage}/></TouchableOpacity>
              <TouchableOpacity>
                <Feather name="search" size={20} color={colors.background} style={styles.HeaderLeftIcon}/></TouchableOpacity>

            </View>
          
          <Text style={styles.HeaderRight}>مصادري</Text>
        </View>
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/*MySourcesArea*/}
      <View style={styles.WrapperMySourcesArea}>
        <View style={styles.MySourcesArea}>
          <Text style={styles.MySourcesAreaText}>اقسامي</Text>
          <TouchableOpacity>
          <View style={styles.MySourcesAreaContent}>
            <Text style={styles.MySourcesAreaContentText}>المغرب</Text>
            <Image source={require('../../layout/images/Countrys_flags/morocco.png')} resizeMode="contain" style={styles.MySourcesAreaContentImage}/>
          </View></TouchableOpacity>
        </View>
      </View>
      {/*MySource*/}
      <View style={styles.WrapperMySource}>
        <View style={styles.MySource}>
          <Text style={styles.MySourceText}>المغرب</Text>
          <TouchableOpacity>
          <View style={styles.MySourceContent}>
            <Text style={styles.MySourceContentText}>بي بي سي</Text>
            <Image source={require('../../layout/images/Departments_contents/bbc.png')} resizeMode="contain" style={styles.MySourceContentImage}/>
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
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:colors.primery,
  
    },
    HeaderLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    HeaderLeftIcon: {},
    HeaderLeftImage: {
        height:20,
        width:20,
        marginRight:20,
    },
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,
    },
    WrapperMySourcesArea: {
        borderBottomColor:colors.light,
        borderBottomWidth:0.3,
        paddingVertical:10,
  
    },
    MySourcesArea: {
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginHorizontal:20,
  
    },
    MySourcesAreaText: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDark,
    },
    MySourcesAreaContent: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        //marginHorizontal:20,
        marginVertical:10,
    },
    MySourcesAreaContentImage: {
        height:20,
        width:20,
    },
    MySourcesAreaContentText: {
        marginRight:10,
    }, 
    ///////////////////////////////////////////////////
    WrapperMySource: {
      borderBottomColor:colors.light,
      borderBottomWidth:0.3,
      paddingVertical:10,

  },
  MySource: {
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'flex-end',
      marginHorizontal:20,

  },
  MySourceText: {
      fontSize:14,
      fontWeight:'bold',
      color:colors.textDark,
  },
  MySourceContent: {
      flexDirection:'row',
      justifyContent:'flex-end',
      alignItems:'center',
      //marginHorizontal:20,
      marginVertical:10,
  },
  MySourceContentImage: {
      height:20,
      width:20,
  },
  MySourceContentText: {
      marginRight:10,
  },

});
