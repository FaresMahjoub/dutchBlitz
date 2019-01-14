import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class CardContainer extends React.Component {
    render() {
        return <div color={this.props.color}> {this.props.sex}{this.props.numb} </div>

    }
}

function PlayerName(props){
    return <div>{props.name}</div>
}

const cardZoneStyle={
    display: "flex",
    flexWrap: "row",
    justifyContent: "space-evenly",
}
function CardZone(props){
  const a=Array.fill(0,0,this.props.pileNumb)
    return (
            <CardContainer color="blue" sex="F" numb="9" />
        )
}
const playerZoneStyle={
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridTemplateRows: "1fr 3fr",
}
class PlayerZone extends React.Component{
    render(){
        return (
        <div style={playerZoneStyle}>
            <PlayerName
                name={this.props.name}
                style={{
                    gridColumn: "1 / 2",
                    gridRow: "1 / 2",
                }}
            />
                 {this.props.bot &&
                     <button type="button"
                             //onClick={}
                             style={{
                             gridColumn:"2 / 3",
                             gridRow:"1 / 2",
                             }}
                     > Change Opponent </button>
                 }
            <CardZone
                pileNumb={4}
                style={{
                    gridColumn: "1 / span 2",
                    gridRow: "2 / 3",
            }}/>
        </div>  )

    }
}

function ButtonZone(props){
            const buttonZoneStyle={
                display:"flex",
                flexWrap:"column",
            }
            return(
                <div style={buttonZoneStyle}>
                    <button type="Button" /*onClick={}*/>Reset</button>
                    <button type="Button" /*onClick={}*/>Reset</button>
                    <button type="Button" /*onClick={}*/>Reset</button>
                </div>
            )

}
const appStyle={
    display: "grid",
    gridRow: "1fr 3fr 1fr",
    gridColumn:"1fr 3fr 3fr",
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
                    <CardZone pileNumb={12}
                              style={{
                                  gridColumn: "2 / span 2",
                                  gricRow: "2 / 3" ,
                }}
                />

                </div>   )
            }
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
