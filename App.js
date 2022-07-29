/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text,StatusBar,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from './layout/colors/colors'

import Welcome from './components/Screens/Welcome';
import Onboard from './components/Screens/Onboard';
import Signin from './components/Screens/Signin';
import Signup from './components/Screens/Signup';
import EmailConfirmation from './components/Screens/EmailConfirmation';
import ForgetPassword from './components/Screens/ForgetPassword';
import ResetPassword from './components/Screens/ResetPassword';
import Profile from './components/Screens/Profile';
import Magazines from './components/Screens/Magazines';
import BottomNavBar from './components/Screens/BottomNavBar';
import MySources from './components/Screens/MySources';
  
 
  
 


export default App = () => {
  return (
    <View style={styles.containner}>
      <MySources/>

    </View>
   
  );
}

const styles = StyleSheet.create({
  containner: {
    flex:1,
    backgroundColor:colors.backgroundScreen,
    height: hp('100%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen

  },
 
});


