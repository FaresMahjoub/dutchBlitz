import React from 'react';
import './index.css';
import {CardZone} from './CardZone';
import {NameZone} from "./NameZone";
import PropTypes from 'prop-types';


const playerZoneStyle={
    display: "grid",
    gridTemplateRown: "1fr 3fr",
    gridTemplateColumns: "1fr",
};

// todo stateless component?
class PlayerZone extends React.Component{
    render(){
        // todo unpack this.props
        return (
            <div style={this.props.gridStyle}>
                <div style={playerZoneStyle}>
					{/* todo correct indentation here */}
					<NameZone name={this.props.name}
                              bot={this.props.bot}
                              style={{
                                  gridRow: "1 / 2",
                                  gridColumn: "1 / 2",
                              }}
                              />
                    <CardZone
                        pub={!this.props.bot}
                        pileNumb={5}
                        gridStyle={{
                            gridColumn: "1 / 2",
                            gridRow: "2 / 3",
                        }}/>
                </div>
            </div>)

    }
}

PlayerZone.propTypes={
     gridStyle: PropTypes.object.isRequired,
     name: PropTypes.string.isRequired,
     bot: PropTypes.bool.isRequired,

};

// todo change for export default
export {PlayerZone}