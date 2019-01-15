import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {CardZone} from './CardZone.js';


class BoardZone extends React.Component{
    render(){
        return  <CardZone pileNumb={10}/>
            }
}



