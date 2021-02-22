import React, {useEffect} from 'react';
import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {connect, useDispatch} from 'react-redux';
import {bootstrapAsync} from './utilities/storage';

const Stack = createStackNavigator();

class innerLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.bootstrapAsync();
  }

  render() {
    return (
      <Stack.Navigator>
        {this.props.isLoading ? (
          // We haven't finished checking for the token yet
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : this.props.userToken == null ? (
          // No token found, user isn't signed in
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: this.props.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          // User is signed in
          <Stack.Screen name="Home" component={HomeScreen} />
        )}
      </Stack.Navigator>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    isSignout: state.auth.isSignout,
    userToken: state.auth.userToken,
  };
};
const mapDispatchToProps = {
  bootstrapAsync,
};
const Layout = connect(mapStateToProps, mapDispatchToProps)(innerLayout);

export default Layout;
