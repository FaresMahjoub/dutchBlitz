import React from 'react';
import {CardZone} from './CardZone.js';
import CardContainer from "./CardContainer";
import {connect} from "react-redux";


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
                                    index={index}
                                    pos='m'
                                />
                            );
                    })}
                    </div>
            </div>
        return cards

}

const mapStateToProps = state => ({
    upperCards: state.cardsInMiddle
});

BoardZone = connect(mapStateToProps, null)(BoardZone);

export default BoardZone;