import { IState } from "../../reducers";
import { getAllUsersActionMapper } from '../../action-mappers/view-users-action-mappers'
import { connect } from "react-redux";
import { ViewAllUsersComponent } from "./ViewAllUsersComponent";


const mapStateToProps = (state:IState) => {
    return {
        user:state.login.user,
        allUsers:state.users.allUsers,
        errorMessage: state.users.errorMessage,
        currentUser: state.login.user
    }
}

const mapDispatchToProps = {
    getAllUsersActionMapper
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewAllUsersComponent)