/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component,useState} from 'react';
 import {
  SafeAreaView,
   StyleSheet,
   TextInput,
   View, 
   AsyncStorage,
   Text,
 } from 'react-native';
import { Icon,Button } from 'react-native-elements' 
import InputPersonalisado from '../component/InputPersonalisado';

export default function Login ({ navigation }) {
   
  /*AsyncStorage.setItem('token', '01')*/
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <InputPersonalisado icono="user" placeholder="Username"/>
      <InputPersonalisado type ="entypo" icono="key" placeholder="Password" seguro={true}/>
      <View>
         <Text style= {styles.butoon}>
                Si está registrado pulse login
            </Text>
            <Button title='Login' color='#be98f3' onPress={() => navigation.navigate('ListaUser')}/>        
      </View>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    margin: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    fontStyle: 'italic',
    marginBottom: 15,
    backgroundColor: '#be98f3',
    borderColor: '#be98f3',
    borderRadius: 40,
    textAlign: 'center',
    flex:1
  },
  butoon: {
    color: '#ffffff',
    fontSize: 15,
    fontStyle: 'italic',
    margin: 5,
    width: '100%'
  },
})