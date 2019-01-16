import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardZone} from './CardZone.js';
import CardContainer from "./CardContainer";


const boardZoneStyle={
        display: "flex",
        flexWrap: "wrap",
}

function BoardZone ({
    gridStyle,
    pileNumb,
    upperCards,
    pub,

}){
        let a=Array(pileNumb).fill(0)
        const cards=
            <div style={gridStyle}>
                    <div style={boardZoneStyle} >
                            { a.map((elt,index)=>{
                            return (
                                <CardContainer
                                    key={`board-zone-card-container-${index}`}
                                    pubPile={pub}
                                    color={upperCards[index].color}
                                    sex={upperCards[index].sex}
                                    numb={upperCards[index].numb}
                                    pos='m'
                                />
                            );
                    })}
                    </div>
            </div>
        return cards

}

export default BoardZone



