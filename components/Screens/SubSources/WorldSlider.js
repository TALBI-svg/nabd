import React,{useState,useEffect,useRef,} from 'react'
import { StyleSheet,View,Dimensions, Text,Image,FlatList, TouchableWithoutFeedback,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import colors from '../../../layout/colors/colors';


const width = Dimensions.get('window').width-20;
let currentSildeIndex = 0;
let intervalId;
const WorldSlider = ({data, title, onSlidePress}) => {
  const [dataToRender,setDataToRender] = useState([]);
  const [visibleSlideIndex, setVisibleSlideIndex] = useState(0)
  const [activeSlideIndex,setActiveSlideIndex] = useState(1)


  const onViewableItemsChanged = useRef (({viewableItems}) => {
    currentSildeIndex = viewableItems[0]?.index || 0
    setVisibleSlideIndex(currentSildeIndex)
  })

  const viewabilityConfig = useRef ({
     viewAreaCoveragePercentThreshold: 50
  });
  
  const flatList = useRef()

  const handleScrollTo = (index) => {
    flatList.current.scrollToIndex({animated:false, index});
  }



  const startSlider = () => {
    if(currentSildeIndex <= dataToRender.length -2 ){
      intervalId = setInterval(() => {
        flatList.current?.scrollToIndex({animated:true, index: currentSildeIndex + 1});
      }, 3000) 
    } else{
       pauseSlider() 
    }
    
  }
  const pauseSlider = () => {
    clearInterval(intervalId)
  }
  
 

  useEffect(() => {
    if(dataToRender.length && flatList.current){
      startSlider();
    }

    return () => {
      pauseSlider()
    }
  },[dataToRender.length])

  useEffect(() => {
    const newData = [[...data].pop(), ...data, [...data].shift()];
    setDataToRender([...newData])
  }, [data.length]);

  useEffect(() => {
    const length = dataToRender.length
    //reset slide to first 
    if(visibleSlideIndex === length - 1 && length)handleScrollTo(1)

    //reset slide to last
    if(visibleSlideIndex === 0 && length)handleScrollTo(length - 2)
    
     

    const lastSlide = currentSildeIndex === length - 1
    const firstSlide = currentSildeIndex === 0

    if(lastSlide && length) setActiveSlideIndex(0)
    else if(firstSlide && length) setActiveSlideIndex(length - 2)
    else setActiveSlideIndex(currentSildeIndex - 1)
  },[visibleSlideIndex])



  const renderSlideItem = ({item}) => {
    return(
      <TouchableWithoutFeedback onPress={() => onSlidePress(item)}>
      <View>
        <Image source={{uri: item.thumbnail}}style={{width:width,height:width/1.7,borderRadius:7,}}/>
        <View style={styles.WrapperBottom}>
          <Text numberOfLines={2} style={styles.BottomTitleText}>{item.title}</Text>
        </View>
      </View></TouchableWithoutFeedback>
    )
  }
  
  return (
    <View style={styles.containner}>
      <View style={styles.WrapperTitle}>
        <View style={styles.WrapperTitleRight}>
          <SlideIndicators data={data} activeSlideIndex={activeSlideIndex}/>
        </View>

        <Text style={styles.TitleText}>احدث المنشورات  </Text>
      </View>
      <FlatList
      ref={flatList}
      data={dataToRender}
      keyExtractor={(item, index) => item.id +index}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      initialScrollIndex={1}
      getItemLayout={(_, index)=> ({
        length:width,
        offset:width * index,
        index
      })}
      onViewableItemsChanged={onViewableItemsChanged.current}
      viewabilityConfig={viewabilityConfig.current}
      onScrollBeginDrag={pauseSlider}
      onScrollEndDrag={startSlider}
      renderItem={renderSlideItem}
      />
    </View>
  )
}
const SlideIndicators = ({data, activeSlideIndex}) => 
   data.map((item , index) => {
    return <View key={item.id} style={[styles.TitleRight,{backgroundColor: activeSlideIndex ===index? colors.textDark : 'transparent'}]}/>}
   )
export default WorldSlider
const styles = StyleSheet.create({
  containner: {
    alignSelf:'center',
    width:width,
    paddingTop:10,
},
WrapperTitle: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
},
TitleText: {
    fontSize:13,
    fontWeight:'bold',
    color:colors.textDarkOne,
    paddingVertical:5,
},
WrapperTitleRight: {
    flexDirection:'row',
    alignItems:'center',
},
TitleRight: {
    width:12,
    height:12,
    borderRadius:6,
    borderWidth:2,
    marginLeft:5,
},
WrapperBottom: {
    width:width,
},
BottomTitleText: {
    fontSize:16,
    fontWeight:'bold',
    color:colors.textDark,
    paddingVertical:5,
    
},
})