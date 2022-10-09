import React from 'react';
import { StyleSheet, Text, View,FlatList,ImageBackground, TouchableOpacity} from 'react-native';
import { getData } from '../Utils/functions';

const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding:30,
        paddingTop:0,
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
                <Text style={{fontSize:20,color:'#0696ff'}}>
                    {bookData?.book?.author}
                </Text>
            </View>
        </View>

        <View style={{display:'flex',marginTop:20,width:'100%'}}>
            <View style={{backgroundColor:'#e9e9e9',padding:15,borderRadius:10}}>
                <Text style={{fontSize:18,color:'black',textAlign:'center'}}>
                    View In AR Sandbox
                </Text>
            </View>
            <View>
            </View>
        </View>

        <View style={{display:'flex',marginTop:30,width:'100%',flexDirection:'column',flex:1}}>
        <FlatList
        data={bookData?.lessons}
        style={{width:'100%'}}
        renderItem={({item,index})=>{
            return(
                <TouchableOpacity
                onPress={()=>{navigation.navigate('Module',{id:item.id})}}>
                    <View style={{display:'flex',flex:1,width:'100%',flexDirection:'row',padding:10,borderBottomWidth:1,
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