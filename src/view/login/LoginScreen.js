import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import {Icon,Button} from 'react-native-elements';
import { AppStyles } from '../../AppStyles';
import {useDispatch } from 'react-redux'
import { increment , addUser } from '../../counter/counterSlice';
import SignupScreen from './SignupScreen';

function LoginScreen({navigation}) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()
  const onPressLogin = () => {
    if (email.length <= 0 || password.length <= 0) {
      Alert.alert('Por favor complete los campos requeridos.');
      return;
    } else {
      dispatch(increment());
      dispatch(addUser(email));
    }
  };
  const onPressSing = () => {
    return  navigation.navigate('SignupScreen')
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.leftTitle]}>Inicio de sesión</Text>
      <View style={styles.InputContainer}>
        <Icon type="font-awesome" name="user"  color="gray" style={styles.icon}></Icon>
        <TextInput
          style={styles.body}
          placeholder="Usuario*"
          onChangeText={setEmail}
          value={email}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <View style={styles.InputContainer}>
        <Icon type="entypo" name="key" color="gray" style={styles.icon}></Icon>
        <TextInput
          style={styles.body}
          secureTextEntry={true}
          placeholder="Contraseña*"
          onChangeText={setPassword}
          value={password}
          placeholderTextColor={AppStyles.color.grey}
          underlineColorAndroid="transparent"
        />
      </View>
      <Button
        type="clear"
        title='Iniciar sesión'
        color='#841584'
        containerStyle={styles.loginContainer}
        onPress={() => onPressLogin()}>
      </Button>
      <View style={styles.viewContainer}>
      <Text style={styles.test} >Aun no estoy en el sistema.</Text>
      <Text style={styles.or} onPress={() => onPressSing()}>Registrarse</Text>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  or: {
    color: AppStyles.color.blue,
    marginTop: 5,
    marginBottom: 10,
  },
  test: {
    color: AppStyles.color.text,
    marginTop: 5,
    marginBottom: 10,
  },
  icon:{
    flex:1,
    justifyContent:'center',
    paddingLeft:'10%',
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.principal,
    marginTop: 20,
    marginBottom: 20,
  },
  leftTitle: {
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 20,
  },
  content: {
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: 'center',
    fontSize: AppStyles.fontSize.content,
    color: AppStyles.color.text,
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.principal,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30,
  },
  loginText: {
    color: AppStyles.color.white,
  },
  placeholder: {
    color: 'red',
  },
  InputContainer: {
    flexDirection:'row',
    width: AppStyles.textInputWidth.main,
    marginTop: 30,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: AppStyles.color.grey,
    borderRadius: AppStyles.borderRadius.main,
  },
  viewContainer: {
    flexDirection:'row',
    width: AppStyles.textInputWidth.main,
    marginTop: 5,
  },
  body: {
    height: 42,
    paddingLeft: 20,
    paddingRight: 20,
    color: AppStyles.color.text,
  }
});

export default LoginScreen;
