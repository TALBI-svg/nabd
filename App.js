/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text,StatusBar,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from './layout/colors/colors'
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import Navigation from './components/Navigation/index';

export default function App () { 
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


