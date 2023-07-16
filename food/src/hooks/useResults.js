import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default ()=>{
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

    return [searchApi,results,errorMsg];

}