import { IState } from "../../reducers"
import { connect } from "react-redux"
import { PatientListComponent } from "../patient-list-component/PatientListComponent"

const mapStateToProps = (state:IState) => {
  return({
    profile:state.login.profile
  })
}

const mapDispatchToProps = {}

export default connect(mapStateToProps,mapDispatchToProps)(PatientListComponent);