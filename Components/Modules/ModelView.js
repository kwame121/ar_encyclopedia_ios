import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,ImageBackground} from 'react-native';
import { SheetManager } from 'react-native-actions-sheet';

const ContentItem = ({data,onItemSelected}) => {

    console.log(data,'678')

    const styles = StyleSheet.create({
        container:{
            width:'100%',
            display:'flex',
            flexDirection:'row',
            // justifyContent:'space-between',
            alignItems:'center',
            paddingVertical:10,
            borderBottomColor:'#e6e8e6',
            borderBottomWidth:1
        },
        imageArea:{
            marginRight:15
        }

    })
    return(
        <TouchableOpacity style={{width:'100%'}} onPress={()=>{onItemSelected(data?.id,data?.bookId)}}>
            <View style = {styles.container}>
            <View style={styles.imageArea}>
                <ImageBackground borderRadius={10} source={data?.thumbnail} style={{width:80,height:80,backgroundColor:'gray',borderRadius:10}}/>
            </View>
            <View style={{display:'flex',flexDirection:'column'}}>
                <View>
                    <Text style={{color:'black',fontSize:18,    textAlign:'left'}}> {`${data?.title}`}
                    </Text>
                </View>
                <View>
                    <Text style={{color:'black',fontSize:14,textAlign:'left',
                    marginTop:3,fontWeight:'600'}}> {`3D Model`} 
                    </Text>
                </View>
            </View>
            </View>
        </TouchableOpacity>
    )
    }


const ModelView = ({models,lesson,navigation}) => {

    console.log('HWLLOOOO',models)
    console.log('HWLOO',lesson)


    const goToScanner = (id,bookId) => {
        SheetManager.hide('optionSheet');
        navigation?.navigate('TrackingCamera',{firstTrackerId:id,bookId:bookId,backIndex:2})

    }

    const goToPlayground = (id,bookId) => {
        SheetManager.hide('optionSheet');
        navigation?.navigate('PlaygroundCamera',{firstTrackerId:id,bookId:bookId,backIndex:2});

    }  



  const onSelect = (id,bookId) => {
    // console.log(id,bookId,'oleee');
    // navigation?.navigate('TrackingCamera',{firstTrackerId:id,bookId:bookId,backIndex:2})
    SheetManager.show('optionSheet',{payload:{
        bookId:bookId,firstTrackerId:id,backIndex:2,
        goToScanner:goToScanner,goToPlayground:goToPlayground
    }})
  }

  const stylesheet = StyleSheet.create({
    containerStyle:{
      display:'flex',
      flexDirection:'column',
      paddingTop:20,
      width:'100%',
      flex:1
    }
  });

  
  return (
   <View style={{width:'100%'}}>
    {
        models?.map((model,key)=>{
            return(
                <ContentItem key={`${key}-${model?.title}`} data={model}
                onItemSelected={onSelect}
                
                />
            )
        })

    }
    {/* {
      images.map((image,key)=>{
        return (
          <ImageCard data = {image} key = {`${key}-${image?.title}`}/>
        )
      })
    } */}
    {/* <FlatList
        data={images}
        style={{width:'100%',paddingTop:20}}
        renderItem={({item,index})=>{
          console.log(item)
          return(
            <ImageCard data={item}/>
          )  
        }}
        /> */}
   </View>
  )
}

export default ModelView;