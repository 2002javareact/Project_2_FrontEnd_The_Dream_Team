import { connect } from "react-redux"
import { MainpageComponent } from "./MainpageComponent"
import { IState } from "../../reducers"

const mapStateToProps = (state:IState) => {
  return({
    profile:state.login.profile
  })
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(MainpageComponent)