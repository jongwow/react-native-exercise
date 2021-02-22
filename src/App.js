import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';

import {store} from './redux/store/store';

import Layout from './Layout';
import {bootstrapAsync} from './utilities/storage';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </Provider>
  );
}
