import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity,ScrollView} from 'react-native';
import NavigationPill from '../Components/Profile/Home/NavigationPill';
import BookResults from '../Components/Profile/Search/BookResults';
import ModuleResults from '../Components/Profile/Search/ModuleResults';
import { getModulesByCategory,getBooksByCategory } from '../Utils/functions';
import Title from '../Components/Profile/Reusable/Title';


const SubjectView = ({navigation,route}) => {

let {subject} = route.params;
const [value,setValue] = React.useState(0);
const [bookList,setBookList] = React.useState([]);
const [moduleList,setModuleList] = React.useState([]);


React.useEffect(()=>{

    if (value == 0)
    {
        let results = getBooksByCategory(subject);
        setBookList(results);
    }
    else if (value == 1)
    {
        let results = getModulesByCategory(subject);
        setModuleList(results);
    }

},[value])

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
        flexDirection:'column',
    }
});

const handleBookNavigation = (id) => {

    navigation.navigate('Details',{id:id});
}

const handleModuleNavigation = (id) => {
    navigation.navigate('Module',{id:id});
}
  return (
   <View style={stylesheet.containerStyle}>
     <ScrollView style={stylesheet.scrollViewStyle}>
            <Title text={subject}/>
            <View style={{marginTop:20,marginBottom:20}}>
                <Title fontWeight={'400'} size={18} text="Browse"/>
            </View>
            <NavigationPill onclick={setValue} selected={value}/>
            {
                value == 0 &&
                <BookResults onclick={handleBookNavigation} data={bookList} />
            }
            {
                value == 1 &&
                <ModuleResults onclick={handleModuleNavigation} data={moduleList}/>
            }
      </ScrollView>
   </View>
  )
}

export default SubjectView
