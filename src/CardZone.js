import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';



class CardContainer extends React.Component {
    render() {
        return (
            <div style={{margin: `20px ${20 + 40 * Math.random()}px`}}>
                <button color={this.props.color} disabled={!this.props.pubPile} > {this.props.sex}{this.props.numb} </button>

                {/*{this.props.pubPile ?*/}
                    {/*<button color={this.props.color} > {this.props.sex}{this.props.numb} </button> :*/}
                    {/*<p color={this.props.color} > {this.props.sex}{this.props.numb} </p>*/}
                {/*}*/}
            </div>
        )
    }
}
const cardZoneStyle={
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
}
function CardZone({
    pileNumb,
    gridStyle,
    pub,
}){
    let a=[]
    for (let i=0; i<pileNumb;i++){
        a.push(0)
    }
    const cards=
        <div style={gridStyle}>
            <div style={cardZoneStyle} >
                {a.map(elt => <CardContainer pubPile={pub} color="blue" sex="F" numb="9" />)}
            </div>
        </div>
    return cards
}

export {CardZone}