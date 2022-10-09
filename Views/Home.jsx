import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView} from 'react-native';
import LessonCard from '../Components/Profile/Home/LessonCard';
import SubjectCard from '../Components/Profile/Home/SubjectCard';
import Title from '../Components/Profile/Reusable/Title';
import { getFeaturedLessons } from '../Utils/functions';


const Home = ({navigation}) => {


 const [featuredLessons,setFeaturedLessons] = React.useState(getFeaturedLessons);    
 const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:"100%",
        backgroundColor:'white'
    },
    scrollViewStyle:{
        padding:20,
        paddingTop:0,
        display:'flex',
        flexDirection:'column'
    }   
 });

const listData = [
    {
        title:'Biology',
        color:'white',
        background:'green',
        src:require('../assets/images/assetImages/dna.png')
    },
    {
        title:'Chemistry',
        color:'white',
        background:'purple',
        src:require('../assets/images/assetImages/chemistry.png')
    },
    {
        title:'Physics',
        color:'white',
        background:'red',
        src:require('../assets/images/assetImages/atom.png')
    },
    {
        title:'History',
        color:'white',
        background:'blue',
        src:require('../assets/images/assetImages/history.png')
    }
]
  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text="Home"/>
            <View style={{marginTop:10}}>
                <Title fontWeight={'500'} size={20} text="Browse Categories"/>
            </View>
            <ScrollView style={{marginTop:20,marginBottom:30}} horizontal = {true}>
                {listData?.map((subject,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('Subject',{subject:subject?.title})}}>
                            <SubjectCard 
                            key={`${index}-${subject?.title}`}
                            data={subject}
                            />
                        </TouchableOpacity>
                    )})}
            </ScrollView>
            
            <Title size={20} fontWeight={'500'} text="Featured Lessons"/>
            <ScrollView style={{marginTop:20,marginBottom:30}}>
                {featuredLessons?.map((lesson,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('Module',{id:lesson?.id})}}>
                             <LessonCard data={lesson} key={`${index}-${lesson?.title}`}/>
                        </TouchableOpacity>
                       
                    )
                })}
            </ScrollView>
           
            
        </ScrollView>
    </View>
  )
}

export default Home