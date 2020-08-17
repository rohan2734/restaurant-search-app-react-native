import React from  'react';
import {View,Text,StyleSheet} from 'react-native';

const SearchBar = () => {
  return(
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  )
};

const styles= StyleSheet.create({
  background:{
    backgroundColor:'#C3C3C3',
    height:50,
    borderRadius:5,
    marginHorizontal:15
  }
});

export default SearchBar;