import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity,Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../Context/AuthContext';
import { StatusBar } from 'react-native';



const SplashScreen = ({navigation}) => {

  const [isOnboarding,setIsOnboarding] = React.useState('false');
  //do something with api or device storage...
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#1B262C',
        alignItems: 'center',
        padding:50,
        paddingTop:90,
        justifyContent: 'space-between',
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%'
    },
    headerText:{
        fontSize:40,
        fontWeight:'700',
        color:'#3282B8'
    },
    headerStyle:{
        textAlign:'left',
        width:'100%'
    },
    contentContainer:{
        order:0,
        marginTop:'auto',
        textAlign:'left',
        width:'100%'
    },
    contentSub:{
        fontSize:20,
        fontWeight:'400',
    },
    getStartedBtn: {
        backgroundColor:'#3282B8',
        color:'#BBE1FA',
        padding:15,
        marginTop:20,
        borderRadius:10,
        width: 280,
        alignItems:'center',
        
    },
    buttonText:{
        color:'white',
        fontSize:20,
        textAlign:'center'
    }
})


  const fetchData = async () => 
  {
    try
    {
        let onboarding = await AsyncStorage.getItem('@onboarding');
        if (onboarding == null || onboarding == undefined)
        {
            await AsyncStorage.setItem('@onboarding','true');
            setIsOnboarding(true);
            return;
        }
        setIsOnboarding(onboarding);
       
    }
    catch(e)
    {
        console.error(e);
    }
  }


  React.useEffect(()=>{
    fetchData();
    StatusBar.setBarStyle('light-content')
  },[])



  return (
   <View style={styles.container}>
    <View>

    </View>
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View style={{marginBottom:20}}><Image style={{width:120,height:120}} source={require('../assets/images/mobile.png')}></Image></View>
            <Text style={styles.headerText}>Libr<Text style={{color:'#BBE1FA'}}>AR</Text>y</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
            <View style={styles.getStartedBtn}>
                <Text style={{fontSize:22,color:'#BBE1FA',fontWeight:'500'}}>
                    Get Started
                </Text>
            </View>
        </TouchableOpacity>
    
   </View>
   
  )
}



export default SplashScreen;