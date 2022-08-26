import React from 'react'
import { StyleSheet,View,TextInput,} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import colors from '../../layout/colors/colors';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const navigation = useNavigation();
 

  return (
    <View style={styles.container}>
      <View style={styles.WrapperSearch}>
        <Feather name="search" size={18} color={colors.textDark} style={styles.SearchIcon}/>
        <TextInput
         placeholder='Search here !'
         placeholderTextColor={colors.textDark}
         style={styles.SearchText}
        />
      </View>

      
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {},
    WrapperSearch: {
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:10,
        marginHorizontal:10,
        backgroundColor:colors.backgroundOne,
        borderRadius:15,
    },
    SearchIcon: {
        marginLeft:5,
    },
    SearchText: {
        color:colors.textDark,
        fontSize:13,
        fontWeight:'400',
        marginLeft:5,
        padding:0,
        width:'80%',
    }, 
})