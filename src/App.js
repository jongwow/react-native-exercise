import * as React from 'react';

import {Provider} from 'react-redux';
import {store} from './redux/store/store';
import CounterScreen from './screens/CounterScreen';

export default function App() {
  return (
    <Provider store={store}>
      <CounterScreen />
    </Provider>
  );
}
