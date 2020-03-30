import { IState } from "../../reducers"
import { Dosage } from "../../models/Dosage"
import { connect } from "react-redux";
import { SubmiteDosageComponent } from "./saveNewDosage-Component";
import {submiteDosageActionMapper} from "../../action-mappers/saveNewDosage-Action-Mapper"

const mapStateToProps = (state:IState) =>{
    return {
        SubmiteDosege:state.newDosage.SubmiteDosege,
        //currentUser:User
        errorMessage:state.newDosage.errorMessage,
        //currentUser: state.login.user,
    }
}
const mapDispatchToProps = {
    submiteDosageActionMapper
}
export default connect(mapStateToProps,mapDispatchToProps)(SubmiteDosageComponent)