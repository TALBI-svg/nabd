import React,{useEffect,useState} from 'react';
import { StyleSheet, View, Text,StatusBar,ActivityIndicator} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
//import {Auth,Hub} from 'aws-amplify';
import colors from '../../layout/colors/colors'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/splash';
import Onboard from '../Screens/Onboard';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import EmailConfirmation from '../Screens/EmailConfirmation';
import ForgetPassword from '../Screens/ForgetPassword';
import ResetPassword from '../Screens/ResetPassword';
import Profile from '../Screens/Profile';
import Magazines from '../Screens/Magazines';
import MySources from '../Screens/MySources';
import Sport from '../Screens/Sport';
import LastNews from '../Screens/LastNews';
import SportViewMore from '../Screens/SubSources/SportViewMore';
import World from '../Screens/World';
import WorldDetailsPost from '../Screens/SubSources/WorldDetailsPost';
import WorldSimilarPosts from '../Screens/SubSources/WorldSimilarPosts';
import Search from '../Screens/Search';
import NoConnection from '../Screens/NoConnection';

const Stack = createNativeStackNavigator();

const Navigation = () => {
   
  return (
    <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown:false,}}>
           <Stack.Screen name="LastNews" component={LastNews} />
           <Stack.Screen name="Search" component={Search} />
           <Stack.Screen name="NoConnection" component={NoConnection} />
           <Stack.Screen name="World" component={World} />
           <Stack.Screen name="WorldDetailsPost" component={WorldDetailsPost} />
           <Stack.Screen name="WorldSimilarPosts" component={WorldSimilarPosts} />
         
           <Stack.Screen name="Sport" component={Sport} />  
           <Stack.Screen name="Profile" component={Profile} /> 
           <Stack.Screen name="Magazines" component={Magazines} />
           <Stack.Screen name="MySources" component={MySources} />
           <Stack.Screen name="SportViewMore" component={SportViewMore} />
           <Stack.Screen name="Splash" component={Splash} /> 
           <Stack.Screen name="Onboard" component={Onboard} /> 
           <Stack.Screen name="Signin" component={Signin} />  
           <Stack.Screen name="Signup" component={Signup} /> 
           <Stack.Screen name="EmailConfirmation" component={EmailConfirmation} /> 
           <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
           <Stack.Screen name="ResetPassword" component={ResetPassword} />
      
         </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Navigation;
const styles = StyleSheet.create({
    containner: {
      flex:1,
      backgroundColor:colors.backgroundScreen,
      height: hp('100%'), // 70% of height device screen
      width: wp('100%')   // 80% of width device screen
  
    },
   
  });