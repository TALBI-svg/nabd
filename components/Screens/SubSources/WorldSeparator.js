import React from 'react'
import { StyleSheet,View,Dimensions,} from 'react-native';
import colors from '../../../layout/colors/colors';
const width = Dimensions.get('window').width-20;


export default function WorldSeparator({width='100%', height= 1, backgroundColor= '#d3d3d3', style}) {
  return (
      <View style={[{width,height,backgroundColor,alignSelf:'center'}, style]}/>  
  )
}
const styles = StyleSheet.create({})