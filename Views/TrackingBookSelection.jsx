import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image} from 'react-native';
import TrackingBookCard from '../Components/Profile/Ar/TrackingBookCard';
import Title from '../Components/Profile/Reusable/Title';
import { bookList } from '../Utils/data';


const TrackingBookSelection = ({navigation}) => {
    const stylesheet = StyleSheet.create({
        containerStyle:{
            width:'100%',
            height:'100%',
            backgroundColor:'white'
        },
        scrollViewStyle:{
            padding:20,
            paddingTop:20,
            display:'flex',
            flexDirection:'column'
        }
    })
  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="Tracking Mode"/>
            <View style={{marginTop:20,marginBottom:20}}>
                <Title fontWeight={'400'} size={18} text="Select a book to start tracking"/>
            </View>
            <ScrollView>
                {bookList.map((book,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('TrackingCamera')}}>
                                <TrackingBookCard data={book} key={`${index}-${book.title}`}/>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </ScrollView>
    </View>
  )
}

export default TrackingBookSelection