import React from "react";
import {View,Text,StyleSheet, TextInput} from 'react-native'
import {Feather} from '@expo/vector-icons'
const SearchBar=({term, onTermChange,onTermSubmit})=>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
             <TextInput 
             autoCorrect={false}
             autoCapitalize="none"
             style={styles.inputStyle}
             placeholder="Search"
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit}
             />
        </View>
    )
};
const styles=StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        height:50,
        boarderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:15,
        marginBottom:10

    },
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15

    }

})

export default SearchBar;
