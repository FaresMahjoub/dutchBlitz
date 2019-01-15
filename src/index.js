import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {ButtonZone} from './ButtonZone.js';
import {PlayerZone} from './PlayerZone.js';
import {CardZone} from './CardZone.js';

const appStyle={
    display: "grid",
    gridTemplateRows: "1fr 2fr 1fr",
    gridTemplateColumns:"1fr 3fr 3fr",
};

// todo stateless component?
class App extends React.Component{
            render(){
                return   (
                <div style={appStyle}>
                    <ButtonZone
                        gridStyle={{
                            gridColumnStart: "1",
                            gridColumnEnd: "2",
                            gridRowStart: "2",
                            gridRowEnd: "4",
                            alignSelf: "stretch"
                        }}
                    />

                    {/* todo correct indentation here */}
                    <PlayerZone name="Thomas"
                                bot={true}
                                gridStyle={{
                                    gridColumn:" 2 / 3",
                                    gridRow:" 1 / 2",
                                }} />

                    {/* todo correct indentation here */}
                    <PlayerZone name="Guillaume"
                                bot={true}
                                gridStyle={{
                                    gridColumn:" 3 / 4",
                                    gridRow:" 1 / 2",
                                }} />

                    {/* todo correct indentation here */}
                    <CardZone pileNumb={20}
                              pub={true}
                              gridStyle={{
                                  gridColumn: "2 / 4",
                                  gricRow: "2 / 3" ,
                                  alignSelf: "center",
                              }}
                    />

                    {/* todo correct indentation here */}
                    <PlayerZone name="My Name"
                                bot={false}
                                gridStyle={{
                                    gridColumn:" 2 / 3",
                                    gridRow:" 3 / 4",
                                }} />

                    {/* todo correct indentation here */}
                    <PlayerZone name="JB"
                                bot={true}
                                gridStyle={{
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
