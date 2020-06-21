import React, {useState} from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from 'expo';
import {bootstrap} from './src/bootstrap';
import {HomeStackNavigator} from './src/navigation/HomeStackNavigator';
import {MainNavigator} from './src/navigation/MainNavigator';
import {store} from './src/store';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
  );
}


