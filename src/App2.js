import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from './redux/store'
import ButtonZone from './UI/ButtonZone.js';
import BoardZone from './UI/BoardZone.js'
import PlayerZone from './UI/PlayerZone.js';

const appStyle={
  display: "grid",
  gridTemplateRows: "1fr 2fr 1fr",
  gridTemplateColumns:"1fr 3fr 3fr",
};
const midCards= Array(16).fill({color: 'blue', sex:'F', numb:0,})
const playerCards =  Array(5).fill({color: 'blue', sex:'F', numb:0,})
class App2 extends React.Component{
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
              playerNumber={1}
              upperPlayerCards={playerCards}
              bot={false}
              gridStyle={{
                gridColumn:" 2 / 3",
                gridRow:" 1 / 2",
              }}
          />
          <PlayerZone
              name="Guillaume"
              playerNumber={2}
              upperPlayerCards={playerCards}
              bot={false}
              gridStyle={{
                gridColumn:" 3 / 4",
                gridRow:" 1 / 2",
              }}
          />
          <BoardZone
              pileNumb={16}
              pub={true}
              gridStyle={{
                gridColumn: "2 / 4",
                gricRow: "2 / 3" ,
                alignSelf: "center",
              }}
          />
          <PlayerZone
              name="My Name"
              bot={false}
              playerNumber={3}
              gridStyle={{
                gridColumn:" 2 / 3",
                gridRow:" 3 / 4",
              }}
          />
          <PlayerZone
              name="JB"
              playerNumber={4}
              upperPlayerCards={playerCards}
              bot={false}
              gridStyle={{
                gridColumn:" 3 / 4",
                gridRow:" 3 / 4",
              }}
          />
        </div>   )
  }
}

export default App2

ReactDOM.render(
    <Provider store={store}>
        <App2 />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
