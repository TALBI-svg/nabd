import React,{useState} from 'react'
import { StyleSheet,View, Text,Image,RefreshControl,StatusBar,TouchableOpacity,SafeAreaView,FlatList,TextInput,ScrollView,ImageBackground,} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { getSinglePost, searchPosts } from '../../api/post';
import colors from '../../layout/colors/colors';
import { useNavigation } from '@react-navigation/native';
import WorldListItems from './SubSources/WorldListItems'

const Search = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [notFound, setNotFound] = useState(false)

  const handleOnSubmit = async () => {
    if(!query.trim()) return;

    // submit the form 
    const {error, posts} = await searchPosts(query)
    if(error) return console.log(error)
    
    if(!posts.length) return setNotFound(true)
    setResults([...posts])
  }

  const handlePostPress = async (slug) => {
    const {error, post} = await getSinglePost(slug)
    
    if(error) return console.log(error)
    navigation.navigate('WorldDetailsPost', {post})
      
  }

  return (
    <View style={styles.container}>
      <View style={styles.WrapperSearch}>
        <Feather name="search" size={18} color={colors.textDark} style={styles.SearchIcon}/>
        <TextInput
         placeholder='Search here !'
         placeholderTextColor={colors.textDark}
         style={styles.SearchText}
         value={query}
         onChangeText={(text) => setQuery(text)}
         onSubmitEditing={handleOnSubmit}
        />
      </View>

        <ScrollView>
          {notFound ? ( <Text style={styles.ResultArea}>Result Not Found !</Text> ) : ( 
            results.map((post) => {
              return (
                <View key={post.id} style={styles.Content}>
                  <WorldListItems post={post} onPress={() => handlePostPress(post.slug)}/>
                </View>
              )})
          )}
        </ScrollView>
      
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
    Content: {
        marginHorizontal:10,
        marginTop:5,
    },
    ResultArea: {
      marginHorizontal:10,
      marginTop:10,
      color:colors.secondery,
      textAlign:'center',
      fontSize:13,
    }, 
})