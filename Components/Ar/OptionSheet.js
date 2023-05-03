import React from 'react';
import { View,StyleSheet,Text,ScrollView,ImageBackground,TouchableOpacity, Alert,Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet, { SheetProps,  useScrollHandlers, } from "react-native-actions-sheet";
import { BlurView } from '@react-native-community/blur';
import { defaultScheme } from '../../Utils/constants';
import Slider from 'react-native-unlock-slider';


const ViewOption = ({data,isSelected,onpress,index}) => {
    const styles = StyleSheet.create({
        container:{

        },
        cardView:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            width:150,
            height:170,
            backgroundColor:'black',
            borderRadius:30,
            marginHorizontal:10,
            borderWidth:2,
            borderColor:isSelected?defaultScheme.defaultColor:'black'
            // borderColor:'red'
        }
    });

    return(
       <TouchableOpacity onPress={()=>{onpress(index)}}>
            <View style={styles.cardView}>
                <View>
                <Image source={isSelected?data?.imageArray[0]:data?.imageArray[1]} style={{width:35,height:35}}/>
                </View>
                <View style={{order:'1',marginTop:35}}>
                    <Text style={{color:isSelected?defaultScheme.defaultColor:'white',fontSize:15}}>{data?.name||'HELOOOO'}</Text>
                </View>
            </View>
       </TouchableOpacity>
    )
}

const SlideOpen = ({goToPage,id,bookId}) => {
    return(<View style={{width:'100%',marginVertical:10}}>
        <Slider
            isLeftToRight={true} // set false to move slider Right to Left
            childrenContainer={{borderRadius:0}}
            slideOverStyle={{backgroundColor: 'black',borderTopRightRadius:30,borderBottomRightRadius:30,borderTopLeftRadius:30,borderBottomLeftRadius:30}}
            onEndReached={() => {
              goToPage(id,bookId)
            }}
            isOpacityChangeOnSlide={true}
            containerStyle={{
              margin: 8,
              marginLeft:0,
              marginRight:0,
              backgroundColor: 'black',
              borderRadius: 20,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            thumbElement={
              <View
                  style={{
                    width: 70,
                    margin: 4,
                    borderRadius: 20,
                    height: 70,
                    backgroundColor: 'white',
                    justifyContent:'center',
                    alignItems:'center'
                  }}
              >
                <MaterialCommunityIcons
                name="chevron-double-right"
                color={defaultScheme.defaultColor}
                size={40}
                style={{fontWeight:'300'}}
                 />
              </View>
            }
        >
          <Text style={{fontWeight: '300',fontSize:17,color:defaultScheme.defaultColor}}>{'Slide To Enter'}</Text>
        </Slider>
    </View>)
}


const OptionSheet = (props) => {

    const options = [
       
        {name:'View',imageArray:[
                require('../../assets/images/cubeColor.png'),
                require('../../assets/images/cubeWhite.png')
        ],description:'View model without needing to scan a marker Image'},
        {name:'Scan',imageArray:[
            require('../../assets/images/scanColor.png'),
            require('../../assets/images/scanWhite.png')
        ],description:'View model by scanning a marker image.'},
    ]
    const [currentView,setCurrentView] = React.useState(0);

    // console.log(props)
    const contentRef = React.useRef(null);
    const scrollHandlers = useScrollHandlers(
      'scrollview-2',
      contentRef,
    )
    const styles = StyleSheet.create({
    containerStyle:{
        // padding:30,
        width:'100%',
        backgroundColor:'black'
        },
      titleArea:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
      },
      titleTextArea:{
        display:'flex',
        flexDirection:'column',
        color:'white'
      },
      title:{
        fontWeight:'500',
        color:'white',
        fontSize:25,
        width:150,

    },
    subTitle:{
        fontWeight:'400',
        color:'white',
        fontSize:16,
        marginTop:5
    },
    imageArea: {
      marginRight:10
    },
    textArea:{
      marginTop:10
    },
    textAreaContent:{
      textAlign:'justify',
      fontSize:15,
      lineHeight:22
    },
    enterButton:{
        width:'100%',
        backgroundColor:defaultScheme.defaultColor,
        padding:10,

    }
    });

    const handlePress = (value) => {
        setCurrentView(value);
    }


    return (
      <ActionSheet ref={contentRef} id={props.sheetId} containerStyle={styles.containerStyle} >
        <BlurView style={{padding:30}}   blurType={'dark'} blurAmount={20} blurRadius={25}>
            <View >
            <View style={{marginVertical:10,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:22,fontWeight:'600',color:'white',marginBottom:20}}>Select Mode</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
               {
                options.map((option,index)=>{
                    return(
                        <ViewOption onpress={handlePress} index={index} isSelected={index==currentView} key={`${index}-${option.name}`} data={option}/>
                    )
                })
               }         
            </View>
            <View style={{display:'flex',justifyContent:'center',marginTop:10,height:100}}>
               <Text style={{fontSize:18,fontWeight:'300',color:'white',textAlign:'center'}}>{options[currentView]?.description}</Text>
            </View>
            <SlideOpen 
            goToPage={currentView == 0?props?.payload?.goToPlayground:props?.payload?.goToScanner}
            id={props?.payload?.firstTrackerId}
            bookId={props?.payload?.bookId}
            />
            
            {/* <View style={styles.titleArea}>
                <View style={styles.imageArea}>
                    <ImageBackground borderRadius={10} source={props.payload?.bookData?.imgUrl} style={{width:60,height:60,backgroundColor:'gray',borderRadius:10}}/>
                </View>
                <View style={styles.titleTextArea}>
                <Text style={styles.title}>{props.payload?.bookData?.title}</Text>
                <Text style={styles.subTitle}>
                    {props.payload?.bookData?.author}
                </Text>
                </View>
            </View> */}
           
            {/* <View style={styles.textArea}>
                {
                    props?.payload?.pageList?.map((page,index)=>{
                        return(
                            <ContentItem
                            key={`${index}-${page?.id}`}
                            onItemSelected={props?.payload?.onItemSelected}
                            data={page}/>
                        )
                    })
                }
            </View>   */}
            </View>
        </BlurView>
     
      </ActionSheet>
    )
}

export default OptionSheet