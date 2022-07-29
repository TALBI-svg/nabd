import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView, TouchableOpacityBase, TextInput, ScrollView, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BottomNavBar from './BottomNavBar';

export default function Magazines() {
  return (
    <View style={styles.containner}>
    {/*Header*/}
      <SafeAreaView>
        <View style={styles.WrapperHeader}>
          
          <Text style={styles.HeaderRight}>مجلات نبض</Text>
        </View>
      </SafeAreaView>
      {/*ContentArea*/}
      <View style={styles.WrapperContentArea}>
        <TouchableOpacity>
        <ImageBackground
         source={require('../../layout/images/Magazine_icons/sport.jpg')} 
         style={styles.ContentAreaImage}>
            <View style={styles.ContentAreaImageText}>
                <Text style={styles.ContentAreaImageTextText}>نبض الرياضة</Text>
            </View>

        </ImageBackground></TouchableOpacity>
        <View style={styles.ContentAreaBottom}>
          <View style={styles.ContentAreaBottomInSide}>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/hawaa.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/technology.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContentAreaBottom}>
          <View style={styles.ContentAreaBottomInSide}>

          <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/health.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/tourisme.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContentAreaBottom}>
          <View style={styles.ContentAreaBottomInSide}>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/econommics.jpeg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/cars.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>
          </View>
        </View>
        <View style={styles.ContentAreaBottom}>
          <View style={styles.ContentAreaBottomInSide}>
            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/coocking.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>

            <TouchableOpacity>
            <ImageBackground
             source={require('../../layout/images/Magazine_icons/knowledge.jpg')} 
             style={styles.ContentAreaBottomInSideImage}>
              <View style={styles.ContentAreaBottomInSideImageText}>
                <Text style={styles.ContentAreaBottomInSideImageTextText}>نبض الرياضة</Text>
              </View>
            </ImageBackground></TouchableOpacity>
          </View>
        </View>


      </View>

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
        justifyContent:'flex-end',
        alignItems:'flex-end',
        paddingVertical:15,
        paddingHorizontal:15,
        backgroundColor:colors.primery,
  
    },
    HeaderLeft: {},
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,
    },
    WrapperContentArea: {
        //marginHorizontal:5,
    },
    ContentAreaImage: {
        height:150,
        width:'100%',
    },
    ContentAreaImageText: {
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:120,
        marginRight:10,
       
    },
    ContentAreaImageTextText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,
        
    },
    ContentAreaBottom: {
        flexDirection:'column',
        //borderColor:colors.secondery,
        //borderWidth:1,
    },
    ContentAreaBottomInSide: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:3,

    },
    ContentAreaBottomInSideImage: {
        height:120,
        width:204,

    },
    ContentAreaBottomInSideImageText: {
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:90,
        marginRight:10,

    }, 
    ContentAreaBottomInSideImageTextText: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,

    },

});
