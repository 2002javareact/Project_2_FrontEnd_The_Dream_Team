import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store,persistor} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import { MainpageComponent } from './components/mainpage-component/MainpageComponent';
import DoctorListComponent from './components/doctor-list-component/DoctorListContainer';
import { PatientListComponent } from './components/patient-list-component/PatientListComponent';
import LoginComponent from './components/login-component/LoginContainer';
import ProfileComponent from './components/profile-component/ProfileContainer';
import { PatientComponent } from './components/patient-component/PatientComponent';
import { CreateUserFormComponent } from './components/create-user-form-component/CreateUserFormComponent';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router >
          <NavbarComponent />
            <Switch>
              <Route path="/mainpage" component={MainpageComponent} />
              <Route path="/doctor-list" component={DoctorListComponent} />
              <Route path="/patient-list" component={PatientListComponent} />
              <Route path="/patient" component={PatientComponent} />
              <Route path="/create-user-form" component={CreateUserFormComponent}/>
              <Route path="/login" component={LoginComponent} />
              <Route path="/profile" component={ProfileComponent} />
            </Switch>
          </Router>

        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
