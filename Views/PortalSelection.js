import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image, ImageBackground,Dimensions,StatusBar} from 'react-native';
import Title from '../Components/Reusable/Title';
// import Carousel from 'react-native-snap-carousel';
import { portalAssets } from '../Utils/portalAssets';
import Carousel from 'react-native-reanimated-carousel';
import ReadMore from 'react-native-read-more-text';
import { useFocusEffect } from '@react-navigation/native';
import { defaultScheme } from '../Utils/constants';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import PortalSelectCard from '../Components/Ar/ArPortals/PortalSelectCard';
import { BlurView } from '@react-native-community/blur';
import styles from 'rn-range-slider/styles';
import { SheetManager } from 'react-native-actions-sheet';

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



const PortalSelection = ({navigation}) => {
const [carouselIndex,setCarouselIndex] = React.useState(0);
const [currentView,setCurrentView] = React.useState('list');
const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        marginBottom:20,
        paddingBottom:60
    },
    scrollViewStyle:{
        padding:20,
        paddingTop:0,
        display:'flex',
        flexDirection:'column',
    },
    toggleStyle:{
        display:'flex',
        padding:15,
        backgroundColor:'transparent',
        color:defaultScheme.defaultColor,
        borderRadius:10,
        // borderWidth:1,
        // borderStyle:`solid`,
        // borderColor:defaultScheme.defaultColor

    }
});

const renderPortalItems = ({item,index}) => {
    return (
        <View>
            <ImageBackground source={item?.backgroundUrl}/>
        </View>
    )
}

const toggleView = () => {
    if (currentView == 'list')
    {
        setCurrentView('carousel');
    }
    else {
        setCurrentView('list');
    }

}

const goToPortal = (id) => {
    navigation.navigate('PortalCamera',{backIndex:2,portalId:id});
    SheetManager.hide('portalPreviewSheet');
}

const handlePortalSelect = (id) => {
    SheetManager.show('portalPreviewSheet',{payload:{portalId:id,
    onpress:goToPortal
    }});
}

const width = Dimensions.get('window').width;
useFocusEffect(()=>{
    StatusBar.setBarStyle('dark-content');
})

  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:20}}>
                <View style={{display:'flex',flexDirection:'column'}}>
                    <Title text="Portal"/>
                    <View style={{marginTop:10}}>
                        <Title color={defaultScheme.defaultColor} fontWeight={'500'} size={18} text="Select a portal to get started"/>
                    </View>

                </View>
               
                    {/* <TouchableOpacity onPress={toggleView} style={{backgroundColor:'transparent'}}>
                    <BlurView blurType='light' blurAmount={30} style={stylesheet.toggleStyle}>
                        <MaterialCommunityIcons color={defaultScheme?.defaultColor} name={currentView == 'carousel'?'format-list-bulleted-square':'gesture-swipe'} size={25}/>
                    </BlurView>
                    </TouchableOpacity> */}
               

            </View>

            {
                currentView == 'carousel' && 
                <>
                    <View style={{width:'100%',marginBottom:15}}>
                        <Carousel
                            width={width-40}
                            height={320}
                            data={portalAssets.filter((portal)=>{return portal.isDeleted == false})}
                            scrollAnimationDuration={500}
                            onSnapToItem={(index) => setCarouselIndex(index)}
                            renderItem={({ index,item }) => (
                            <View style={{width:'100%',padding:10}}>
                                <ImageBackground style={{height:300,width:'100%'}} borderRadius={20} source={item?.backgroundUrl}/>
                            </View>
                            )}
                        />

                        </View>
                        <PageComponent currentIndex={carouselIndex} options={portalAssets}/>
                        <View style={{width:'100%',marginTop:25,display:'flex',flexDirection:'column'}}>
                            <View>
                                <Text style={{fontWeight:'600',fontSize:20}}>
                                    {portalAssets[carouselIndex]?.title}
                                </Text>
                            </View>
                            <View style={{marginTop:20}}>
                                <ReadMore
                                numberOfLines={5}
                                >
                                    <Text style={{fontSize:16}}>
                                            {portalAssets[carouselIndex]?.description}
                                    </Text> 
                                </ReadMore>
                            </View>

                            <TouchableOpacity onPress={()=>{navigation.navigate('PortalCamera',{portalId:carouselIndex,backIndex:0})}}>
                                <View style={{width:'100%',padding:15,backgroundColor:'#3282B8',marginTop:15,borderRadius:10,alignItems:'center'}}>
                                    <Text style={{color:'white',fontSize:18,fontWeight:'400'}}>Create Portal</Text>
                                </View>
                            </TouchableOpacity>

                    </View>
                </>
                
            }

            {
                currentView == 'list' && 
                <ScrollView>
                
                {portalAssets.map((portal,index)=>{
                    if (portal.isDeleted == false){
                        return(
                            <TouchableOpacity onPress={()=>{
                                handlePortalSelect(portal?.id);
                                }} key={`${index}-${portal?.title}`}>
                                    <PortalSelectCard data={{'title':portal?.title,'imgUrl':portal?.backgroundUrl,'location':portal?.location}} />
                            </TouchableOpacity>
                        )

                    }
                    
                })}
            </ScrollView>
            }
           
       
            {/* <ScrollView>
                {bookList.map((book,index)=>{
                    return(
                        <TrackingBookCard data={book} key={`${index}-${book.title}`}/>
                    )
                })}
            </ScrollView> */}
        </ScrollView>

    </View>
  )
}

export default PortalSelection