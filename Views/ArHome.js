import React from 'react';
import { StyleSheet,Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image,Dimensions,ImageBackground} from 'react-native';
import Title from '../Components/Reusable/Title';
import Carousel from 'react-native-reanimated-carousel';
import ReadMore from 'react-native-read-more-text';
import Slider from 'react-native-unlock-slider'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { defaultScheme } from '../Utils/constants';


const PageComponent = ({currentIndex,options}) => {
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',width:'100%'}}>
            {options.map((option,index)=>{
                return(
                    <View
                    key={`${index}-${option?.title}`}
                    style={{
                        backgroundColor:index == currentIndex?'#3282B8':'gray',
                        width:index==currentIndex?30:5,
                        height:5,
                        borderRadius:100,
                        marginLeft:5,
                        marginRight:5
                    }}
                    ></View>
                )
            })}
        </View>
    )
}

const SlideOpen = ({goToPage}) => {
    return(<View style={{width:'100%',marginVertical:10}}>
        <Slider
            isLeftToRight={true} // set false to move slider Right to Left
            childrenContainer={{borderRadius:0}}
            slideOverStyle={{backgroundColor: '#458bba',borderTopRightRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderBottomLeftRadius:30}}
            onEndReached={() => {
              goToPage()
            }}
            isOpacityChangeOnSlide={true}
            containerStyle={{
              margin: 8,
              marginLeft:0,
              marginRight:0,
              backgroundColor: '#458bba',
              borderRadius: 20,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            thumbElement={
              <View
                  style={{
                    width: 70,
                    margin: 4,
                    borderRadius: 20,
                    height: 70,
                    backgroundColor: 'white',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
              >
                <MaterialCommunityIcons
                name="chevron-double-right"
                color="#458bba"
                size={40}
                style={{fontWeight:'300'}}
                 />
              </View>
            }
        >
          <Text style={{fontWeight: '300',fontSize:17,color:'white'}}>{'Slide To Enter'}</Text>
        </Slider>
    </View>)
}


const ArHome = ({navigation}) => {

const [carouselIndex,setCarouselIndex] = React.useState(0);

const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        justifyContent:'space-between',
        display:'flex',
        flexDirection:'column',
        
    },
    scrollViewStyle:{
        padding:20,
        paddingTop:0,
        paddingBottom:0,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'

       
    }
});

const optionData = [
    {
        title:'Scan',
        description:'Select a book from the library and scan its pages to display AR content',
        imgSrc:require('../assets/images/scanImg.jpeg'),
        route:'Tracking'
    },
    {
        title:'View',
        description:'Open Environment where any of the available 3D models can be viewed without requiring a scan.',
        imgSrc:require('../assets/images/playground2.webp'),
        route:'Playground'
    },
    {
        title:'Portal',
        description:'Explore interesting places with the power of AR!',
        imgSrc:require('../assets/images/cupola.webp'),
        route:'Portal'
    }

]

const goToPage = () => {
    navigation.navigate(optionData[carouselIndex].route)
}
const width = Dimensions.get('window').width;


  return (
    <View style={stylesheet.containerStyle}>
        <View style={stylesheet.scrollViewStyle}>
            <Title text="Hello"/>
            <View style={{marginTop:10}}>
                <Title fontWeight={'500'} size={18} text="Select an option to get Started" color={defaultScheme.defaultColor}/>
            </View>
            <Carousel
            style={{marginTop:10}}
                width={width-40}
                height={400}
                data={optionData}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setCarouselIndex(index)}
                renderItem={({ index,item }) => (
                <View style={{height:400,width:'100%',padding:20,borderRadius:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <ImageBackground style={{height:350,width:width-40}} borderRadius={20} source={item?.imgSrc}/>
                </View>
                )}
            />
            <PageComponent currentIndex={carouselIndex} options={optionData}/>

        <View style={{width:'100%',marginTop:15,display:'flex',flexDirection:'column'}}>
                <View>
                    <Text style={{fontWeight:'600',fontSize:22}}>
                        {optionData[carouselIndex]?.title}
                    </Text>
                </View>
                <View style={{marginTop:20,height:50}}>
                    <ReadMore
                    numberOfLines={5}
                    >
                        <Text style={{fontSize:17,fontWeight:'400',color:'gray'}}>
                                {optionData[carouselIndex]?.description}
                        </Text> 
                    </ReadMore>
                </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <SlideOpen goToPage={goToPage}/>
            </View>
              
        </View>
    </View>
  )
}

export default ArHome