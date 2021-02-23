import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {signOut} from '../redux/action/authAction';

function HomeScreen() {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Signed in!</Text>
      <Button
        title="Sign out"
        onPress={() => {
          dispatch(signOut());
        }}
      />
    </View>
  );
}

export default HomeScreen;
