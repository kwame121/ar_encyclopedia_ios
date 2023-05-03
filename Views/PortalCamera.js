import React, {useState,useCallback } from "react";
import { StyleSheet, View,StatusBar,Alert, SafeAreaView,Dimensions,Image,Text} from "react-native";
import {
  ViroARSceneNavigator,
} from '@viro-community/react-viro';
import { getBookById,getTrackersByBook } from "../Utils/functions";
import StatusCard from "../Components/Ar/StatusCard";
import TopNav from "../Components/Ar/TopNav";
import SideMenu from 'react-native-side-menu';
import Menu from "../Components/Ar/Menu";
import { BookScanner } from "../Components/Ar/BookScanner";
import { useFocusEffect } from '@react-navigation/native';
import { SheetManager } from "react-native-actions-sheet";
import Main from "../Components/Ar/ArPortals/Main";
import PortalCard from "../Components/Ar/ArPortals/PortalCard";
import { portalAssets } from "../Utils/portalAssets";
import { BlurView } from "@react-native-community/blur";
import { Modal } from "react-native";
import { ActivityIndicator } from "react-native-paper";






const window = Dimensions.get('window');
const PortalCamera = ({navigation,route}) => {

  const [isVisible, setIsVisible] = React.useState(false);
  const [isLoading,setIsLoading] = React.useState(false);
//   const [position,setPosition] = React.useState([0,0,-])
  const id = route?.params?.portalId;
  const backIndex =  route?.params?.backIndex;
  const onExpand = () => {
    if (backIndex == 0 || backIndex == null || backIndex == undefined || backIndex == 2)
    {
        SheetManager.show('portalSheet',{payload:{
            portalId:id
        }})
    }
    else
    {
        SheetManager.show('portalSheet',{payload:{
            portalId:id,
        }})
        
    }
  
  }
  const onReset = () => {

  }
//   const showDetails = () => {
//     SheetManager.show('trackerDetails',
//     {
//       payload:{bookData:bookData,
//       pageList:trackerList,
//       currentId:currentId,
//       onItemSelected:openPage}
//     });
//   }

  const goBack = () => {
    if (backIndex == 0 || backIndex == null || backIndex == undefined || backIndex == 2)
    {
        navigation.navigate('Portal');
    }
    else if (backIndex == 1 )
    {
        navigation.navigate('Home');
    }
    else if (backIndex == 2 )
    {
        navigation.navigate('Portal');
    }

  
  }
//   const refresh = () => {
//     navigation.push('TrackingCamera',{firstTrackerId:currentId,bookId:bookId})
//   }

//   const showList = () => { 
//     // setMenuOpen(true);
//     SheetManager.show('contents',{payload:{
//       bookData:bookData,
//       pageList:trackerList,
//       onItemSelected:openPage
//     }});
//   }

//   const openPage = (data) => {
//     setBookData(null);
//     setTrackerList(null);
//     SheetManager.hide('contents');
//     navigation.push('TrackingCamera',{firstTrackerId:data?.id,bookId:bookId})
//   }
 

  React.useEffect(()=>{
    StatusBar.setBarStyle('light-content');  
    navigation.getParent('tabs').setOptions({tabBarStyle: {display: 'none'}});  
  },[]);


  useFocusEffect(
    useCallback(() => {
      setIsVisible(true)

      return () => {
        setIsVisible(false);
        navigation.getParent('tabs').setOptions({headerShown: false,tabBarBackground: () => (
            <BlurView blurType='light' blurAmount={20} blurRadius={15} style={{width:'100%',padding:120,backgroundColor:'rgba(255, 255, 255, 0.8)',borderWidth:1,borderColor:'#ebebeb'}} />
          ),tabBarStyle:{backgroundColor:'transparent',position:'absolute',borderTopWidth:0} }); 
              // StatusBar.setBarStyle('dark-content');  
        // setBookData(null);
        // setTrackerList(null);
      }
    }, [])
  )

  return (
    <>
    {
      isVisible && 
        <View style={{flex: 1}}>
           <Modal
            animationType="slide"
            transparent={true}
            visible={isLoading}
          >
            <View style={styles.centeredView}>
              <ActivityIndicator animating={true} color={'white'} size={50}/>
            </View>
          </Modal>
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: Main,
            }}
            viroAppProps={{ 
              id:id,
              portalEntry: (backIndex==0||backIndex==null||backIndex==undefined)?'ar':'other',
              isLoading:isLoading,
              setIsLoading,setIsLoading
            //   currentId:currentId,
            //   setCurrentId:setCurrentId,
            //   refresh:refresh
            }}
            style={styles.f1}
          />
          <TopNav goBack={goBack} showList={null} isPortalMode = {true}/>
          <View style={styles.buttons}>
            <PortalCard portalId={id} onclick={onExpand} portalEntry={(backIndex==0||backIndex==null||backIndex==undefined)?'ar':'other'}/>
          </View>
        </View>
    }
    {
      !isVisible && 
        <View style={{backgroundColor:'black',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
          <View>
            <Text style={{fontSize:20,color:'white'}}>Loading Scene...</Text>
          </View>
        </View>
      
    }
    </>
    
  );
};

export default PortalCamera;



let styles = StyleSheet.create({

  backBtnStyle:{
    backgroundColor: 'white',
    padding:10,
    borderRadius:15
  },
  container: {
    marginHorizontal: 10,
    alignItems: "center"
  },
  topView: {
    // height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    position: 'absolute',
    top: 0,
    left: 0,
    padding:20,
    paddingTop:50
  },
  topRight: {
    // height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right:30,
    padding:20,
    paddingTop:50
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },

  buttons: {
    // height: 100,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
    left: 0,
    padding:20
  },
  button: {
    height: 100,
    width: 100,
    borderRadius: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  },
  buttonLabel: {
    color: '#ffffff',
    fontSize: 16,
  },
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 128,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
