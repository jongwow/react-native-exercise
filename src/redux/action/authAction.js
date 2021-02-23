export const RESTORE_TOKEN = 'auth/RESTORE_TOKEN';
export const SIGN_OUT = 'auth/SIGN_OUT';
export const SIGN_OUT_RES = 'auth/SIGN_OUT_RES';

export const SIGN_IN = 'auth/SIGN_IN';
export const SIGN_IN_REQ = 'auth/SIGN_IN_REQ';
export const SIGN_IN_RES = 'auth/SIGN_IN_RES';
export const SIGN_IN_ERR = 'auth/SIGN_IN_ERR';

/* Action Creator */
export const signIn = (payload) => {
  console.log('signIn Action Creator Called');
  return {
    type: SIGN_IN_REQ,
    payload: payload,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
