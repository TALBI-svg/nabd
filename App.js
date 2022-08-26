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
import Context from './api/Context';
import { Amplify } from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);

import Navigation from './components/Navigation/index';
import NoConnection from './components/Screens/NoConnection';
import { useNetInfo } from '@react-native-community/netinfo';


function App () {
  const [noInternet,setNoInternet] = useState(false)

  const netInfo = useNetInfo()
  //console.log(netInfo)

  const fetchNetInfo = () => {
    const {isConnected,isInternetReachable} = netInfo  
    if(isConnected === false && isInternetReachable === false)
      setNoInternet(true)
    else 
      setNoInternet(false)
    
  }

  useEffect(() => {
    fetchNetInfo()
  },[netInfo])
  
  if(noInternet) return <NoConnection onRefreshPress={fetchNetInfo}/>
  return (
    <View style={styles.containner}>
      <Navigation/>
    </View>
  );
  
}
export default () => {
  return(
    <Context>
       <App/>
    </Context>
  )
}
const styles = StyleSheet.create({
  containner: {
    flex:1,
    backgroundColor:colors.backgroundScreen,
    height: hp('100%'), // 70% of height device screen
    width: wp('100%')   // 80% of width device screen

  },
 
});


