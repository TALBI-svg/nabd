import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { getSimilarPosts } from '../../../api/post';
import WorldListItems from './WorldListItems';
import colors from '../../../layout/colors/colors';


const WorldSimilarPosts = ({postId,onPostPress}) => {
  const navigation = useNavigation();
  const [posts,setPosts] = useState([])


  

  const fetchSimilarPosts = async () => {
    const {error, posts} = await getSimilarPosts(postId)
    if(error) console.log(error)

    setPosts([...posts])
  }

  useEffect(() => {
    fetchSimilarPosts()
  },[postId])

  return posts.map((post) => {
        return (
          <View style={styles.container} key={post.id} >
            <WorldListItems 
            onPress={() => onPostPress(post.slug)} 
            post={post}/>
          </View> 
          )
        })
}

export default WorldSimilarPosts

const styles = StyleSheet.create({
    container: {
        marginTop:5,
        //backgroundColor:colors.primery,
    },

})