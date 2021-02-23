import React, {useEffect} from 'react';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import HomeTabs from './screens/HomeTabs';
import {createStackNavigator} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {bootstrapAsync} from './utilities/storage';

const Stack = createStackNavigator();

const Layout = () => {
  const dispatch = useDispatch();
  const {isLoading, isSignout, userToken} = useSelector((state) => ({
    isLoading: state.auth.isLoading,
    isSignout: state.auth.isSignout,
    userToken: state.auth.userToken,
  }));

  useEffect(() => {
    bootstrapAsync().then((res) => {
      dispatch(res);
    });
  }, [dispatch]);

  return (
    <Stack.Navigator>
      {isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="Home" component={HomeTabs} />
      )}
    </Stack.Navigator>
  );
};

export default Layout;
