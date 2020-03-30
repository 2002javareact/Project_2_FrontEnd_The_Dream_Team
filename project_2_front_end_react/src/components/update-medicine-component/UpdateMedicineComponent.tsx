import React from 'react'
import { Redirect } from 'react-router';
import { CardDeck } from '../card-deck-component/CardDeckComponent';
import { AllMedicine } from '../../models/AllMedicine';
import { AllMedicineInfoComponent } from '../general-components/all-medicine-info-component/AllMedicineInfoComponent';
import { User } from '../../models/User';

interface IViewAllMedicineProps {
    currUser:User
    errorMessage:string
    updateMedicine: (e:any)=>void
}


export class ViewAllMedicineComponent extends React.Component<IViewAllMedicineProps,any>{

    constructor(props:any){
        super(props)
        this.state = { 
            name:'',
            number:0,
            description:'', 
            
        }
    }
     updateName=(e:any)=>{
        this.setState({name:e.currentTarget.value})

        }

     updateNum=(e:any)=>{
        this.setState({num:e.currentTarget.value})

        }

     updateDescription=(e:any)=>{
        this.setState({description:e.currentTarget.value})

        }

    setMedicine = () =>{

        let  updateMedi=  new AllMedicine(
            this.state.name,
            this.state.description,
            this.state.num
        )
        
        if(this.props.currUser && updateMedi /**is type of doctor? */){
            console.log('call getAll users mapper?');
            this.props.updateMedicine(updateMedi)
        }else {
        }
    }

    render(){
        
        return(
            //forms
            (this.props.currUser)?
            <CardDeck elementsPerRow={4}>
            </CardDeck>
            :
            <Redirect to='/'/>
        )
    }
}