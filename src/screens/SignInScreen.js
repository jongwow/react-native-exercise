import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {signIn} from '../redux/action/authAction';

function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        title="Sign in"
        onPress={() => {
          dispatch(signIn({username, password}));
        }}
      />
    </View>
  );
}

export default SignInScreen;
