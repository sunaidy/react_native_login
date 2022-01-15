/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/view/navigation/AppNavigation';
import { Provider } from 'react-redux'
import store from './src/app/store';


const App = () => {
  return (
    <Provider store={store}>
       <AppNavigation/> 
    </Provider>
  );
}

export default App;
 