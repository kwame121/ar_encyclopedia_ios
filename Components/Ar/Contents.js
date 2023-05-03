import React from 'react';
import { View,StyleSheet,Text,ScrollView,ImageBackground,TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ActionSheet, { SheetProps,  useScrollHandlers, } from "react-native-actions-sheet";
import { BlurView } from '@react-native-community/blur';
const ContentItem = ({data,onItemSelected}) => {

    const styles = StyleSheet.create({
        container:{
            // width:'100%',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingVertical:10,
            // borderBottomColor:'#e6e8e6',
            // borderBottomWidth:1
        },

    })
    return(
        <TouchableOpacity onPress={()=>{onItemSelected(data)}}>
            <View style = {styles.container}>
            <View style={styles.imageArea}>
                <ImageBackground borderRadius={10} source={data?.thumbnail} style={{width:40,height:40,backgroundColor:'gray',borderRadius:10}}/>
            </View>
            <View>
                <Text style={{color:'white',fontSize:16,textAlign:'right'}}> {`${data?.title}`}</Text>
            </View>
            </View>
        </TouchableOpacity>
    )
    }


const Contents = (props) => {

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
    }
    })
    return (
      <ActionSheet ref={contentRef} id={props.sheetId} containerStyle={styles.containerStyle}>
        <BlurView style={{padding:30}} type={'dark'} blurAmount={50}>
            <ScrollView {...scrollHandlers}>
            <View style={styles.titleArea}>
                <View style={styles.imageArea}>
                    <ImageBackground borderRadius={10} source={props.payload?.bookData?.imgUrl} style={{width:60,height:60,backgroundColor:'gray',borderRadius:10}}/>
                </View>
                <View style={styles.titleTextArea}>
                <Text style={styles.title}>{props.payload?.bookData?.title}</Text>
                <Text style={styles.subTitle}>
                    {props.payload?.bookData?.author}
                </Text>
                </View>
            </View>
            <View style={{marginVertical:10}}>
                <Text style={{fontSize:18,fontWeight:'600',color:'white'}}>Contents</Text>
            </View>
            <View style={styles.textArea}>
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
            </View>  
            </ScrollView>
        </BlurView>
     
      </ActionSheet>
    )
}

export default Contents