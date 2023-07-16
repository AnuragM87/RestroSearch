import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import yelp from "../api/yelp";


const SearchScreen=()=>{
    const [term,setTerm]=useState('')
    const [results,setResults]=useState([])
    const [errorMsg,setErrorMesg]=useState('');
    const searchApi=async searchTerm=>{
      try{
        const response=await yelp.get('/search',{
        params:{
            limit:50,
            term:searchTerm,
            location:'newyork'
        }
    });
       setResults(response.data.businesses)
        }catch(err){
            setErrorMesg('something went wrong')
        }
    }

    useEffect(()=>{
        searchApi('pasta')
    },[]);
    return (
        <View>
             <SearchBar term={term}
              onTermChange={(newTerm)=>setTerm(newTerm)}
              onTermSubmit={()=>searchApi(term)}
              />
            { errorMsg?<Text>{errorMsg}</Text>:null}
            <Text>we have found {results.length}</Text>
        </View>
    )
};
const styls=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEE'
    }
})

export default SearchScreen;
