import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput, ScrollView, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BottomNavBar from './BottomNavBar';

export default function MySources() {
  return (
    <View style={styles.containner}>
        <Text>Hello from my sources repo</Text>

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

});
