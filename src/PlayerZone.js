import React from 'react';
import './index.css';
import CardZone from './CardZone';
import NameZone from "./NameZone";
import PropTypes from 'prop-types';


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
}) {
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

export default PlayerZone