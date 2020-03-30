import { IState } from "../../reducers"
import { connect } from "react-redux"
import { AddDoctorToPatientComponent } from "./AddDoctorToPatientComponent"

const mapStateToProps = (state:IState) => {
  return({
    profile:state
  })
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(AddDoctorToPatientComponent);