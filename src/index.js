import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ButtonZone} from './ButtonZone.js';
import {PlayerZone} from './PlayerZone.js';
import {CardZone} from './CardZone.js';

const appStyle={
    display: "grid",
    gridRow: "200px 600px 200px",
    gridColumn:"100px 300px 300px",
}
class App extends React.Component{
            render(){
                return   (
                <div style={appStyle}>
                    <ButtonZone style={{
                        gridColumn: "1 / 2",
                        gridRow: "1 / span 3",
                    }}
                    />
                    <PlayerZone name="Thomas"
                                bot={true}
                                style={{
                                    gridColumn:" 2 / 3",
                                    gridRow:" 1 / 2",
                                }} />
                    <PlayerZone name="Guillaume"
                                bot={true}
                                style={{
                                    gridColumn:" 3 / 4",
                                    gridRow:" 1 / 2",
                                }} />
                    <CardZone pileNumb={20}
                              style={{
                                  gridColumn: "2 / span 2",
                                  gricRow: "2 / 3" ,
                              }}
                    />
                    <PlayerZone name="My Name"
                                bot={false}
                                style={{
                                    gridColumn:" 2 / 3",
                                    gridRow:" 3 / 4",
                                }} />
                    <PlayerZone name="JB"
                                bot={true}
                                style={{
                                    gridColumn:" 3 / 4",
                                    gridRow:" 3 / 4",
                                }} />


                </div>   )
            }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
