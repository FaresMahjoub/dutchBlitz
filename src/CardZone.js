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
    let a=JSON.parse(JSON.stringify(upperCards))
    a[0].pos='rem'
    a[1].pos='ls'
    a[2].pos='ms'
    a[3].pos='rs'
    a[4].pos='b'
    return (
        <div style={gridStyle}>
            <div style={cardZoneStyle} >
                {a.map((card, i) => (
                    <CardContainer
                        key={`card-zone-card-container-${i}`}
                        pubPile={pub}
                        color={card.color}
                        sex={card.sex}
                        numb={card.numb}
                        pos={card.pos}
                    />
                ))}
                {/*<CardContainer pubPile={pub} color={upperCards[0].color} sex={upperCards[0].sex} numb={upperCards[0].numb} />*/}
                {/*<CardContainer pubPile={pub} color={upperCards[1].color} sex={upperCards[1].sex} numb={upperCards[1].numb} />*/}
                {/*<CardContainer pubPile={pub} color={upperCards[2].color} sex={upperCards[2].sex} numb={upperCards[2].numb} />*/}
                {/*<CardContainer pubPile={pub} color={upperCards[3].color} sex={upperCards[3].sex} numb={upperCards[3].numb} />*/}
                {/*<CardContainer pubPile={pub} color={upperCards[4].color} sex={upperCards[4].sex} numb={upperCards[4].numb} />*/}
            </div>
        </div>
    );
}

CardZone.propTypes={
        pileNumb: PropTypes.number.isRequired,
        gridStyle: PropTypes.object.isRequired,
        pub: PropTypes.bool.isRequired,
}
export default CardZone