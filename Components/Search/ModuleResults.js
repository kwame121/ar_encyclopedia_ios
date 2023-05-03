import React from 'react';
import { StyleSheet, Text, View,FlatList ,Alert, TouchableOpacity} from 'react-native';
import ResultItem from './ResultItem';

const styles = StyleSheet.create({
    container:
    {
        width:'100%',
        display:'flex',
        flexDirection:'column'
    }
})

const ModuleResults = ({data,onclick}) => {
  return (
    <View style={styles.container}>
         {data.map((item,index)=>{
            return(
                <TouchableOpacity
                    onPress={()=>{
                    onclick(item?.id);
                    }}
                    style={{width:'100%'}}
                    key={`${item?.id}-${item?.title}`}
                >
                    <ResultItem type={'module'} data={item}/>
                </TouchableOpacity>
            )
        })}

    </View>
  )
}

export default ModuleResults