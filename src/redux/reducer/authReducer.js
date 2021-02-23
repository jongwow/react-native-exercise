import {
  RESTORE_TOKEN,
  SIGN_IN_ERR,
  SIGN_IN_RES,
  SIGN_OUT,
  SIGN_OUT_RES,
} from '../action/authAction';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTORE_TOKEN: {
      console.warn('RESTORE_TOKEN result: ', action.token);
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    }
    case SIGN_IN_RES: {
      console.log('SIGN_IN_RES');
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    }
    case SIGN_IN_ERR: {
      // eslint-disable-next-line no-alert
      alert('ERROR 발생');
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    }
    case SIGN_OUT_RES: {
      console.log(SIGN_OUT_RES);
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
