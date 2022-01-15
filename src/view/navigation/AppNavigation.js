
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import ListaUser from '../ListaUser';
import LoginNavigation from './LoginNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector , useDispatch } from 'react-redux'
import { Text } from 'react-native';
import Home from '../Home'
import SignupScreen from '../login/SignupScreen';
import { decrement } from '../../counter/counterSlice';

/* Vistas dentro del Drawer Navigation*/ 
const Stack  = createNativeStackNavigator();
const HomeNavigation = () => {
  return (  
    <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen name='ListaUser' component={ListaUser} options={{headerShown: false}}/>
       <Stack.Screen name='Home' component={Home} options={{headerShown: false}}/>
    </Stack.Navigator> 
  );
}

function CustomDrawerContent(props) {
  const dispatch = useDispatch()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Cerrar sesion" onPress={() => dispatch(decrement()) } />
    </DrawerContentScrollView>
  );
} 

const Drawer = createDrawerNavigator();
const Navigation = () => {
return (  
  <Drawer.Navigator screenOptions={{headerShown: true}} drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name='Inicio' component={HomeNavigation}/>
      <Drawer.Screen name='Detalles' component={ListaUser}/>
      <Drawer.Screen name='Registrar Usuario' component={SignupScreen}/>
  </Drawer.Navigator>
);
}


const AppNavigation = () => {
const count = useSelector(state => state.counter.value)

const user = useSelector(state => state.counter.ListaUser)
  return (  
    <NavigationContainer> 
    {count==0 ?  <LoginNavigation/>  : <Navigation/>}           
    </NavigationContainer>
  );
  }

export default AppNavigation;