import React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen() {
  if (!true) {
    return (
      <View>
        <Text>TESTS</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Signed in!</Text>
        <Button
          title="Sign out"
          onPress={() => {
            console.log('HDFSDFS');
          }}
        />
      </View>
    );
  }
}

export default HomeScreen;
