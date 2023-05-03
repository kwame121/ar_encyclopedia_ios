import React from 'react';
import { StyleSheet, Text, View,TouchableHighlight, TouchableWithoutFeedback, TouchableOpacity,Image} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../Context/AuthContext';
import { StatusBar } from 'react-native';



const SplashScreen = ({navigation}) => {

//   const [isOnboarding,setIsOnboarding] = React.useState('false');
  //do something with api or device storage...
  const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'space-between',
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%',
        padding:25
    },
    headerText:{
        fontSize:25,
        fontWeight:'700',
        color:'black',
        textAlign:'center'
    },
    contentText:{
        fontSize:16,
        color:'gray',
        textAlign:'center'
    },
    headerStyle:{
        textAlign:'left',
        width:'100%'
    },
    contentContainer:{
        
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
        padding:20,
        marginTop:20,
        borderRadius:30,
        width: 200,
        alignItems:'center',
        
    },
    buttonText:{
        color:'white',
        fontSize:15,
        textAlign:'center'
    }
    ,
    contentCard:{
        borderRadius:30,
        backgroundColor:'#e4eaf5',
        padding:30,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        display:'flex',
        flexDirection:'column',
        marginBottom:10,
        // height:400
    }
})


  React.useEffect(()=>{
    // fetchData();
    StatusBar.setBarStyle('dark-content')
  },[])



  return (
   <View style={styles.container}>
    <View>

    </View>
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View style={{}}>
                <Image style={{width:350,height:350}} source={require('../assets/images/star.png')}></Image>
            </View>
        </View>
        <View style={styles.contentCard}>
        <View>
            <Text style={styles.headerText}>Learn like never before with the power of AR!</Text>
        </View>
        <View style={{marginTop:15}}>
            <Text style={styles.contentText}>Explore places, visualize and interact with concepts. Tap the button below to get started!</Text>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate('Main')}}>
            <View style={styles.getStartedBtn}>
                <Text style={{fontSize:18,color:'white',fontWeight:'500'}}>
                    Get Started
                </Text>
            </View>
        </TouchableOpacity>

        </View>
        
    
   </View>
   
  )
}



export default SplashScreen;