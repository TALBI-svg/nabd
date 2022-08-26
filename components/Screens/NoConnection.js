import React from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import colors from '../../layout/colors/colors'
import Feather from 'react-native-vector-icons/Feather'

const NoConnection = ({onRefreshPress}) => {
  return (
    <View style={styles.container}>
      <Feather name="wifi-off" size={20} color={colors.textDark}/>
      <Text style={styles.TextArea}>NoConnection</Text>

      <Pressable onPress={onRefreshPress} style={styles.PressableArea}>
        <Feather name="refresh-cw" size={12} color={colors.textDarkOne}/>
        <Text style={styles.PressableAreaText}>Try again !</Text>
      </Pressable>
    </View>
  )
}

export default NoConnection

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  TextArea: {
    fontSize:14,
    fontWeight:'500',
    color:colors.textDark,
  },
  PressableArea: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  PressableAreaText: {
    fontSize:14,
    fontWeight:'400',
    color:colors.textDarkOne,
    marginLeft:5,

  },
})