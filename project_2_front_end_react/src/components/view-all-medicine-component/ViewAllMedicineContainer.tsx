import { IState } from "../../reducers";
import { getAllMedicineActionMapper } from '../../action-mappers/view-medicine-action-mappers'
import { connect } from "react-redux";
import {ViewAllMedicineComponent } from "./ViewAllMedicineComponent";
import { Doctor } from "../../models/Doctor";


const mapStateToProps = (state:IState) => {
    return {
        doctor: new Doctor([],0,'','',0,0,'','',''),//state.login.doctor, //???
        allMedicine:[],
        errorMessage:'',
        getAllMedicineActionMapper: ()=>void  // change
    }
}

const mapDispatchToProps = {
    getAllMedicineActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllMedicineComponent)