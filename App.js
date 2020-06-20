import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppLoading} from 'expo';
import {bootstrap} from './src/bootstrap';
import {StackNavigation} from './src/navigation/StackNavigation';
import {MainNavigation} from './src/navigation/MainNavigation';

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
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
}


