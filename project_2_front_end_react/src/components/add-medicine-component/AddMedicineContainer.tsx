import { IState } from "../../reducers";
import { connect } from "react-redux";
import {Doctor} from "../../models/Doctor";
import { AllMedicine } from "../../models/AllMedicine";
import { AddMedicineComponent } from "./AddMedicineComponent";
//import {getAddMedicineActionMapper} from "../../action-mappers/add-medicine-mapper"


const mapStateToProps = (state:IState) => {
    return {
        doctor:new Doctor([],0,'','',0,0,'','',''),//state.profile.user,
        //addMedicine:new AllMedicine('','',0),//state.addMedicine.medicine,
        errorMessage: ''//error messagem from add medicine,
    }
}

const mapDispatchToProps = {
    //getAddMedicineActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(AddMedicineComponent)