import {IState} from '../../reducers';
import {connect} from 'react-redux';
import {mTGetMedicationByIdActionMapper} from '../../action-mappers/medication-action-mapper';
import {MedicationByIdComponent} from './MedicationByIdComponent';


const mapStateToProps = (state:IState) => {

    return{
        medicationByIdArr: state.medicationByIdArr.medicationByIdArr,
        errorMessage: state.medicationByIdArr.errorMessage,
        profile:state.login.profile
    }
}


const mapDispatchToProps = {
    mTGetMedicationByIdActionMapper
}


export default connect(mapStateToProps, mapDispatchToProps)(MedicationByIdComponent)


