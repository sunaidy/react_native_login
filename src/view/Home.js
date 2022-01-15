import React from 'react';
import {
    Text,
   StyleSheet,
   View,
  } from 'react-native';
  import { AppStyles } from '../AppStyles';
  
export default function Home ({ navigation }) {
    return (

     <View style={styles.container}>
            <Text style= {styles.text}>
                Bienvenid@ 
            </Text>
     </View>
    )
};

const styles = StyleSheet.create ({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    flex: 1,
  },
  text: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.principal,
  },
})