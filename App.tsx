import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/_store/store';
import {NavigationContainer} from '@react-navigation/native';
import {createRootNavigator} from './src/router';

const App: () => JSX.Element = () => {
  const Layout = createRootNavigator();
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigationContainer>
            <Layout />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
