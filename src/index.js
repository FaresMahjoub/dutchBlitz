import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import ButtonZone from './ButtonZone.js';
import PlayerZone from './PlayerZone.js';
import BoardZone from './BoardZone.js'
import { Provider } from 'react-redux'
import App2 from './App2.js'
import store from "./store";

// README README README README README README README README README README README README README README README README
// I would've made 2 different components for the 'CardZone' (one for the PlayerZone and another for the common cards)
// I would've called the part in the middle of CommonZone
// I would've called the card container rather 'Pile' (PileContainer...), because it seems that there is only 1 card.
// README README README README README README README README README README README README README README README README

const appStyle={
    display: "grid",
    gridTemplateRows: "1fr 2fr 1fr",
    gridTemplateColumns:"1fr 3fr 3fr",
};
const midCards= Array(16).fill({color: 'blue', sex:'F', numb:0,})
const playerCards =  Array(5).fill({color: 'blue', sex:'F', numb:0,})
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
                    <PlayerZone
                         name="Thomas"
                         upperPlayerCards={playerCards}
                         bot={true}
                         gridStyle={{
                             gridColumn:" 2 / 3",
                             gridRow:" 1 / 2",
                         }}
                    />
                    <PlayerZone
                         name="Guillaume"
                         upperPlayerCards={playerCards}
                         bot={true}
                         gridStyle={{
                              gridColumn:" 3 / 4",
                              gridRow:" 1 / 2",
                         }}
                    />
                    <BoardZone
                        pileNumb={16}
                        pub={true}
                        upperCards={midCards}
                        gridStyle={{
                            gridColumn: "2 / 4",
                            gricRow: "2 / 3" ,
                            alignSelf: "center",
                        }}
                    />
                    <PlayerZone
                        name="My Name"
                        upperPlayerCards={playerCards}
                        bot={false}
                        gridStyle={{
                            gridColumn:" 2 / 3",
                            gridRow:" 3 / 4",
                        }}
                    />
                    <PlayerZone
                        name="JB"
                        upperPlayerCards={playerCards}
                        bot={true}
                        gridStyle={{
                            gridColumn:" 3 / 4",
                            gridRow:" 3 / 4",
                        }}
                    />
                </div>   )
            }
}

ReactDOM.render(
    <Provider store={store}>
     <App2 />,
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
