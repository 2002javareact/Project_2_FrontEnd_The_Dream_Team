import { IState } from "../../reducers";
import { connect } from "react-redux";
import {ViewAllMedicineComponent } from "./ViewAllMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { getAllMedicineActionMapper } from "../../action-mappers/all-medicine-mapper";


const mapStateToProps = (state:IState) => {
    return {
        profile: state.login.profile,//state.profile.user check for is doctor? ???
        allMedicine:[],
        errorMessage:'',
    }
}

const mapDispatchToProps = {
    getAllMedicineActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllMedicineComponent)