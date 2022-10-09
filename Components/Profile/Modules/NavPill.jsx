import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity} from 'react-native';


const NavPill = ({selected,onclick}) => {

    const stylesheet = StyleSheet.create({
        containerStyle:{
        padding:10,
        backgroundColor:'#eaeced',
        width:'100%',
        borderRadius:30,
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        flexDirection:'row'
      },  
      navItem:{
        
      },
      
      });

      const returnStyle = (selected) => {
        return({
            borderRadius:20,
            backgroundColor:selected?'#3282B8':'#eaeced',
            // width:'25%',
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
        <TouchableOpacity style={{width:'33%'}}  onPress={()=>{onclick(0)}}>
            <View  style={returnStyle(selected == 0)}>
                <Text style={returnTextStyle(selected==0)}>
                    Description
                </Text>
            </View>
        </TouchableOpacity>
       
       <TouchableOpacity style={{width:'33%'}} onPress={()=>{onclick(1)}}>
            <View style={returnStyle(selected == 1)}>
                <Text style={returnTextStyle(selected==1)}>
                    Images
                </Text>
            </View>
       </TouchableOpacity>

       <TouchableOpacity style={{width:'33%'}} onPress={()=>{onclick(2)}}>
            <View style={returnStyle(selected == 2)}>
                <Text style={returnTextStyle(selected==2)}>
                    Video
                </Text>
            </View>
       </TouchableOpacity>
        
        {/* <TouchableOpacity style={{width:'33%'}} onPress={()=>{onclick(3)}}>
            <View style={returnStyle(selected == 3)}>
                <Text style={returnTextStyle(selected==3)}>
                    AR
                </Text>
            </View>
        </TouchableOpacity> */}
        
    </View>
  )
}

export default NavPill