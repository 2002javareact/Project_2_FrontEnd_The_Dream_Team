import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {store,persistor} from './Store';
import {PersistGate} from 'redux-persist/integration/react';
import NavbarComponent from './components/navbar-component/NavbarContainer';
import MainpageComponent from './components/mainpage-component/MainpageContainer';
import DoctorListComponent from './components/doctor-list-component/DoctorListContainer';
import PatientListComponent from './components/patient-list-component/PatientListContainer';
import LoginComponent from './components/login-component/LoginContainer';
import ProfileComponent from './components/profile-component/ProfileContainer';
import PatientComponent from './components/patient-component/PatientContainer';
import CreateUserFormComponent from './components/create-user-form-component/CreateUserFormContainer';
import saveNewDosageComponent from './components/dosage/saveNewDosage-Container';
import ViewAllMedicineComponent from './components/view-all-medicine-component/ViewAllMedicineContainer';
import  UpdateMedicineComponent  from './components/update-medicine-component/UpdateMedicineContainer';
import  AddMedicineComponent  from './components/add-medicine-component/AddMedicineContainer';
import MedicationByIdComponent from './components/medication-by-id-component/MedicationByIdContainer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router >
          <NavbarComponent/>
            <Switch>
              <Route path="/mainpage" component={MainpageComponent} />
              <Route path="/doctor-list" component={DoctorListComponent} />
              <Route path="/patient-list" component={PatientListComponent} />
              <Route path="/patient" component={PatientComponent} />
              <Route path="/create-user-form" component={CreateUserFormComponent}/>
              <Route path="/login" component={LoginComponent} />
              <Route path = "/profile/medication" component= {MedicationByIdComponent}/>
              <Route path="/profile" component={ProfileComponent} />
              <Route path="/dosage" component={saveNewDosageComponent} />
              <Route path = "/medicine/add" component = {AddMedicineComponent}/**add*//>
              <Route path = "/medicine/update" component = {UpdateMedicineComponent}/**update*//>
              <Route path = "/medicine" component = {ViewAllMedicineComponent}/**view all*//> 
              
            </Switch>
          </Router>

        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
