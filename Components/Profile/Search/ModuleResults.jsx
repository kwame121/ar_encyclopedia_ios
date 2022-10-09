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
        <FlatList
        data={data}
        style={{width:'100%'}}
        renderItem={({item})=>{
        return (
            <TouchableOpacity
                onPress={()=>{
                   onclick(item?.id)
                }}
                style={{width:'100%'}}
            >
                <ResultItem type={'module'} data={item}/>
            </TouchableOpacity>
        )
        }}
        keyExtractor={ item =>`${item.id}`}
        />

    </View>
  )
}

export default ModuleResults