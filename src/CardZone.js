import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CardContainer from './CardContainer.js';
import PropTypes from 'prop-types';


const cardZoneStyle={
    display: "flex",
    flexWrap: "wrap",

}

function CardZone({
    pileNumb,
    gridStyle,
    pub,
    upperCards,
}){
    const cards=
        <div style={gridStyle}>
            <div style={cardZoneStyle} >
                <CardContainer pubPile={pub} color={upperCards[0].color} sex={upperCards[0].sex} numb={upperCards[0].numb} />)
                <CardContainer pubPile={pub} color={upperCards[1].color} sex={upperCards[1].sex} numb={upperCards[1].numb} />)
                <CardContainer pubPile={pub} color={upperCards[2].color} sex={upperCards[2].sex} numb={upperCards[2].numb} />)
                <CardContainer pubPile={pub} color={upperCards[3].color} sex={upperCards[3].sex} numb={upperCards[3].numb} />)
                <CardContainer pubPile={pub} color={upperCards[4].color} sex={upperCards[4].sex} numb={upperCards[4].numb} />)
            </div>
        </div>
    return cards
}

CardZone.propTypes={
        pileNumb: PropTypes.number.isRequired,
        gridStyle: PropTypes.object.isRequired,
        pub: PropTypes.bool.isRequired,
}
// todo change for export default
export default CardZone