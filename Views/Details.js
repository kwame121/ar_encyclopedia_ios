import React from 'react';
import { StyleSheet, Text, View,FlatList,ImageBackground, TouchableOpacity,StatusBar} from 'react-native';
import { getData, getTrackersByBook } from '../Utils/functions';
import * as RootNavigation from '../Components/BaseLayout/RootNavigation';
import { defaultScheme } from '../Utils/constants';
import { useFocusEffect } from '@react-navigation/native';

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:30,
        paddingTop:20,
        marginBottom:50,
        width:'100%',
        // justifyContent: 'center',
        display:'flex',
        flexDirection:'column',
        // height:100,
    }
})

const Details = ({route,navigation}) => {

  const {id} = route.params;
  console.log(id);
  const bookData = getData(id);
  const trackers = getTrackersByBook(id)?.[0];

  useFocusEffect(()=>{
    StatusBar.setBarStyle('dark-content');
})


  
  

  return (
    <View style={style.container}>
        <View style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
            <View>
                <ImageBackground borderRadius={10} source={bookData?.book?.imgUrl} style={{width:250,height:250,backgroundColor:'gray',borderRadius:10}}/>
            </View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:25,fontWeight:'600'}}>
                    {bookData?.book?.title}
                </Text>      
            </View>
            <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}>
                <Text style={{fontSize:20,color:defaultScheme.defaultColor}}>
                    {bookData?.book?.author}
                </Text>
            </View>
        </View>

        <TouchableOpacity style={{display:'flex',marginTop:20,width:'100%'}} onPress={()=>{
            navigation?.navigate('TrackingCamera',{firstTrackerId:trackers?.id,bookId:bookData?.book?.id,backIndex:1});
            }}>
            <View style={{backgroundColor:'rgba(232, 232, 232, 0.66)',padding:15,borderRadius:10}}>
                <Text style={{fontSize:18,color:defaultScheme.defaultColor,textAlign:'center',fontWeight:'600'}}>
                    View AR Content
                </Text>
            </View>
            <View>
            </View>
        </TouchableOpacity>

        <View style={{display:'flex',marginTop:30,width:'100%',flexDirection:'column',flex:1}}>
        <FlatList
        data={bookData?.lessons}
        style={{width:'100%'}}
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                onPress={()=>{navigation.push('ModuleDetails',{id:item.id})}}>
                    <View style={{display:'flex',flex:1,width:'100%',flexDirection:'row',padding:15,borderBottomWidth:1,
                    borderBottomColor:'#ebebeb'}}>
                    <View><Text style={{fontSize:18,color:'#bcbcbc'}}>{index+1}</Text></View>
                    <View style={{marginLeft:20}}><Text style={{fontSize:18}}>{item?.title}</Text></View>
                </View>

                </TouchableOpacity>
                
            )
        }}
        ></FlatList>


        </View>

        <View>

        </View>


    </View>
  )
}

export default Details