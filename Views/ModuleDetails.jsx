import React from 'react'
import { StyleSheet,Animated, Text,ScrollView, View,FlatList ,Alert, TouchableOpacity, ImageBackground,Platform} from 'react-native';
import { getLesson,returnDefault } from '../Utils/functions';
import Title from '../Components/Profile/Reusable/Title';
import NavPill from '../Components/Profile/Modules/NavPill';
import ImageView from '../Components/Profile/Modules/ImageView';
import VideoView from '../Components/Profile/Modules/VideoView';
import TextView from '../Components/Profile/Modules/TextView';



const stylesheet = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        height:'100%',
        backgroundColor:'white',
        flex:1,
        width:'100%'
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
        width:300,
        height:300,
        // textAlign:'center',
        // justifyContent:'center',
        // alignItems:'center',
        // display:'flex'
    }
});

const ModuleDetails = ({route,navigation}) => {
 let {id} = route.params;
 const [lesson,setLesson] = React.useState(null);
 const [tabValue,setTabValue] = React.useState(0);
 const imageBounce = React.useRef(new Animated.Value(0)).current;
 const contentBounce = React.useRef(new Animated.Value(0)).current;


 React.useEffect(()=>{
    let lesson = getLesson(id);
    console.log(lesson);
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

 },[tabValue])


  return (
    <View style={stylesheet.container}>
      
        <Animated.View style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',padding:25,paddingTop:0,transform:[{translateY:imageBounce}]}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <ImageBackground  source={lesson?.imgUrl} borderRadius={10} style={stylesheet.imageCardStyle}/>
            </View>
            
        </Animated.View>
       
        <Animated.View style={{width:'100%',alignItems:'center',padding:25,marginBottom:30,paddingTop:20,display:'flex',flexDirection:'column',transform:[{translateY:contentBounce}]}}>
            <Title size={25} text={returnDefault(lesson?.title)} alignment = {'center'}/>
            <View style={{marginTop:20}}>
                <NavPill selected={tabValue} onclick={setTabValue}/>
            </View>
        <View stye={{flex:1,paddingBottom:100}}>
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
                <VideoView/>
            }

        </View>
          
        </Animated.View>
      
       
    </View>
  )
}

export default ModuleDetails