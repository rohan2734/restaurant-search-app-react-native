import React from  'react';
import {View,TextInput,StyleSheet} from 'react-native';

import { Feather } from '@expo/vector-icons'; 

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
  return(
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder="Search"
        placeholderTextColor = "black"
        value={term}
        // onChangeText={newTerm => onTermChange(newTerm)} or
        //  onEndEditing={() =>onTermSubmit()} or
        onChangeText={onTermChange} 
        onEndEditing={onTermSubmit}
      />
    </View>
  )
};

const styles= StyleSheet.create({
  backgroundStyle:{
    marginTop:15,
    backgroundColor:'#CFD1D3',
    height:50,
    borderRadius:5,
    marginHorizontal:15,
    flexDirection:"row",
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
});

export default SearchBar;