import React,{useContext} from "react";
import { StyleSheet, View, Linking,Text,SafeAreaView, TouchableOpacity,Image,FlatList, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import { NewsContext } from '../../../api/Context'

import moment from "moment";
import 'moment/locale/ar-ma'  // without this line it didn't work
moment.locale('ar-ma')
import colors from "../../../layout/colors/colors";


const SportViewMore= (props) => {
  const navigation = useNavigation();
  const {result} = useContext(NewsContext)
  
  
  
  
  
  const renderMatchInfoItem = ({item}) => {
    return(
      <View style={styles.MImatchesBottom}>
      <View style={styles.MImatchesBottomBottom}>

        <View  style={styles.MImatchesBottomBottomLeft}>
          <Image source={{uri: item.away_team_logo}} style={styles.MImatchesBottomBottomTeamImage}/>
          <Text style={styles.MImatchesBottomBottomTeamText}>{item.event_away_team}</Text>
        </View>

        <View style={styles.MImatchesBottomBottomMidlle}>
          <Text style={styles.MImatchesBottomBottomMidlleText}>{moment(item.event_date).format('lll')}</Text>
          <View style={styles.MImatchesBottomBottomMidlleBottom}>
            <Text style={styles.MImatchesBottomBottomMidlleBottomText}>{item.event_status}</Text>
            <Text style={styles.MImatchesBottomBottomMidlleBottomTextOne}>|</Text>
            <Text style={styles.MImatchesBottomBottomMidlleBottomTextTwo}>{item.event_ft_result}</Text>
          </View>
        </View>

        <View style={styles.MImatchesBottomBottomRight}>
          <Text style={styles.MImatchesBottomBottomTeamText}>{item.event_home_team}</Text>
          <Image source={{uri: item.home_team_logo}} style={styles.MImatchesBottomBottomTeamImage}/>
        </View>

      </View>
    </View>
    )
  }
  
 
  

    return(
      <View style={styles.containner}>
        {/*Header*/}
        <SafeAreaView>
          <View style={styles.WrapperHeader}>
            <Text style={styles.HeaderRight}>اهم المباريات</Text>
          </View>
          </SafeAreaView>
          {/*MatchInfo*/}
          <View style={styles.WrapperMImatchesBottom}>
            <FlatList
             data={result}
             renderItem={renderMatchInfoItem}
             keyExtractor={(item) => item.id}
             horizontal={false}
             showsVerticalScrollIndicator={false}
            />


          </View>
       
       </View>
    )
}

export default SportViewMore;

const styles = StyleSheet.create({
    containner: {
        flex:1,
        backgroundColor:colors.background,
        //height: hp('100%'), // 100% of height device screen
        //width: wp('100%')   // 100% of width device screen
    },
    WrapperHeader: {
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        paddingVertical:10,
        paddingHorizontal:10,
        backgroundColor:colors.background,
    },
    HeaderRight: {
        fontSize:16,
        fontWeight:'bold',
        color:colors.textDarkOne,
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
   
});