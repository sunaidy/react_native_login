/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   StyleSheet,
   Text,
   View, 
 } from 'react-native'; 

import {Button} from 'react-native-elements';
import { AppStyles } from '../AppStyles';

import { useSelector , useDispatch} from 'react-redux'
import { decrement } from '../counter/counterSlice';

 export default function ListaUser ({ navigation }) {
  //const { itemId, user } = route.params;
const user = useSelector(state => state.counter.ListaUser)
const dispatch = useDispatch()
   return (
       <View style={styles.container} >
         <Text  style={styles.text}>Nombre Completo: Suny {user} </Text>
         <Text  style={styles.text}>Correo: suny@gmail.com {user} </Text>
         <Text  style={styles.text}>Usuario: suny {user} </Text>
          <Text  style={styles.text}>ID: {Math.floor(Math.random() * 100)}</Text>
         <Button 
        type="clear"
        containerStyle={styles.btn} title="Salir"  onPress={() => dispatch(decrement())}></Button>
       </View>
   );
 };
 
 const styles = StyleSheet.create ({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   },
   text: {
     fontSize: 18,
     fontStyle: 'italic',
     margin: 10,
     color: AppStyles.color.text,
   },
   btn: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.principal,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  }
   
 })
 
 