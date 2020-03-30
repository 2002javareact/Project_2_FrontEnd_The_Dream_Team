import { IState } from "../../reducers";
import { connect } from "react-redux";
import {ViewAllMedicineComponent } from "./ViewAllMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { getAllMedicineActionMapper } from "../../action-mappers/all-medicine-mapper";
import { getOneMedicineMapper } from "../../action-mappers/get-one-medicine-mapper";


const mapStateToProps = (state:IState) => {
    return {
        profile: state.login.profile,//state.profile.user check for is doctor? ???
        allMedicine:state.medicine.allMedicine,
        errorMessage:state.medicine.errorMessage,
    }
}

const mapDispatchToProps = {
    getAllMedicineActionMapper,
    getOneMedicineMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllMedicineComponent)