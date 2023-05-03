import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity} from 'react-native';
import { BlurView } from '@react-native-community/blur';


const OptionPill = ({selected,onclick,activeColor}) => {

    const stylesheet = StyleSheet.create({
        containerStyle:{
        padding:10,
        // backgroundColor:'black',
        width:'100%',
        borderRadius:10,
        justifyContent:'space-between',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
        marginVertical:5
      },  
      navItem:{
        
      },
      
      });

      const returnStyle = (selected) => {
        return({
            borderRadius:10,
            backgroundColor:selected?activeColor:'transparent',
            // width:'25%',
            alignItems:'center',
            padding:10
        })
      }

      const returnTextStyle = (selected) => {
        return({
            color:selected?'white':'white',
            fontWeight:'500'
      })
      }

    
  return (
    <BlurView
    style={stylesheet.containerStyle}
    blurAmount={20} type={'dark'}
    >
        <TouchableOpacity style={{width:'50%'}}  onPress={()=>{onclick(0)}}>
            <View  style={returnStyle(selected == 0)}>
                <Text style={returnTextStyle(selected==0)}>
                    Description
                </Text>
            </View>
        </TouchableOpacity>
       
       <TouchableOpacity style={{width:'50%'}} onPress={()=>{onclick(1)}}>
            <View style={returnStyle(selected == 1)}>
                <Text style={returnTextStyle(selected==1)}>
                    Labels
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
        
    </BlurView>
  )
}

export default OptionPill