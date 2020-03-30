import { IState } from "../../reducers";
import { connect } from "react-redux";
import {ViewAllMedicineComponent } from "./ViewAllMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { getAllMedicineMapper } from "../../action-mappers/all-medicine-mapper";


const mapStateToProps = (state:IState) => {
    return {
<<<<<<< HEAD
        doctor: new Doctor([],0,'','',new Date(0),0,'','',''),//state.login.doctor, //???
=======
        doctor: new Doctor([],0,'','',0,0,'','',''),//state.profile.user check for is doctor? ???
>>>>>>> master
        allMedicine:[],
        errorMessage:'',
    }
}

const mapDispatchToProps = {
    getAllMedicineActionMapper: getAllMedicineMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllMedicineComponent)