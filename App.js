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

import Navigation from './components/Navigation/index';
  
 
  
 


export default App = () => {
  return (
    <View style={styles.containner}>
      <Navigation/>

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


