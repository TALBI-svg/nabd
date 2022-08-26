import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from "../../layout/colors/colors";

export default function Welcome() {
  const navigation = useNavigation ();
   setTimeout(() => {
    navigation.navigate('Signin')
   },500)

  return (
    <View style={styles.containner}>
        <Text style={styles.Text}>نبض</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    containner: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.primery,
        height: hp('100%'), // 100% of height device screen
        width: wp('100%')   // 100% of width device screen

    },
    Text: {
        fontSize:30,
        fontWeight:'bold',
        color:colors.backgroundOne,
    },
   
});