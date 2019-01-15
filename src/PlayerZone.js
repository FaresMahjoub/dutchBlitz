import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardZone} from './CardZone';

function NameZone({
  name,
  bot,
}){
    return (<div style={{display: "flex"}}>
                <p> {name} </p>
                {bot &&  <button type="button"
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
            <div style={this.props.gridStyle}>
                <div style={playerZoneStyle}>
                    <NameZone name={this.props.name}
                              bot={this.props.bot}
                              style={{
                                  gridRow: "1 / 2",
                                  gridColumn: "1 / 2",
                              }}
                              />
                    <CardZone
                        pub={!this.props.bot}
                        pileNumb={5}
                        gridStyle={{
                            gridColumn: "1 / 2",
                            gridRow: "2 / 3",
                        }}/>
                </div>
            </div>)

    }
}
export {PlayerZone}