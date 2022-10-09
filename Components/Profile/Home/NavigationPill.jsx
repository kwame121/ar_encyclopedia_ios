import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity} from 'react-native';


const NavigationPill = ({selected,onclick}) => {

    const stylesheet = StyleSheet.create({
        containerStyle:{
        padding:10,
        backgroundColor:'#eaeced',
        width:'100%',
        borderRadius:30,
        display:'flex',
        alignItems:'center',
        flexDirection:'row'
      },  
      
      });

      const returnStyle = (selected) => {
        return({
            borderRadius:20,
            backgroundColor:selected?'#3282B8':'#eaeced',
            width:'100%',
            alignItems:'center',
            padding:10
        })
      }

      const returnTextStyle = (selected) => {
        return({
            color:selected?'white':'black',
            fontWeight:'600'
      })
      }

    
  return (
    <View
    style={stylesheet.containerStyle}
    >
        <TouchableOpacity style={{width:'50%'}} onPress={()=>{onclick(0)}}>
            <View  style={returnStyle(selected == 0)}>
                <Text style={returnTextStyle(selected==0)}>
                    Books
                </Text>
            </View>
        </TouchableOpacity>
       
       <TouchableOpacity style={{width:'50%'}} onPress={()=>{onclick(1)}}>
            <View style={returnStyle(selected == 1)}>
                <Text style={returnTextStyle(selected==1)}>
                    Modules
                </Text>
            </View>
       </TouchableOpacity>
        
    </View>
  )
}

export default NavigationPill;