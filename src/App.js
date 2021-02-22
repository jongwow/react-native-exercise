import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';

import {store} from './redux/store/store';

import Layout from './Layout';
import {bootstrapAsync} from './utilities/storage';

export default function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    dispatch(bootstrapAsync);
  }, [dispatch]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </Provider>
  );
}
