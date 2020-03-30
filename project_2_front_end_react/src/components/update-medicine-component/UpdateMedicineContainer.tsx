import { IState } from "../../reducers";
import { connect } from "react-redux";
import {UpdateMedicineComponent } from "./UpdateMedicineComponent";
import { Doctor } from "../../models/Doctor";
import {updateMedicineMapper} from "../../action-mappers/update-medicine-mapper"


const mapStateToProps = (state:IState) => {
    return {
        profile: state.login.profile,//state.profile.user check for is doctor? ???
        medicine:state.medicine.medicine,
        errorMessage:state.medicine.errorMessage,
    }
}

const mapDispatchToProps = {
    updateMedicineMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMedicineComponent)