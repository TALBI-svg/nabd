import React from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView,FlatList,TextInput, ScrollView, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

import colors from '../../layout/colors/colors'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import LeaguesTypeData from '../../layout/data/LeaguesTypeData';
import MatchesData from '../../layout/data/MatchesData';
import BottomNavBar from './BottomNavBar';



export default function Sport() {
  const navigation = useNavigation();

  
    const renderLeaguesItem = ({item}) => {
        return(
            <TouchableOpacity>
              <View style={styles.LeaguesArea}>
                <Image source={item.image} resizeMode="contain" style={styles.LeaguesAreaImage}/>
              <Text style={styles.LeaguesAreaText}>{item.name}</Text>
            </View></TouchableOpacity>
        )
    }
    const renderMatchesItem = ({item}) => {
        return(
            <View style={styles.MImatchesBottom}>
                <View style={styles.MImatchesBottomTitle}>
                  <Text style={styles.MImatchesBottomTitleText}>{item.date}</Text>
                </View>

                <View style={styles.MImatchesBottomBottom}>

                  <View  style={styles.MImatchesBottomBottomLeft}>
                    <Text style={styles.MImatchesBottomBottomLeftText}>{item.teamLeft}</Text>
                    <Feather name="circle" size={20} color={colors.primery} style={styles.MImatchesBottomBottomLeftIcon}/>
                  </View>

                  <View style={styles.MImatchesBottomBottomMidlle}>
                    <Text style={styles.MImatchesBottomBottomMidlleText}>{item.result}</Text>
                    <View style={styles.MImatchesBottomBottomMidlleBottom}>
                      <Text style={styles.MImatchesBottomBottomMidlleBottomText}>{item.league}</Text>
                      <Text style={styles.MImatchesBottomBottomMidlleBottomTextOne}>|</Text>
                      <Text style={styles.MImatchesBottomBottomMidlleBottomTextTwo}>{item.done}</Text>
                    </View>
                  </View>

                  <View style={styles.MImatchesBottomBottomRight}>
                    <Text style={styles.MImatchesBottomBottomRightText}>{item.teamRight}</Text>
                    <Feather name="circle" size={20} color={colors.textDarkOne} style={styles.MImatchesBottomBottomRightIcon}/>
                  </View>

                </View>
            </View>
        )
    }
    
  return (
      <View style={styles.containner}>
      {/*Header*/}
        <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <TouchableOpacity>
              <View style={styles.HeaderLeft}>
                <Feather name="plus" size={10} color={colors.background} style={styles.HeaderLeftIcon}/>
                <Image source={require('../../layout/images/Profile_icons/sport_1.png')} style={styles.HeaderLeftImage}/>
              </View>
            </TouchableOpacity>
            <Text style={styles.HeaderRight}>رياضة</Text>
          </View>
          </SafeAreaView>
          {/*LeaguesArea*/}
          <View style={styles.WrepperLeaguesArea}>
            <FlatList
             data={LeaguesTypeData}
             renderItem={renderLeaguesItem}
             keyExtractor={(item) => item.id}
             horizontal={true}
             showsHorizontalScrollIndicator={false}
            />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          {/*FvTeamsArea*/}
          <View style={styles.WrapperFvTeamsArea}>
            <Text style={styles.FvTeamsAreaText}>الفرق المفضلة</Text>
            <TouchableOpacity>
              <View style={styles.FvTeamsAreaAdd}>
                <Feather name="plus" size={15} color={colors.primery} style={styles.FvTeamsAreaAddIcon}/>
              </View>
              <Text style={styles.FvTeamsAreaTextOne}>اضافة</Text>
            </TouchableOpacity>
          </View>
          {/*MImatches*/}
          <View style={styles.WrapperMImatches}>
            <View  style={styles.MImatchesTop}>
                <TouchableOpacity>
                <Text style={styles.MImatchesTopLeft}>عرض المزيد</Text></TouchableOpacity>
                <View style={styles.MImatchesTopRight}>
                    <Text style={styles.MImatchesTopRightText}>اهم المباريات</Text>
                    <Text style={styles.MImatchesTopRightTextOne}>بتوقيت المغرب</Text>
                </View>
            </View>
            <View style={styles.WrapperMImatchesBottom}>
              <FlatList
               data={MatchesData }
               renderItem={renderMatchesItem}
               keyExtractor={(item) => item.id}
               horizontal={false}
               numColumns={1}
               showsVerticalScrollIndicator={false}
               />
              <View style={styles.MImatchesShowMore}>
                <TouchableOpacity>
                  <Text style={styles.MImatchesShowMoreText}>عرض المزيد</Text>
                </TouchableOpacity>
              </View>
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
        backgroundColor:colors.backgroundOne,
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

    },
    HeaderLeftImage: {
        height:20,
        width:20,
    },
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.background,
    },
    WrepperLeaguesArea: {
        marginTop:10,
        paddingBottom:10,
        borderBottomColor:colors.light,
        borderBottomWidth:1, 
    },
    LeaguesArea: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10,
    }, 
    LeaguesAreaImage: {
        height:60,
        width:60,
        borderRadius:50,
        borderColor:colors.background,
        borderWidth:5,
    }, 
    LeaguesAreaText: {
        fontSize:12,
        fontWeight:'400',
        color:colors.textDark,
        marginTop:10,
    },
    WrapperFvTeamsArea: {
        marginHorizontal:10,
        marginTop:10,
        //borderColor:colors.textDark,
        //borderWidth:1,
    },
    FvTeamsAreaText: {
        fontSize:14,
        fontWeight:'bold',
        color:colors.textDarkOne,
    },
    FvTeamsAreaAdd: {
        flexDirection:'row',
        justifyContent:'flex-end',
        //alignItems:'flex-end',
        marginTop:10,
    },
    FvTeamsAreaAddIcon: {
        padding:10,
        backgroundColor:colors.background,
        borderRadius:50,
    },
    FvTeamsAreaTextOne: {
        fontSize:12,
        fontWeight:'800',
        color:colors.textDark,
        marginTop:5,
        marginRight:5,

    },
    WrapperMImatches: {
        marginHorizontal:10,
        marginTop:20,

    },
    MImatchesTop: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:10,
        paddingVertical:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        backgroundColor:colors.lightTwo,
    }, 
    MImatchesTopLeft: {
        backgroundColor:colors.primery,
        padding:6,
        paddingVertical:8,
        borderRadius:5,
        color:colors.background,
        fontSize:14,
        fontWeight:'500',


    }, 
    MImatchesTopRight: {},
    MImatchesTopRightText: {
        fontSize:14,
        fontWeight:'bold', 
        color:colors.textDarkOne,

    }, 
    MImatchesTopRightTextOne: {
        fontSize:14,
        fontWeight:'300', 
        color:colors.primeryOne,
    },
    WrapperMImatchesBottom: {
        marginBottom:60,
    },
    MImatchesBottom: {},
    MImatchesBottomTitle: {
        paddingVertical:5,
        paddingRight:5,
        //backgroundColor:colors.light,

    },
    MImatchesBottomTitleText: {
        fontSize:14,
        fontWeight:'300', 
        color:colors.textDarkOne,
    },
    MImatchesBottomBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.background,
        paddingVertical:10,
        paddingHorizontal:5,
    },
    MImatchesBottomBottomLeft: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    MImatchesBottomBottomLeftText: {
        marginRight:5,
        fontSize:14,
        fontWeight:'500',
        color:colors.textDark,
    }, 
    MImatchesBottomBottomLeftIcon: {}, 
    MImatchesBottomBottomMidlle: {
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

    },
    MImatchesBottomBottomMidlleText: {
        fontSize:12,
        fontWeight:'500',
        color:colors.textDarkOne,
    },
    MImatchesBottomBottomMidlleBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    MImatchesBottomBottomMidlleBottomText: {
        fontSize:12,
        fontWeight:'500',
        color:colors.textDarkOne,
    },
    MImatchesBottomBottomMidlleBottomTextOne: {
        marginHorizontal:5,
        fontSize:12,
        fontWeight:'500',
        color:colors.textDarkOne,
    },
    MImatchesBottomBottomMidlleBottomTextTwo: {
        fontSize:12,
        fontWeight:'500',
        color:colors.textDarkOne,
    },

    MImatchesBottomBottomRight: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',

    },
    MImatchesBottomBottomRightText: {
        marginRight:5,
        fontSize:14,
        fontWeight:'500',
        color:colors.textDark,
    },
    MImatchesBottomBottomRightIcon: {},
    MImatchesShowMore: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    MImatchesShowMoreText: {
        backgroundColor: colors.primery,
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:164.5,
        borderRadius:10,
        color:colors.background,
    },
    
    

});
