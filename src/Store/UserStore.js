import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = {
    set: (key,value) => AsyncStorage.setItem(key,value),
    get: (key,value) => AsyncStorage.getItem(key,value),
  };

export default storeData;