import { IState } from "../../reducers";
import { connect } from "react-redux";
import { mTLoginActionMapper,mTLogoutActionMapper, mTErrorActionMapper } from '../../action-mappers/login-action-mapper';
import { LoginComponent } from "./LoginComponent";

const mapStateToProps = (state:IState) => {
  return { 
    profile:state.login.profile,
    errorMessage:state.login.errorMessage
  }
}

const mapDispatchToProps = {
  mTLoginActionMapper,
  mTLogoutActionMapper,
  mTErrorActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent)