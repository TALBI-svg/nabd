import * as React from 'react';
import { StyleSheet, View, Text,StatusBar,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../Screens/Welcome';
import Onboard from '../Screens/Onboard';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import EmailConfirmation from '../Screens/EmailConfirmation';
import ForgetPassword from '../Screens/ForgetPassword';
import ResetPassword from '../Screens/ResetPassword';
import Profile from '../Screens/Profile';
import Magazines from '../Screens/Magazines';
import BottomNavBar from '../Screens/BottomNavBar';
import MySources from '../Screens/MySources';
import Sport from '../Screens/Sport';
import LastNews from '../Screens/LastNews';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
         <Stack.Navigator  screenOptions={{headerShown:false,}}>
           <Stack.Screen name="LastNews" component={LastNews} />
           
           <Stack.Screen name="Sport" component={Sport} />  
           <Stack.Screen name="Welcome" component={Welcome} /> 
           <Stack.Screen name="Onboard" component={Onboard} /> 
           <Stack.Screen name="Signin" component={Signin} />  
           <Stack.Screen name="Signup" component={Signup} /> 
           <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} /> 
           <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
           <Stack.Screen name="ResetPassword" component={ResetPassword} />
           <Stack.Screen name="Profile" component={Profile} /> 
           <Stack.Screen name="Magazines" component={Magazines} />  
           <Stack.Screen name="BottomNavBar" component={BottomNavBar} /> 
           <Stack.Screen name="MySources" component={MySources} />


         </Stack.Navigator>
    </NavigationContainer>
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