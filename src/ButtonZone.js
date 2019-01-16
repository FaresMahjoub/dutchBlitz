import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import PropTypes from 'prop-types';


function ButtonZone({
   gridStyle,
   onResetClick,
   onGiveCardsClick,
}){
    const buttonZoneStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent: "space-around",
        alignContent: "space-between",
    }
    return(
        <div style={gridStyle}>
            <div style={buttonZoneStyle}>
                {/* todo clean dead code */}
                <button type="Button" onClick={onResetClick}>Reset</button>
                <button type="Button" onClick={onGiveCardsClick}>Give cards</button>
                <button type="Button" /*onClick={}*/>Play/Pause</button>
            </div>
        </div>

    )

}

ButtonZone.porpTypes={
    gridStyle: PropTypes.object.isRequired,
}

// todo change for export default
export default ButtonZone
