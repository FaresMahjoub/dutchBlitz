import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


function ButtonZone(props){
    const buttonZoneStyle={
        display:"flex",
        flexWrap:"column",
    }
    return(
        <div style={buttonZoneStyle}>
            <button type="Button" /*onClick={}*/>Reset</button>
            <button type="Button" /*onClick={}*/>Give cards</button>
            <button type="Button" /*onClick={}*/>Play/Pause</button>
        </div>
    )

}

export {ButtonZone}
