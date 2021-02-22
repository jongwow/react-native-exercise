import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const innerLayout = (props) => {
  return (
    <Stack.Navigator>
      {props.isLoading ? (
        // We haven't finished checking for the token yet
        <Stack.Screen name="Splash" component={SplashScreen} />
      ) : props.userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            animationTypeForReplace: props.isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    isSignout: state.auth.isSignout,
    userToken: state.auth.userToken,
  };
};

const Layout = connect(mapStateToProps)(innerLayout);

export default Layout;
