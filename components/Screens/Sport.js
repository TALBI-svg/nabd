import React,{useState,useEffect,useContext} from 'react'
import { StyleSheet,View, Text,Image,StatusBar, TouchableOpacity, SafeAreaView,FlatList,TextInput, ScrollView, ImageBackground,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { NewsContext } from './../../api/Context'
import moment from "moment";
import 'moment/locale/ar-ma'  // without this line it didn't work
moment.locale('ar-ma')

import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'
import LeaguesTypeData from '../../layout/data/LeaguesTypeData';
import BottomNavBar from './BottomNavBar';
import MatchesData from '../../layout/data/MatchesData'
import SportContent from './SubSources/SportContent';




export default function Sport() {
  const navigation = useNavigation();
  const SportViewMore = () => {
    navigation.navigate('SportViewMore')
  }
  const {data} = useContext(NewsContext);
  




  
  const renderLeaguesItem = ({item}) => {
    return(
        <TouchableOpacity>
          <View style={styles.LeaguesArea}>
            <Image source={item.image} resizeMode="contain" style={styles.LeaguesAreaImage}/>
          <Text style={styles.LeaguesAreaText}>{item.name}</Text>
        </View></TouchableOpacity>
      )
    }

    const renderMatchItem = ({item}) => {
      return(
        <View style={styles.MImatchesBottom}>
        <View style={styles.MImatchesBottomBottom}>
  
          <View  style={styles.MImatchesBottomBottomLeft}>
            <Image source={{uri: item.away_team.logo}} style={styles.MImatchesBottomBottomTeamImage}/>
            <Text style={styles.MImatchesBottomBottomTeamText}>{item.away_team.name}</Text>
          </View>
  
          <View style={styles.MImatchesBottomBottomMidlle}>
            <Text style={styles.MImatchesBottomBottomMidlleText}>{moment(item.match_start).format('lll')}</Text>
            <View style={styles.MImatchesBottomBottomMidlleBottom}>
              <Text style={styles.MImatchesBottomBottomMidlleBottomText}>{item.status}</Text>
              <Text style={styles.MImatchesBottomBottomMidlleBottomTextOne}>|</Text>
              <Text style={styles.MImatchesBottomBottomMidlleBottomTextTwo}>{item.stats.ht_score}</Text>
            </View>
          </View>
  
          <View style={styles.MImatchesBottomBottomRight}>
            <Text style={styles.MImatchesBottomBottomTeamText}>{item.home_team.name}</Text>
            <Image source={{uri: item.home_team.logo}} style={styles.MImatchesBottomBottomTeamImage}/>
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
                <Feather name="plus" size={10} color={colors.textDarkOne} style={styles.HeaderLeftIcon}/>
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
             data={data.slice(0,5)}
             renderItem={renderMatchItem}
             keyExtractor={(item) => item.id }
             horizontal={false}
             showsHorizontalScrollIndicator={false}
            />
              <View style={styles.MImatchesShowMore}>
                <TouchableOpacity onPress={SportViewMore}>
                  <Text style={styles.MImatchesShowMoreText}>عرض المزيد</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/*SprotContent*/}
            <View style={styles.WrapperSportContent}>
              {/*<SportContent/>*/}
            </View>
        
          </View>
          



          
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
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:colors.background,
    },
    HeaderLeft: {
        flexDirection:'row',

    },
    HeaderLeftImage: {
        height:20,
        width:20,
        backgroundColor:colors.textDarkOne,
        borderRadius:30,
    },
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDarkOne,
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
    WrapperMImatchesBottom: {},
    MImatchesBottom: {},
    MImatchesBottomTitle: {
        paddingVertical:5,
        paddingRight:5,
        //backgroundColor:colors.light,

    },
    MImatchesBottomBottom: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:colors.background,
        paddingVertical:10,
        paddingHorizontal:5,
        marginTop:5,
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
    MImatchesBottomBottomTeamText: {
        marginRight:5,
        fontSize:12,
        width:80,
        textAlign:'center',
        fontWeight:'500',
        color:colors.textDark,
        paddingHorizontal:5,
    },
    MImatchesBottomBottomRightIcon: {},
    MImatchesBottomBottomTeamImage: {
      borderColor:colors.primery,
      borderWidth:1,
      height:30,
      width:30,
      borderRadius:30,
    },
    MImatchesShowMore: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    MImatchesShowMoreText: {
        backgroundColor: colors.primery,
        color:colors.background,
        marginTop:10,
        paddingVertical:10,
        paddingHorizontal:164.5,
        borderRadius:10,
    },
    WrapperSportContent: {
      marginTop:5,
      marginBottom:50,
    },
    
    

});
