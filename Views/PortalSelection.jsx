import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image, ImageBackground,Dimensions} from 'react-native';
import Title from '../Components/Profile/Reusable/Title';
// import Carousel from 'react-native-snap-carousel';
import { portalAssets } from '../Utils/data';
import Carousel from 'react-native-reanimated-carousel';
import ReadMore from 'react-native-read-more-text';


const PortalSelection = () => {
const [carouselIndex,setCarouselIndex] = React.useState(0);
const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        marginBottom:20
    },
    scrollViewStyle:{
        padding:20,
        paddingTop:0,
        display:'flex',
        flexDirection:'column'
    }
});

const renderPortalItems = ({item,index}) => {
    return (
        <View>
            <ImageBackground source={item?.backgroundUrl}/>
        </View>
    )
}

const width = Dimensions.get('window').width;

  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="Portal"/>
            <View style={{marginTop:20,marginBottom:20}}>
                <Title fontWeight={'400'} size={18} text="Select a portal to get started"/>
            </View>
            <View style={{width:'100%'}}>
            <Carousel
                width={width-40}
                height={320}
                data={portalAssets}
                scrollAnimationDuration={500}
                onSnapToItem={(index) => setCarouselIndex(index)}
                renderItem={({ index,item }) => (
                <View style={{width:'100%',padding:10}}>
                    <ImageBackground style={{height:300,width:'100%'}} borderRadius={20} source={item?.backgroundUrl}/>
                </View>
                )}
            />

            </View>
            <View style={{width:'100%',marginTop:15,display:'flex',flexDirection:'column'}}>
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

                <TouchableOpacity>
                    <View style={{width:'100%',padding:15,backgroundColor:'#3282B8',marginTop:15,borderRadius:10,alignItems:'center'}}>
                        <Text style={{color:'white',fontSize:18}}>Create Portal</Text>
                    </View>
                </TouchableOpacity>

            </View>
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