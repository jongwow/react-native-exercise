import AsyncStorage from '@react-native-async-storage/async-storage';
import {RESTORE_TOKEN} from '../redux/action/authAction';

export const bootstrapAsync = async () => {
  let userToken;

  try {
    userToken = await AsyncStorage.getItem('userToken');
  } catch (e) {
    // Restoring token failed
    console.error(e);
  }

  // After restoring token, we may need to validate it in production apps
  console.log('bootstrapAsync completed');
  // This will switch to the App screen or Auth screen and this loading

  /* 서버에 요청해서 이게 valid한지 확인하는 API 필요. 그거에 따라서 RESTORE_TOKEN 이후 rendering이 달라질 예정. */

  // screen will be unmounted and thrown away.
  return {type: RESTORE_TOKEN, token: userToken};
};
