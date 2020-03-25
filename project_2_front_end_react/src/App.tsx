import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store,persistor} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import { NavbarComponent } from './components/navbar-component/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router >
          {// TODO
          }
          <NavbarComponent profile={{id:0,firstName:'',lastName:'',dateOfBirth:0,phoneNumber:0,email:"@@",roleType:'',username:''}} />
            <Switch>

            </Switch>
          </Router>

        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
