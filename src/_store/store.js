// Imports: Dependencies
import AsyncStorage from '@react-native-community/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
// Imports: Redux
import reducer from './reducer';
// Middleware: Redux Persist Config
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
  timeout: null,
};
// Middleware: Redux Persist Persisted Reducer To store status of viewed applications accross sessions with Async Storage
const persistedReducer = persistReducer(persistConfig, reducer);
// Redux: Store
const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  ),
);
// Middleware: Redux Persist Persister
let persistor = persistStore(store);
// Exports
export {store, persistor};
