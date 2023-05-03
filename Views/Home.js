import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView,StatusBar} from 'react-native';
import LessonCard from '../Components/Home/LessonCard';
import SubjectCard from '../Components/Home/SubjectCard';
import Title from '../Components/Reusable/Title';
import { getFeaturedBooks, getFeaturedLessons } from '../Utils/functions';
import { getFeaturedPortals } from '../Utils/functions';
import { useFocusEffect } from '@react-navigation/native';
import FastImage from 'react-native-fast-image'
import styles from 'rn-range-slider/styles';
import { SheetManager } from 'react-native-actions-sheet';
import FeaturedBook from '../Components/Home/FeaturedBook';


const Home = ({navigation}) => {


 const [featuredLessons,setFeaturedLessons] = React.useState(getFeaturedLessons);
 const [featuredPortals,setFeaturedPortals] = React.useState(getFeaturedPortals);
 const [direction,setDirection] = React.useState('up');
 const [offset,setOffset] = React.useState(0);
 const [featuredBooks,setFeaturedBooks] = React.useState(getFeaturedBooks);
 const stylesheet = StyleSheet.create({
    containerStyle:{
        width:'100%',
        height:"100%",
        backgroundColor:'white',
        
    },
    scrollViewStyle:{
        padding:0,
        paddingTop:0,
        display:'flex',
        flexDirection:'column',
        marginBottom:50
    } , 
    wrapperStyle: {
        paddingLeft:20,
        paddingRight:20
    } 
 });


//  React.useEffect(() => {
//     navigation.setOptions({
//       title: direction === 'down' ? 'Explore' : '',
//     });
//   }, [direction,offset]);


const listData = [
    {
        title:'Biology',
        color:'white',
        background:'#7DAA6A',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/assetImages/dna.png'),
        backgroundImg:require('../assets/images/bg/biology.jpeg'),
        subText:'The study of life'
    },
    {
        title:'Chemistry',
        color:'white',
        background:'#bca0dc',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/assetImages/chemistry.png'),
        backgroundImg:require('../assets/images/bg/chemistry.jpeg'),
        subText:'The study of matter'
    },
    {
        title:'Physics',
        color:'white',
        background:'#ffbaba',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/assetImages/atom.png'),
        backgroundImg:require('../assets/images/bg/physics.jpeg'),
        subText:'The study of the observable universe'
    },
    {
        title:'History',
        color:'white',
        background:'#b3cde0',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/assetImages/history.png'),
        backgroundImg:require('../assets/images/bg/history.jpeg'),
        subText:'The study of historical events'
    },
    {
        title:'Engineering',
        color:'white',
        background:'#b3cde0',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/assetImages/hadron.jpeg'),
        backgroundImg:require('../assets/images/assetImages/hadron.jpeg'),
        subText:'The application of science to build machines'
    },
    {
        title:'Geography',
        color:'white',
        background:'#b3cde0',
        subColor:'rgba(89, 89, 89, 0.7)',
        src:require('../assets/images/geog.jpeg'),
        backgroundImg:require('../assets/images/geog.jpeg'),
        subText:"The study of Earth's features"
    }
]


const handleScroll = (e) => 
{ 
    // console.log('is Scrolling')
    navigation.setOptions({
                title: 'Explore'
            });
}

const handleStop = (e) => 
{ 
    console.log('stopped scrollingggg')
    navigation.setOptions({
                title: ''
            });
}

const goToPortal = (id) => {
    navigation.navigate('PortalCamera',{backIndex:1,portalId:id});
    SheetManager.hide('portalPreviewSheet');
}

const handlePortalSelect = (id) => {
    SheetManager.show('portalPreviewSheet',{payload:{portalId:id,
    onpress:goToPortal
    }});
}

useFocusEffect(()=>{
    StatusBar.setBarStyle('dark-content');
})
  return (
    <View style={stylesheet.containerStyle}>
        <ScrollView style={stylesheet.scrollViewStyle} onScroll={handleScroll}  scrollEventThrottle={20}>
            <View style={stylesheet.wrapperStyle}>
            <Title text="Explore"/>
            <View style={{marginTop:10}}>
                <Title color={'#3282B8'} fontWeight={'500'} size={20} text="Browse Subjects"/>
            </View>
            </View>
           
            <ScrollView style={{marginTop:20,marginBottom:30}} horizontal = {true}>
                {listData?.map((subject,index)=>{
                    return(
                        <TouchableOpacity onPress={()=>{navigation.navigate('Subject',{subject:subject?.title})}}
                        key={`${index}-${subject?.title}`}>
                            <SubjectCard 
                            data={subject}
                            isFirst={index==0}
                            isLast={index == (listData.length - 1)}
                            />
                        </TouchableOpacity>
                    )})}
            </ScrollView>
            
            <View style={stylesheet.wrapperStyle}>
                <Title color={'#3282B8'} size={20} fontWeight={'500'} text="Featured Lessons"/>
                <ScrollView style={{marginTop:20,marginBottom:30}}>
                    {featuredLessons?.map((lesson,index)=>{
                        return(
                            <TouchableOpacity onPress={()=>{navigation.navigate('ModuleDetails',{id:lesson?.id})}}
                            key={`${index}-${lesson?.title}`}>
                                <LessonCard data={lesson} />
                            </TouchableOpacity>   
                        )
                    })}
                </ScrollView>
            </View>



            <View style={{paddingBottom:10}}>
            <View style={stylesheet.wrapperStyle}>
                <Title color={'#3282B8'} size={20} fontWeight={'500'} text="Featured Books"/>
            </View>
                <ScrollView style={{marginTop:20,marginBottom:3}} horizontal={true}>
                    {featuredBooks?.map((book,index)=>{
                        return(
                            <TouchableOpacity onPress={()=>{navigation.navigate('Details',{id:book?.id})}}
                            key={`${index}-${book?.title}`}>
                                <FeaturedBook
                                isFirst={index==0}
                                isLast={index==(featuredBooks?.length - 1)}
                                 data={{imgUrl:book?.imgUrl,title:book?.title,bookTitle:book?.author}} />
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>  
            </View>  


          

            <View style={stylesheet.wrapperStyle}>
                <Title color={'#3282B8'} size={20} fontWeight={'500'} text="Immersive Experiences"/>
            </View>

            <ScrollView style={{marginTop:20,marginBottom:50}} horizontal = {true}>
                    {featuredPortals?.map((portal,index)=>{
                        return(
                            <TouchableOpacity onPress={()=>{
                                handlePortalSelect(portal?.id);
                                // navigation.navigate('PortalCamera',{backIndex:1,portalId:portal?.id})
                            }}
                            key={`${index}-${portal?.title}`}>
                                <SubjectCard
                                isFirst={index==0}
                                isLast={index==(featuredPortals?.length - 1)}
                                data={{backgroundImg:portal?.backgroundUrl,title:portal?.title,subText:portal?.location}} />
                            </TouchableOpacity>
                        
                        )
                    })}
            </ScrollView>


            

                       
        </ScrollView>
    </View>
  )
}

export default Home