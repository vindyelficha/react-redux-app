import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' // redux thunk merupakan middleware
import { createFirestoreInstance,reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app';

//harus pass route reducer ke fungsi createStore sehingga dapat menyambungkan reducer dengan store
const store = createStore(rootReducer, 
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
      reduxFirestore(firebase, fbConfig),
      // reactReduxFirebase(fbConfig) //error  
    )  
  );

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  // <React.StrictMode>
    <Provider store={store}>
      {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
        <App />
      {/* </ReactReduxFirebaseProvider> */}
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
