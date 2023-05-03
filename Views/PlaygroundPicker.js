import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,Image, StatusBar} from 'react-native';
import TrackingBookCard from '../Components/Ar/TrackingBookCard';
import Title from '../Components/Reusable/Title';
import { bookList } from '../Utils/books';
import { getTrackers, getTrackersByBook } from '../Utils/functions';
import { trackingAssets } from '../Utils/trackingAssets';
import { useFocusEffect } from '@react-navigation/native';
import { defaultScheme } from '../Utils/constants';


const PlaygroundPicker = ({navigation}) => {
    const stylesheet = StyleSheet.create({
        containerStyle:{
            width:'100%',
            // height:'100%',
            backgroundColor:'white',
            paddingBottom:60
        },
        scrollViewStyle:{
            padding:20,
            paddingBottom:0,
            paddingTop:20,
            display:'flex',
            flexDirection:'column'
        }
    });

    const navigateToModel = (tracker) => {
        navigation.navigate('PlaygroundCamera',{firstTrackerId:tracker?.id,bookId:tracker?.bookId,backIndex:0});
    }

    //data?.title,data?.author,data?.imgUrl
    useFocusEffect(()=>{
        StatusBar.setBarStyle('dark-content');
    })

  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="View"/>
            <View style={{marginTop:20,marginBottom:20}}>
                <Title fontWeight={'500'} size={18} text="Select a model to get started" color={defaultScheme.defaultColor}/>
            </View>
            <ScrollView>
                
                {trackingAssets.map((tracker,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigateToModel(tracker)}} key={`${index}-${tracker?.title}`}>
                                <TrackingBookCard data={{'title':tracker?.title,'imgUrl':tracker?.thumbnail,'author':tracker?.bookTitle}} />
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </ScrollView>
    </View>
  )
}

export default PlaygroundPicker;