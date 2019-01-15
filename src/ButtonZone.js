import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function ButtonZone({
   gridStyle,
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
                <button type="Button" /*onClick={}*/>Reset</button>
                <button type="Button" /*onClick={}*/>Give cards</button>
                <button type="Button" /*onClick={}*/>Play/Pause</button>
            </div>
        </div>

    )

}

export {ButtonZone}
