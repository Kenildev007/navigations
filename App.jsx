import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StackNavigation />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App

const styles = StyleSheet.create({});