import React from 'react'
import { StyleSheet,Animated, Text,ScrollView, View,FlatList ,Alert, TouchableOpacity, ImageBackground,Platform, StatusBar} from 'react-native';
import { getLesson,getTrackersByLesson,returnDefault } from '../Utils/functions';
import Title from '../Components/Reusable/Title';
import NavPill from '../Components/Modules/NavPill';
import ImageView from '../Components/Modules/ImageView';
import ModelView from '../Components/Modules/ModelView';
import TextView from '../Components/Modules/TextView';
import { defaultScheme, subjectColor } from '../Utils/constants';
import { useFocusEffect } from '@react-navigation/native';



const stylesheet = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        // height:'100%',
        backgroundColor:'white',
        width:'100%',
        marginBottom:60,
        paddingTop:20
    },
    tabWrapperStyle:
    {
        width:'100%',
        display:'flex',
        flexDirection:'row'
    },
    tabTitleStyle: {
        color:'black',
        backgroundColor:'white'
    },
    tabContainerStyle:{
        backgroundColor:'white'
    },
    imageCardStyle:{
        shadowOffset: Platform?.OS == 'ios'?{width: 1, height: 4}:'unset',
        shadowOpacity: Platform?.OS == 'ios'?0.2:'unset',
        shadowRadius: Platform?.OS == 'ios'?8:'unset',
        width:250,
        height:250,
        backgroundColor:'#e6e6e6',
        borderRadius:10,
        padding:10
    }
});

const ModuleDetails = ({route,navigation}) => {
 let {id} = route.params;
 const [lesson,setLesson] = React.useState(null);
 const [trackers,setTrackers] = React.useState([]);
 const [tabValue,setTabValue] = React.useState(0);
 const imageBounce = React.useRef(new Animated.Value(0)).current;
 const contentBounce = React.useRef(new Animated.Value(0)).current;


 React.useEffect(()=>{
    let lesson = getLesson(id);
    console.log(lesson,'599');
    let trackers = getTrackersByLesson(id);
    setTrackers(trackers);
    setLesson(lesson);
 },[]);

 React.useEffect(()=>{

    if (tabValue == 0)
    {
        Animated.timing(
            imageBounce,{
                toValue:0,
                useNativeDriver:true,
                duration:500
            }
        ).start();

        Animated.timing(
            contentBounce,{
                toValue:0,
                useNativeDriver:true,
                duration:500
            }
        ).start();
    }
    if (tabValue !==0)
    {
        Animated.timing(
            imageBounce,{
                toValue:-500,
                useNativeDriver:true,
                duration:500
            }
        ).start();

        Animated.timing(
            contentBounce,{
                toValue:-320,
                useNativeDriver:true,
                duration:500
            }
        ).start();
    }

 },[tabValue]);

 useFocusEffect(()=>{
    StatusBar.setBarStyle('dark-content');
})




  return (
    <ScrollView style={stylesheet.container}>
      
        <Animated.View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:25,paddingTop:0,transform:[{translateY:imageBounce}]}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <ImageBackground  source={lesson?.imgUrl} borderRadius={10} style={stylesheet.imageCardStyle}/>
            </View>
            
        </Animated.View>
       
        <Animated.View style={{width:'100%',alignItems:'center',padding:25,paddingTop:20,display:'flex',flexDirection:'column',transform:[{translateY:contentBounce}]}}>
            <Title fontWeight={'500'} size={25} text={returnDefault(lesson?.title)} alignment = {'center'}/>
            <View><Text onPress={()=>{navigation.navigate('Details',{id:lesson?.bookId})}} style={{fontSize:18,fontWeight:'500',marginTop:5,color:defaultScheme.defaultColor}}>{lesson?.bookTitle}</Text></View>
            <View style={{marginTop:20}}>
                <NavPill activeColor={defaultScheme.defaultColor} selected={tabValue} onclick={setTabValue}/>
            </View>
        <View style={{width:'100%'}}>
            {
                tabValue == 0 &&
                <TextView textArray={lesson?.text}/>
            }
            {
                tabValue == 1 &&
                <ImageView images={lesson?.images}/>
            }
            {
                tabValue == 2 && 
                <ModelView lesson = {lesson} models={trackers} navigation={navigation}/>
            }

        </View>      
        </Animated.View>   
    </ScrollView>
  )
}

export default ModuleDetails