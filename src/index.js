import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import { Provider } from 'react-redux';
import loginReducer from './components/loginReducer';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, loginReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PersistGate>
  </Provider>,
 
);


