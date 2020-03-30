import { IState } from "../../reducers";
import { connect } from "react-redux";
import {UpdateMedicineComponent } from "./UpdateMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { updateMedicineMapper } from "../../action-mappers/update-medicine-mapper";

const mapStateToProps = (state:IState) => {
    return {
        profile: state.login.profile,//state.profile.user check for is doctor? ???
        updateMedicine:state.updateMedicine.updatedMedicine,
<<<<<<< HEAD
        errorMessage:state.updateMedicine.errorMessage,
=======
        errorMessage:state.medicine.errorMessage,
>>>>>>> 0cf623bc66bbe868d1e572eb33e890fe1b2c34aa
    }
}

const mapDispatchToProps = {
    updateMedicineMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMedicineComponent)