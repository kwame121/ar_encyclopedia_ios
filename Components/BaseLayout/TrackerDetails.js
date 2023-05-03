import React from 'react';
import { View,StyleSheet,Text,ScrollView,TouchableOpacity,ImageBackground, Alert } from 'react-native';
import ActionSheet, { SheetProps,  useScrollHandlers, } from "react-native-actions-sheet";
import { trackingAssets } from '../../Utils/trackingAssets';
import { BlurView } from '@react-native-community/blur';
import OptionPill from '../Ar/OptionPill';
import { defaultScheme } from '../../Utils/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getLabelsByTracker } from '../../Utils/functions';
import { List } from 'react-native-paper';


const LabelItem = ({labelObj})=>{

}

const TrackerDetails = (props) => {
  const trackerRef = React.useRef(null);
  const [trackerObj,setTrackerObj] = React.useState({});
  const [currentView,setCurrentView] = React.useState(0);
  const [labels,setLabels] = React.useState([]);
  const scrollHandlers = useScrollHandlers(
    'scrollview-1',
    trackerRef,
  )
  const styles = StyleSheet.create({
    containerStyle:{
      // padding:30,
      width:'100%',
      backgroundColor:'transparent'
    },
    titleArea:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      marginBottom:10
    },
    titleTextArea:{
      display:'flex',
      flexDirection:'column',
      color:'white',
    
    },
    title:{
      fontWeight:'500',
      color:'white',
      fontSize:22,
      marginTop:8,
      maxWidth:150
   
  },
  subTitle:{
      fontWeight:'300',
      color:'white',
      fontSize:16,
      marginTop:5,
      maxWidth:150
  },
  imageArea: {
    width:90,
    height:90,
    borderRadius:10,
    marginRight:10
  },
  textArea:{
    marginTop:10
  },
  textAreaContent:{
    textAlign:'left',
    fontSize:15,
    lineHeight:22,
    color:'white',
    letterSpacing:0.8
  },
  viewLessonStyle: {
    backgroundColor:'#dbdbdb',
    borderRadius:15,
    padding:5,
    marginTop:5,
    width:120,
    alignItems:'center'
  }
  });

  // onPress={()=>{props.payload.openLesson()}}

  React.useEffect(()=>{
    let tracker = trackingAssets.filter((trackerObj)=>{
      return trackerObj.id == props?.payload?.currentId
    })[0]
    setTrackerObj(tracker);

    let _labels = getLabelsByTracker(props?.payload?.currentId);
    setLabels(_labels);
  },[props?.payload?.currentId])
  return (
    <ActionSheet ref={trackerRef} id={props.sheetId} containerStyle={styles.containerStyle} overlayColor={'transparent'}>
      <BlurView blurAmount={50} type={'dark'} style={{padding:30}}>
        <ScrollView {...scrollHandlers}>
        <View style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center'}}>
          <View style={styles.titleArea}>
            <View style={styles.imageArea}>
            <ImageBackground borderRadius={10} source={trackerObj?.thumbnail} style={{width:90,height:90,backgroundColor:'gray',borderRadius:10}}/>
            </View>
            <View style={styles.titleTextArea}>
              <Text style={styles.title}>{trackerObj?.title}</Text>
              <Text style={styles.subTitle}>{props?.payload?.bookData?.title}</Text>
              {/* <TouchableOpacity style={styles.viewLessonStyle} onPress={()=>{props.payload.openLesson()}}>
                <View>
                  <Text style={{fontSize:16,fontWeight:'600'}}>View Lesson</Text>
                </View>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={{marginLeft:'auto',order:1}}>
              <TouchableOpacity onPress={()=>{props.payload.openLesson()}}>
              <View>
                <Ionicons 
                  name="chevron-forward" 
                  color="white" 
                  size={30}
                />
              </View>
              </TouchableOpacity>
          </View>
        </View>
     
        <OptionPill onclick={setCurrentView} selected={currentView} activeColor={defaultScheme.defaultColor}/>
        {
          currentView == 0 && 
          <View style={styles.textArea}>
            <Text style={styles.textAreaContent}>
              {trackerObj?.description}
            </Text>
          </View>
        }
        {
          currentView == 1 &&

          labels?.map((label,key)=>{
            return(
            <List.Accordion
            theme={{colors:{background:'transparent'}}}
            key={`${label.id}-${key}`}
            // style={{backgroundColor:'black'}}
            title={label?.title}
            titleStyle={{color:'white'}}
            right={props=> <List.Icon {...props} icon ={props?.isExpanded?'chevron-up':'chevron-down'} color={'white'}/>}
            left={props => <List.Icon {...props} icon="information-outline" color={'white'}/>}>
              <List.Item title={label?.description} titleStyle = {{fontSize:16,color:'white'}} titleNumberOfLines = {0} style={{paddingLeft:0,color:'white'}} />
            </List.Accordion>
            )
          })
      }   
      </ScrollView>

      </BlurView>
      
    </ActionSheet>
  )
}

export default TrackerDetails;