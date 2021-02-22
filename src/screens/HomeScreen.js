import React from 'react';
import {View, Text, Button} from 'react-native';
import AuthContext from '../contexts/AuthContext';

function HomeScreen() {
  const {signOut} = React.useContext(AuthContext);
  if (!signOut) {
    return (
      <View>
        <Text>TESTS</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Signed in!</Text>
        <Button title="Sign out" onPress={signOut} />
      </View>
    );
  }
}

export default HomeScreen;
