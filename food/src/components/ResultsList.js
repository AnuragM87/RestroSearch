import React from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";

const ResultsList=({results,title,navigation})=>{
    if(!results.length){
        return null
    }
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={{fontSize:11,
                        fontWeight:'bold',
                        marginLeft:15}}
                        >Results: {results.length}</Text>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}

        data={results}
        keyExtractor={(result)=>result.id}
        renderItem={({item})=>{
            return(
            <TouchableOpacity onPress={()=>navigation.navigate('ResultShow',{id:item.id})}>
            <ResultDetails result={item}/>
            </TouchableOpacity>
            )
        }}
        />
    </View>
    )
}
const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    container:{
        marginBottom:10
    }

});

export default withNavigation(ResultsList);