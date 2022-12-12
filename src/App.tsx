/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import { RootNavigator } from '@navigation/RootNavigator';

const App = () => {
  return (
    <SafeAreaView>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaView>
  );
};
export default App;