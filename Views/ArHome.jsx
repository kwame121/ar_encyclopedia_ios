import React from 'react';
import { StyleSheet,Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image} from 'react-native';
import OptionCard from '../Components/Profile/Ar/OptionCard';
import Title from '../Components/Profile/Reusable/Title';


const ArHome = ({navigation}) => {

const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:'100%',
        backgroundColor:'white'
    },
    scrollViewStyle:{
        padding:20,
        paddingTop:0,
        display:'flex',
        flexDirection:'column'
    }
});

const optionData = [
    {
        title:'Tracking Mode',
        description:'Select a book from the library and scan its pages to display AR content',
        imgSrc:require('../assets/images/assetImages/tracking.png'),
        route:'Tracking'
    },
    {
        title:'Sandbox',
        description:'Open Environment where any of the available 3d models can be viewed',
        imgSrc:require('../assets/images/assetImages/sandbox.png'),
        route:'Sandbox'
    },
    {
        title:'Portal',
        description:'Explore interesting places with the power of AR!',
        imgSrc:require('../assets/images/assetImages/portal.png'),
        route:'Portal'
    }

]
  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="AR"/>
            <View style={{marginTop:10}}>
                <Title fontWeight={'400'} size={18} text="Select an option to get Started"/>
            </View>
            <ScrollView style={{width:'100%',display:'flex',flexDirection:'column'}}>
                {
                    optionData.map((option,index)=>{
                        return(
                            <TouchableOpacity key={`${index}-${option.title}`} onPress={()=>{navigation.navigate(option.route)}}>
                                <OptionCard data={option}/>
                            </TouchableOpacity>   
                        )
                    })
                }
            </ScrollView>
        </ScrollView>
    </View>
  )
}

export default ArHome