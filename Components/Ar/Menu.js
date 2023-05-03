import React from 'react';
import { View, StyleSheet,Dimensions,ScrollView,Text,SafeAreaView, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const window = Dimensions.get('window');


const BookTitleArea = ({data}) => {

    console.log('bookData',data)
    const styles = StyleSheet.create({
        container:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            width:'100%',
            padding:20
        },
        descriptionArea:{
            display:'flex',
            flexDirection:'column',
        },
        title:{
            fontWeight:'500',
            color:'black',
            fontSize:20,
            width:150,
            textAlign:'right'
        },
        subTitle:{
            fontWeight:'500',
            color:'black',
            fontSize:12,
            textAlign:'right'
        }
    });


    return (
        <View style={styles.container}>
            <View style={{marginRight:10}}>
                <ImageBackground borderRadius={10} source={data?.imgUrl} style={{width:60,height:60,backgroundColor:'gray',borderRadius:10}}/>
            </View>
            <View style={styles.descriptionArea}>
                <Text style={styles.title} numberOfLines={1}  ellipsizeMode={'tail'}>{data?.title}</Text>
                <Text style={styles.subTitle}>{data?.author}</Text>
            </View>

        </View>
    )
}

const MenuItem = ({data,onItemSelected}) => {

const styles = StyleSheet.create({
    container:{
        // width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // paddingHorizontal:20,
        marginHorizontal:20,
        paddingVertical:10,
        borderBottomColor:'#d2d2d4',
        borderBottomWidth:1

    }
})
return(
    <TouchableOpacity onPress={()=>{onItemSelected(data)}}>
        <View style = {styles.container}>
            <Ionicons 
                name="book-outline" 
                color="black" 
                size={30}
            />
            <View>
                <Text style={{color:'black',fontSize:16,textAlign:'right'}}> {`${data?.title}`}</Text>
            </View>
        </View>
    </TouchableOpacity>
)
}

const Menu = ({onItemSelected,pageList,bookData}) => {
 const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        // paddingTop:40,
        width:'100%',
        height:window.height,  

    },
    contentStyle:{
        paddingLeft:20,
        paddingBottom:10,
    },
    contentTextStyle:{
        fontWeight:'600'
    }
 })

 console.log(pageList)

  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
        <BookTitleArea data={bookData}/>
        <View style={styles.contentStyle}>
            <Text style={styles.contentTextStyle}>
            Contents
            </Text>
        </View>
        <ScrollView style={styles.container}>
       {
        pageList.map((page,index)=>{
            return(
                <MenuItem
                key={`${index}-${page?.id}`}
                onItemSelected={onItemSelected}
                data={page}/>
            )
        })
       }
    </ScrollView>

    </SafeAreaView>
    
  )
}

export default Menu;