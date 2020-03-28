import React from 'react'
//import { UserInfoComponent } from '../../user-info/UserInfoComponent';
import { Redirect } from 'react-router';
//import { Doctor } from '../../models/doctor';
import { CardDeck } from '../card-deck-component/CardDeckComponent';
import { AllMedicine } from '../../models/AllMedicine';

interface IViewAllMedicineProps {
    //doctor:Doctor
    allMedicine:AllMedicine[]
    errorMessage:string
    getAllMedicineActionMapper: ()=>void
}


export class ViewAllMedicineComponent extends React.Component<IViewAllMedicineProps,any>{

    // runs when component starts to exist
    componentDidMount(){
        // // check to see if we already have Medicine (redux store)
        // if(this.props.allMedicine.length !== 0){
        //     //return
        //     //make sure they are admin
        // }else if(this.props.doctor){
        //     console.log('call get AllMedicine mapper?');
            
        //     this.props.getAllMedicineActionMapper()
        // }else {
        //     //they weren't admin so do nothing
        //     //return
        // }
    }
    print = ()=>{
        console.log("print");
        console.log(this.state);
    }
    
    render(){
        //turn array of Medicine into display components
        // let userDisplay = this.props.allMedicine.map((ele)=>{
        //     return /**replace this*/<UserInfoComponent user={ele} key={ele.userId}/>
        // })
        // console.log(this.props.doctor)
        return(
            // // check for role or redirect
            // (this.props.allMedicine)?
            // <CardDeck elementsPerRow={4}>
            //     {userDisplay}
            // </CardDeck>
            // :
            // <Redirect to='/'/>
            <div></div>
        )
    }
}