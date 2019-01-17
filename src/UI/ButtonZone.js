import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {initialise, setCards} from "../redux/cards/actionsCards";


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

const mapDispatchToProps = dispatch => ({
    onResetClick: () => dispatch(initialise()),
    onGiveCardsClick: () => dispatch(setCards()),
});

ButtonZone = connect(null, mapDispatchToProps)(ButtonZone);

export default ButtonZone;