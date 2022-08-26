import React from 'react'
import { StyleSheet, Text,Image,TouchableOpacity, View, ScrollView } from 'react-native'
import colors from '../../../layout/colors/colors';
import dateFormat from 'dateformat';
import { useNavigation } from '@react-navigation/native';

const IMAGE_WIDTH = 100;
export default function WorldListItems ({post, onPress}) {
  const {thumbnail, title, createdAt, author} = post

  const getThumbnail = (uri) =>{
    if(uri) return {uri}; 
    
    return require('../../../layout/images/Error_messages/no-data.png')
  }

  return (
    <TouchableOpacity style={styles.Touchab} onPress={onPress}> 
       <Image source={getThumbnail(thumbnail)} style={styles.Image}/>
       <View style={styles.ImageBottom}>
         <Text style={styles.ImageBottomText}>{title}</Text>
         <Text style={styles.ImageBottomDate}>{dateFormat(createdAt, 'mediumDate')} - {author}</Text>
       </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    Touchab: {
        flexDirection:'row', 
        marginTop:5, 
    },
    Image: {
        width:IMAGE_WIDTH,
        height:IMAGE_WIDTH/1.7,
    },
    ImageBottom: {
        flex:1,
        marginLeft:5,
    },
    ImageBottomText: {
        fontSize:12,
        fontWeight:'600',
        color:colors.textDark,
    },
    ImageBottomDate: {
        fontSize:10,
        fontWeight:'400',
        color:colors.textDark,
    },
})