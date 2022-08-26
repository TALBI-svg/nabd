import React,{useEffect, createContext, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios';


export const NewsContext = createContext();

const Context = ({children}) => {
  const [articles,setArticles] = useState([]);
  const [data,setData] = useState([]);
  const [result,setResult] = useState([]); 

  
  
  
    async function getNews() {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?language=ar&category=business&apiKey=346c4a71179a498fafeac9e469839ef7');
        setArticles(response.data.articles); 
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
        getNews();
    },[]);
    
    {/*async function getFootNews() {
      try {
        const response = await axios.get('https://www.scorebat.com/video-api/v3/feed/?token=MjIzODZfMTY1OTg0MzMzNF9iOTllMmQ2ZjlhNDdhNTI4OGRjZThmMmFiODFlOGM4YTgzMzZlZmI4');
        setResponse(response.data.response); 
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
        getFootNews();
    },[]);*/}

    async function getFootNews() {
      try {
        const response = await axios.get('https://app.sportdataapi.com/api/v1/soccer/matches?apikey=93e23470-1b46-11ed-a8b6-759f8d4f99e7&season_id=496&date_from=2020-09-19');
        setData(response.data.data); 
        //console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
        getFootNews();
    },[]);

    async function getMatch() {
      try {
        const response = await axios.get
        ('https://apiv2.allsportsapi.com/football/?met=Fixtures&APIkey=6b7cd61bad755a182aa9f867a7339420991f32536190d15b9e83f3a32c9bf12e&from=2021-05-18&to=2021-05-18');
        setResult(response.data.result); 
        //console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
    useEffect(() => {
        getMatch();
    },[]);

    
    
   

  

  return (
    <NewsContext.Provider value={{articles,getNews,data,getFootNews,result,getMatch}}>
      {children}
    </NewsContext.Provider>
  )
}

export default Context;