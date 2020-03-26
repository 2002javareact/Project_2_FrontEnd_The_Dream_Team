import { IState } from "../../reducers";
import { connect } from "react-redux";
import { NavbarComponent } from "./NavbarComponent";
import { mTLogoutActionMapper } from '../../action-mappers/login-action-mapper'

const mapStateToProps = (state:IState) => {
  return { 
    profile:state.login.profile,
  }
}

const mapDispatchToProps = {
  mTLogoutActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)