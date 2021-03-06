import React from 'react'
import { Row } from 'react-bootstrap'

interface ICardDeckProps{
    elementsPerRow:number
}

export class CardDeck extends React.Component<ICardDeckProps,any>{
    render(){
        let displayArray = []
        let children = React.Children.toArray(this.props.children)
        let length = children.length
        for(let i = 0; i < length; i+=this.props.elementsPerRow){
            displayArray.push(<Row key={'cards' + i} children={
                children.splice(0,this.props.elementsPerRow)
            }/>)
        }
        
        return (
            <div>
                {displayArray}
            </div>
        )
    }
}