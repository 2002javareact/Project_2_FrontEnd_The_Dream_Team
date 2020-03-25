import React from 'react'
//import { UserInfoComponent } from '../../user-info/UserInfoComponent';
import { Redirect } from 'react-router';
import { Doctor } from '../../models/Doctor';
import { CardDeck } from '../card-deck-component/CardDeckComponent';
import { AllMedicine } from '../../models/AllMedicine';
import { AllMedicineInfoComponent } from '../all-medicine-info-component/AllMedicineInfoComponent';

interface IViewAllMedicineProps {
    doctor:Doctor
    allMedicine:AllMedicine[]
    errorMessage:string
    getAllMedicineActionMapper: ()=>void
}


export class ViewAllMedicineComponent extends React.Component<IViewAllMedicineProps,any>{

    componentDidMount(){
        if(this.props.allMedicine.length !== 0){

        }else if(this.props.doctor){
            console.log('call get AllMedicine mapper?');
            this.props.getAllMedicineActionMapper()
        }else {

        }
    }

    print = ()=>{
        console.log("print");
        console.log(this.state);
    }
    
    render(){
        let amDisplay = this.props.allMedicine.map((ele)=>{
            return <AllMedicineInfoComponent allMedicine={ele} key={ele.userId}/>
        })
        return(
            (this.props.doctor)?
            <CardDeck elementsPerRow={4}>
                {amDisplay}
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}