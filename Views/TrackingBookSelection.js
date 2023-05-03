import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image, StatusBar} from 'react-native';
import TrackingBookCard from '../Components/Ar/TrackingBookCard';
import Title from '../Components/Reusable/Title';
import { bookList } from '../Utils/books';
import { getTrackers, getTrackersByBook } from '../Utils/functions';
import { useFocusEffect } from '@react-navigation/native';
import { defaultScheme } from '../Utils/constants';


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
    });

    const navigateToFirstPage = (id) => {
        let firstTracker = getTrackersByBook(id)[0];
        navigation.navigate('TrackingCamera',{firstTrackerId:firstTracker?.id,bookId:id,backIndex:0});
    }

    useFocusEffect(()=>{
        StatusBar.setBarStyle('dark-content');
    })

  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="Scan"/>
            <View style={{marginTop:20,marginBottom:20}}>
                <Title fontWeight={'500'} size={18} text="Select a book to start scanning!" color={defaultScheme.defaultColor}/>
            </View>
            <ScrollView>
                {bookList.map((book,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigateToFirstPage(book?.id)}} key={`${index}-${book.title}`}>
                                <TrackingBookCard data={book} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </ScrollView>
    </View>
  )
}

export default TrackingBookSelection