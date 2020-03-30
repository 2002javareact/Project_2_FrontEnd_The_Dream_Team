import { IState } from "../../reducers";
import { PatientComponent } from "./PatientComponent";
import { connect } from "react-redux";


const mapStateToProps = (state:IState) => {
    return({
        profile:state.login.profile
    })
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps,mapDispatchToProps)(PatientComponent)