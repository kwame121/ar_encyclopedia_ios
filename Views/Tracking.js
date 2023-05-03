import React, {useState,useCallback } from "react";
import { StyleSheet, View,StatusBar,Alert, SafeAreaView,Dimensions,Image,Text,Pressable} from "react-native";
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
import ZoomControls from "../Components/Ar/ZoomControls";
import { trackingAssets } from "../Utils/trackingAssets";
import { Modal } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BlurView } from "@react-native-community/blur";
import { lessons } from "../Utils/lessons";









const window = Dimensions.get('window');
const Tracking = ({navigation,route}) => {

  const [rotation,setRotation] = React.useState([0,0,0]);
  const [scale,setScale] = React.useState(0.1);
  const [currentId,setCurrentId] = React.useState(route?.params?.firstTrackerId);
  const [trackerList,setTrackerList] = React.useState([]);
  const [bookData,setBookData] = React.useState({});
  const [isVisible, setIsVisible] = React.useState(false);
  const [showHintModal,setShowHintModal] = React.useState(true);
  const [currentAxis,setCurrentAxis] = React.useState('Z');
  const [rotationValue,setRotationValue] = React.useState(0);

  const bookId = route?.params?.bookId;
  const backIndex = route?.params?.backIndex;
  const showDetails = () => {
    SheetManager.show('trackerDetails',
    {
      payload:{bookData:bookData,
      pageList:trackerList,
      currentId:currentId,
      onItemSelected:openPage,
      openLesson:handleViewLesson}
    });
  }

  const goBack = () => {
    switch(backIndex)
    {
      case 0:
        navigation.navigate('Tracking');
        break;
      case 1:
        navigation.navigate('Details',{id:bookId});
        break;
      case 2:
        // console.log(,'booty buttckeeks');
        let lesson= lessons.filter((lesson)=>{
            return lesson?.id == route?.params?.firstTrackerId;
        })[0];
        navigation.navigate('ModuleDetails',{id:lesson?.id});
        break;
      default:
        navigation.navigate('TrackingCamera');
    }
  }


  const refresh = () => {
    navigation.push('TrackingCamera',{firstTrackerId:currentId,bookId:bookId})
  }

  const showList = () => { 
    // setMenuOpen(true);
    SheetManager.show('contents',{payload:{
      bookData:bookData,
      pageList:trackerList,
      onItemSelected:openPage
    }});
  }

  const openPage = (data) => {
    setBookData(null);
    setTrackerList(null);
    SheetManager.hide('contents');
    navigation.push('TrackingCamera',{firstTrackerId:data?.id,bookId:bookId,backIndex:backIndex})
  }


  const handleZoom = () => 
  {
    let newScale = scale * 2;
    setScale(newScale);
    
  }

  const handleReduceZoom = () => 
  {
    let newScale = scale/2;
    setScale(newScale);
  }

  const handleViewLesson = () => {
    let tracker = trackingAssets.filter((tracker)=>{return tracker?.id === currentId})[0];
    let lessonId = tracker.lessonId;
    SheetManager.hide('trackerDetails')
    navigation.push('ModuleDetails',{id:lessonId});
  }

  const getTrackerSrc = (id) => {
    let tracker = trackingAssets.filter((tracker)=>{return tracker?.id === currentId})[0];
    return tracker?.imgUrl;
  }
 

  React.useEffect(()=>{
    StatusBar.setBarStyle('light-content'); 
    navigation.getParent('tabs').setOptions({tabBarStyle: {display: 'none'}});  
  },[]);


  React.useEffect(()=>{
    console.log(currentId,109)
    if (bookId !== undefined && bookId !==null)
    {
      setShowHintModal(true);
      console.log(bookId,'bookId');
      let list = getTrackersByBook(bookId);
      let book = getBookById(bookId);
      console.log(book,'line 54444');
      setTrackerList(list);
      setBookData(book);
    }
  },[bookId,currentId]);

  React.useEffect(()=>{

    if (currentAxis == 'X')
    {
      let _rotation = rotation.slice(0);
      _rotation[0] = rotationValue;
      setRotation(_rotation)
    }
    else if (currentAxis == 'Y')
    {
      let _rotation = rotation.slice(0);
      _rotation[1] = rotationValue;
      setRotation(_rotation)
    }
    else if (currentAxis == 'Z')
    {
      let _rotation = rotation.slice(0);
      _rotation[2] = rotationValue;
      setRotation(_rotation)
    }


  },[rotationValue])

  useFocusEffect(
    useCallback(() => {
      navigation.getParent('tabs').setOptions({tabBarStyle: {display: 'none'}});  
      setIsVisible(true)
      return () => {
        setIsVisible(false);
        navigation.getParent('tabs').setOptions({headerShown: false,tabBarBackground: () => (
          <BlurView blurType='light' blurAmount={20} blurRadius={15} style={{width:'100%',padding:120,backgroundColor:'rgba(255, 255, 255, 0.8)',borderWidth:1,borderColor:'#ebebeb'}} />
    ),tabBarStyle:{backgroundColor:'transparent',paddingTop:0,position:'absolute',borderTopWidth:0} }); 
        // StatusBar.setBarStyle('dark-content');  
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
            visible={showHintModal}
            close
            onRequestClose={() => {
              setShowHintModal(!showHintModal)
            }}
          >
            <View style={styles.centeredView}>
              <BlurView style={styles.modalView}>
                <View>
                  <Image source={getTrackerSrc(currentId)} style={{width:300,height:300}}>    
                  </Image>
                </View>
                <View style={{padding:10}}>
                  <Text style={{color:'white',fontSize:18,fontWeight:'300'}}>Scan This Image</Text>
                </View>
                <View style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Pressable
                  style={{padding:10}}
                  onPress={() => setShowHintModal(!showHintModal)}
                >
                  <Ionicons 
                name="close-circle-outline" 
                color="white" 
                size={50}
                />
                  
                  
                </Pressable>

                </View>
               
              </BlurView>
            </View>
          </Modal>
          <ViroARSceneNavigator
            autofocus={true}
            initialScene={{
              scene: BookScanner,
            }}
            viroAppProps={{
              rotationValue:rotationValue, 
              setRotation:setRotation,
              rotation:rotation,
              id:bookId,
              currentId:currentId,
              scale:scale,
              currentAxis:currentAxis,
              setCurrentAxis:setCurrentAxis,
              setScale:setScale,
              setCurrentId:setCurrentId,
              refresh:refresh,
            }}
            style={styles.f1}
          />
          <TopNav goBack={goBack} showList={showList} isPortalMode={false}/>
          <View style={styles.zoomButtons}>
            <ZoomControls onZoomIn={handleZoom} onZoomOut={handleReduceZoom}/>
          </View>
          <View style={styles.buttons}>
            <StatusCard onclick={showDetails} 
            
            setRotation={setRotationValue} 
            rotation={rotationValue}
            trackerId={currentId}
            currentAxis={currentAxis}
            setCurrentAxis={setCurrentAxis}
            />
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

export default Tracking;



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
  zoomButtons: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 180,
    left: 0,
    padding:100
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },modalView: {
    // margin: 20,
    width:300,
    // backgroundColor: "#212121",
    borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  hintButtons:{
    position:'absolute',
    top:35,
    width:'100%'

  }
});
