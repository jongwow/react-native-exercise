import {RESTORE_TOKEN, SIGN_IN, SIGN_OUT} from '../action/authAction';

const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    }
    case RESTORE_TOKEN: {
      console.warn('RESTORE_TOKEN');
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
