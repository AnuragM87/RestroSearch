import React, { useEffect, useState } from "react";
import {View,StyleSheet,Text, FlatList,Image} from 'react-native'
import yelp from "../api/yelp";

const ResultShowScreen=({navigation})=>{
    const [result,setResults]=useState(null);
    const id=navigation.getParam('id');

    console.log(result)
    const getResult=async id=>{
    try{
       const response= await yelp.get(`/${id}`)
       setResults(response.data)
    }catch(err){
        <Text>" not able to fetch, api failed" </Text>
        console.log(" api failed")
    }
}
    useEffect(()=>{
    getResult(id);
    },[])

    if(!result){
        return null;
    }
    return(
    <View>
    <Text style={styles.title}>{result.name}</Text>
    <FlatList
        data={result.photos}
        keyExtractor={(photo)=>photo}
        renderItem={({item})=>{
            return <Image style={styles.image} source={{uri:item}}/>
        }}/>
    </View>
    )
}

const styles=StyleSheet.create({
    image:{
        height:200,
        width:300,
        marginLeft:15,
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    }

})


export default ResultShowScreen;