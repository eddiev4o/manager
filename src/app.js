import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from '@firebase/app';
import '@firebase/auth';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import Router from './router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBZvZNuHQKOpHuk5sjaztPfCvYgL1A-6wY',
            authDomain: 'manager-257f2.firebaseapp.com',
            databaseURL: 'https://manager-257f2.firebaseio.com',
            projectId: 'manager-257f2',
            storageBucket: 'manager-257f2.appspot.com',
            messagingSenderId: '3282378552'
        };
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
            return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
