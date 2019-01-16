import React from 'react';
import './index.css';
import CardZone from './CardZone';
import NameZone from "./NameZone";
import PropTypes from 'prop-types';
import {connect} from 'react-redux'

const playerZoneStyle={
    display: "grid",
    gridTemplateRown: "1fr 3fr",
    gridTemplateColumns: "1fr",
};


function PlayerZone({
    gridStyle,
    name,
    bot,
    upperPlayerCards,
}) { console.log("in playerzone");
     console.log(upperPlayerCards);
        return (
            <div style={gridStyle}>
                <div style={playerZoneStyle}>
					{/* todo correct indentation here */}
					<NameZone name={name}
                              bot={bot}
                              style={{
                                  gridRow: "1 / 2",
                                  gridColumn: "1 / 2",
                              }}
                              />
                    <CardZone
                        pub={!bot}
                        pileNumb={5}
                        upperCards={upperPlayerCards}
                        gridStyle={{
                            gridColumn: "1 / 2",
                            gridRow: "2 / 3",
                        }}
                    />
                </div>
            </div>)


}

PlayerZone.propTypes={
     gridStyle: PropTypes.object.isRequired,
     name: PropTypes.string.isRequired,
     bot: PropTypes.bool.isRequired,

};
const setPlayerCards= (playercards) =>{
    let cards = [
        playercards.remainingStack[playercards.remainingStack.length-1],
        playercards.leftSexistStack[playercards.leftSexistStack.length-1],
        playercards.middleSexistStack[playercards.middleSexistStack.length-1],
        playercards.rightSexistStack[playercards.rightSexistStack.length-1],
        playercards.blitzStack[playercards.blitzStack.length-1],
    ]
    console.log("in cards");
    console.log(playercards.remainingStack);
    console.log(playercards.leftSexistStack);
    console.log(cards);
    return cards
}
const mapStateToProps = (state, ownProps) => {
    console.log("in mapstatetoprops playerzone");
    console.log(state);
    return ({
        upperPlayerCards: setPlayerCards(state.player3Data)
    })
}

PlayerZone = connect(mapStateToProps, null)(PlayerZone)

export default PlayerZone
