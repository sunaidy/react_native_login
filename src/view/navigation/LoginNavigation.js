
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//vistas
import LoginScreen from '../login/LoginScreen';
import SignupScreen from '../login/SignupScreen';


const LoginStack = createNativeStackNavigator();
const LoginNavigation = () => {
  return (  
    <LoginStack.Navigator initialRouteName='LoginScreen'>
       <LoginStack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}}/>
       <LoginStack.Screen name='SignupScreen' component={SignupScreen} options={{headerShown: false}}/> 
    </LoginStack.Navigator> 
  );
}

export default LoginNavigation;

  