import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../Context/AuthContext';
import Avatar from '../Components/Profile/Reusable/Avatar';
import { bookList } from '../Utils/data';
import BookCard from '../Components/Profile/Book/BookCard';
import { TouchableOpacity } from 'react-native';
import Title from '../Components/Profile/Reusable/Title';
import { colorScheme } from '../Utils/constants';


const style = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colorScheme.dark,
        alignItems: 'center',
        padding:25,
        paddingTop:0,
        display:'flex',
        flexDirection:'column',
    },
    nameText: {
        fontSize:35,
        fontWeight:'600'
    },
    
    headerWrapper: 
    {
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginBottom:20
    },

    bookCountStyle:{
    width:'100%',
    borderTopColor: '#f4f4f4',
    borderTopWidth:1,
    borderBottomColor:'#f4f4f4',
    borderBottomWidth:1,
    paddingTop:15,
    paddingBottom:15,
    marginBottom:20,
marginTop:20}

})

const Library = ({navigation}) => {

  React.useEffect(()=>{

  },[])
  return (
    <View style={style.container}>
        <Title text={'Library'}/>
        <View style={style.bookCountStyle}>
            <Text style={{fontSize:16,color:colorScheme.light2}}>{bookList.length} Books</Text>
        </View>
        <FlatList
        data={bookList}
        style={{width:'100%'}}
        numColumns={2}
        renderItem={({item})=>{
        return (
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Details',{
                        id:item.id
                    })
                }}
                style={{width:'50%'}}
            >
                <BookCard data={item}/>
            </TouchableOpacity>
        )
        }}
        keyExtractor={ item =>`${item.id}`}
        />
    </View>
  )
}

export default Library