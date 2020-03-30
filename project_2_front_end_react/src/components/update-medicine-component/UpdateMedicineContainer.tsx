import { IState } from "../../reducers";
import { connect } from "react-redux";
import {UpdateMedicineComponent } from "./UpdateMedicineComponent";
import { Doctor } from "../../models/Doctor";
import { updateMedicine } from "../../remote/medicine-time/update-medicine-remote";


const mapStateToProps = (state:IState) => {
    return {
<<<<<<< HEAD
        profile: state.login.profile,//state.profile.user check for is doctor? ???
=======
        doctor: new Doctor([],0,'','',new Date(0),0,'','',''),//state.profile.user check for is doctor? ???
>>>>>>> refs/remotes/origin/master
        allMedicine:[],
        errorMessage:'',
    }
}

const mapDispatchToProps = {
    updateMedicine
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateMedicineComponent)