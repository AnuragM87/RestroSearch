import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen=()=>{
    const [term,setTerm]=useState('')
    const [searchApi,results,errorMsg]=useResults()
    return (
        <View>
             <SearchBar term={term}
              onTermChange={(newTerm)=>setTerm(newTerm)}
              onTermSubmit={()=>searchApi(term)}
              />
            { errorMsg?<Text>{errorMsg}</Text>:null}
            <Text>we have found {results.length}</Text>
            <ResultsList title="Cost Effective" />
            <ResultsList title="Bit Pricier"/>
            <ResultsList title="Big Spender"/>
        </View>
    )
};
const styls=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEE'
    }
})

export default SearchScreen;
