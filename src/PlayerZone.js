import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardZone} from './CardZone';

function PlayerName(props){
    return <div>{props.name}</div>
}

const playerZoneStyle={
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "1fr 3fr",
}

class PlayerZone extends React.Component{
    render(){
        return (
            <div style={playerZoneStyle}>
                <PlayerName
                    name={this.props.name}
                    style={{
                        gridColumn: "1 / 2",
                        gridRow: "1 / 2",
                    }}
                />
                {this.props.bot &&
                <button type="button"
                    //onClick={}
                        style={{
                            gridColumn:"2 / 3",
                            gridRow:"1 / 2",
                        }}
                > Change Opponent </button>
                }
                <CardZone
                    pileNumb={4}
                    style={{
                        gridColumn: "1 / 3",
                        gridRow: "2 / 3",
                    }}/>
            </div>  )

    }
}
export {PlayerZone}