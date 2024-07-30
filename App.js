import React from 'react';
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

//screens

import login from './Screens/Login';

export default function App(){
  return <login/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
  },
});


