import React from 'react';
 import {
   StyleSheet,
   TextInput,
   View, 
 } from 'react-native';
import { Icon } from 'react-native-elements';  

export default function InputPersonalisado ({type="font-awesome",icono,placeholder,seguro=false}) { 
  
    return (      
      <View style={styles.container}> 
        <Icon type={type} name={icono} color="gray" style={styles.icon}></Icon>
        <TextInput style={styles.textInput} secureTextEntry={seguro} placeholder={placeholder}/>
      </View>
    );
    
}

const styles = StyleSheet.create ({
  container:{
    flexDirection:'row',
    backgroundColor: '#be98f3',
    borderRadius: 30,
    marginBottom: 15,
  },
  icon:{
    flex:1,
    justifyContent:'center',
    paddingLeft:'10%',
  },
  textInput:{
    backgroundColor:'transparent',
    flex:5,
    color:'black',
    paddingLeft:'10%',
    fontSize: 20,
  }
  
})