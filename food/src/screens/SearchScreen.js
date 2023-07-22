import React, { useEffect, useState } from "react";
import {View,Text,StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";


const SearchScreen=()=>{

    const [term,setTerm]=useState('')
    const [searchApi,results,errorMsg]=useResults()
    const filterResultByPrice=(price)=>{
        return results.filter(result=>{
            return result.price===price
        })
    }
    return (
        <>
             <SearchBar term={term}
              onTermChange={(newTerm)=>setTerm(newTerm)}
              onTermSubmit={()=>searchApi(term)}
              />
            { errorMsg?<Text>{errorMsg}</Text>:null}
            {/* <Text style={{fontSize:18,
                        fontWeight:'bold',
                        marginLeft:15}}
                        >Results: {results.length}</Text> */}
            <ScrollView>
            <ResultsList 
            results={filterResultByPrice("$")}  
            title="Cost Effective"
             />
            <ResultsList 
            results={filterResultByPrice("$$")}  
            title="Bit Pricier"
            
            />
            <ResultsList 
            results={filterResultByPrice("$$$")} 
            title="Big Spender"
            />
            </ScrollView>
        </>
    )
};
const styls=StyleSheet.create({
    background:{
        backgroundColor:'#F0EEE'
    }
})

export default SearchScreen;
