import { IState } from "../../reducers";
import { connect } from "react-redux";
import { NavbarComponent } from "./NavbarComponent";

const mapStateToProps = (state:IState) => {
  return { 
    profile:state.login.profile,
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps,mapDispatchToProps)(NavbarComponent)