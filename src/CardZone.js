import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardContainer} from './CardContainer.js';
import PropTypes from 'prop-types';


const cardZoneStyle={
    display: "flex",
    flexWrap: "wrap",

} // todo correct line spacing here
function CardZone({
    pileNumb,
    gridStyle,
    pub,
}){
    let a=[]
    // todo use Array(number).fill(0) - check this in the console (in chrome)
    for (let i=0; i<pileNumb;i++){
        a.push(0)
    }
    const cards=
        <div style={gridStyle}>
            <div style={cardZoneStyle} >
                {a.map(elt => <CardContainer pubPile={pub} color="blue" sex="F" numb={9} />)}
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
export {CardZone}