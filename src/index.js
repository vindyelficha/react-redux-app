import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk' // redux thunk merupakan middleware
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

//harus pass route reducer ke fungsi createStore sehingga dapat menyambungkan reducer dengan store
const store = createStore(rootReducer, 
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig, {attachAuthIsReady: true}) //error-> udah ga error setelah downgrade versi react-redux-firebase
    )  
  );


//navbar menunjukkan signedoutlinks ketika direfresh (harusnya signedinlinks apabila user sedang login)
//disebabkan aplikasi di-load dan di-render ke dom sebelum firebase authentication diinisialisasi
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>,
    </React.StrictMode>,
    document.getElementById('root')
  );
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();