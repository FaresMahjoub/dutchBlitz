import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardZone} from './CardZone';

function PlayerName(props){
    return <div>{props.name}</div>
}

function NameZone(props){
    return (<div style={{display: "flex"}}>
                <p> {props.name} </p>
                {props.bot &&  <button type="button"
                                    /*onClick={}*/ > Change Opponent </button>
    }
        </div>

    )
}
const playerZoneStyle={
    display: "grid",
    gridTemplateRown: "1fr 3fr",
    gridTemplateColumns: "1fr",
}
class PlayerZone extends React.Component{
    render(){
        return (
            <div style={playerZoneStyle}>
                <NameZone name={this.props.name}
                          bot={this.props.bot}
                          style={{
                              gridRow: "1 / 2",
                              gridColumn: "1 / 2",
                          }}
                          />
                <CardZone
                    pileNumb={4}
                    style={{
                        gridColumn: "1 / 2",
                        gridRow: "2 / 3",
                    }}/>
            </div>  )

    }
}
export {PlayerZone}