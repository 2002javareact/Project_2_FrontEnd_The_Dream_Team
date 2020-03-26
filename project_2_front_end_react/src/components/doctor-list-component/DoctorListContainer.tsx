import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DoctorListComponent } from "./DoctorListComponent";
import { mTDoctorListActionMapper } from '../../action-mappers/doctor-list-action.mapper'

const mapStateToProps = (state:IState) => {
  return { 
    doctorList:state.doctorList.doctorList,
    errorMessage:state.doctorList.errorMessage
  }
}

const mapDispatchToProps = {
  mTDoctorListActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(DoctorListComponent)