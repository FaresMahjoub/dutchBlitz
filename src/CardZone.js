import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



class CardContainer extends React.Component {
    render() {
        return <div color={this.props.color}> {this.props.sex}{this.props.numb} </div>

    }
}
const cardZoneStyle={
    display: "flex",
    flexWrap: "row",
    justifyContent: "space-evenly",
}
function CardZone(props){
    let a=[]
    for (let i=0; i<props.pileNumb;i++){
        a.push(0)
    }
    const cards=
        <div >{a.map(elt => <CardContainer color="blue" sex="F" numb="9" />)}
        </div>
    return cards
}

export {CardZone}