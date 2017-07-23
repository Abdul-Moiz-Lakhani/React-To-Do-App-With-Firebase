import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { firebaseApp } from './firebase';

firebaseApp.auth().onAuthStateChanged(user => {
    if(user) {
        console.log('user has signed in', user)
    }
    else
    {
        console.log('user signed out')
    }
})

ReactDOM.render(<App />,document.getElementById('root'));
    
registerServiceWorker();
