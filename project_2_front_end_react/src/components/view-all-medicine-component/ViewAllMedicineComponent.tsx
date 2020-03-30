import React from 'react'
import { Redirect } from 'react-router';
import { Doctor } from '../../models/Doctor';
import { CardDeck } from '../card-deck-component/CardDeckComponent';
import { AllMedicine } from '../../models/AllMedicine';
import { AllMedicineInfoComponent } from '../general-components/all-medicine-info-component/AllMedicineInfoComponent';
import { User } from '../../models/User';

interface IViewAllMedicineProps {
    currUser:User
    allMedicine:AllMedicine[]
    errorMessage:string
    getAllMedicineActionMapper: ()=>void
}


export class ViewAllMedicineComponent extends React.Component<IViewAllMedicineProps,any>{

    componentDidMount(){
        if(this.props.allMedicine.length !== 0){

        }else {
            
            console.log('call get AllMedicine mapper?');
            this.props.getAllMedicineActionMapper()
        }
    }
    setAllMedicine = () ={
        
    }
    print = ()=>{
        console.log("print");
        console.log(this.state);
    }
    
    render(){
        let amDisplay = this.props.allMedicine.map((ele)=>{
            return <AllMedicineInfoComponent allMedicine={ele} key={ele.medicineId}/>
        })
        return(
            /**(this.props.currUser)?*/
            <CardDeck elementsPerRow={4}>
                {amDisplay}
            </CardDeck>
            /**:
            <Redirect to='/'/>*/
        )
    }
}