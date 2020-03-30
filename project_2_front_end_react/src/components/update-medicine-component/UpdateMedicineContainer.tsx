import { IState } from "../../reducers";
import { connect } from "react-redux";
import {UpdateMedicineComponent } from "./UpdateMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { updateMedicine } from "../../remote/medicine-time/update-medicine-remote";


const mapStateToProps = (state:IState) => {
    return {
        profile: state.login.profile,//state.profile.user check for is doctor? ???

        allMedicine:[],
        errorMessage:state.medicine.errorMessage,
    }
}

const mapDispatchToProps = {
    updateMedicine
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMedicineComponent)