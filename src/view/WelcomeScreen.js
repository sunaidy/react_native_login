import React from 'react';
import {Button} from 'react-native-elements' ;
import {Text, View, StyleSheet} from 'react-native';
import { AppStyles } from '../AppStyles';

function WelcomeScreen({navigation}) {
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Button
        type="clear"
        title='Iniciar sesión'
        containerStyle={styles.loginContainer}
        onPress={() => navigation.navigate('LoginScreen')}>
      </Button>
      <Button
        type="Outline"
        title='Registrarse'
        containerStyle={styles.signupContainer}
        style={styles.signupText}
        onPress={() => navigation.navigate('SignupScreen')}>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150,
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.principal,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.principal,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.principal,
    marginTop: 15,
  },
  signupText: {
    color: AppStyles.color.tint,
  },
});

export default WelcomeScreen;
