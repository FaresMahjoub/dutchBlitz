import React from "react";
import PropTypes from 'prop-types';



class CardContainer extends React.Component {
    render() {
        // todo unpack props
        return (
            // todo move this math operation to inside the method and put it in a variable
            <div style={{margin: `10px ${10 + 40 * Math.random()}px`}}>
                <button  disabled={!this.props.pubPile} > {this.props.color} {this.props.sex} {this.props.numb} </button>

                {/*{this.props.pubPile ?*/}
                {/*<button color={this.props.color} > {this.props.sex}{this.props.numb} </button> :*/}
                {/*<p color={this.props.color} > {this.props.sex}{this.props.numb} </p>*/}
                {/*}*/}
            </div>
        )
    }
}


export default CardContainer

CardContainer.propTypes={
    color: PropTypes.oneOf(['green','yellow','red','blue']).isRequired,
    pubPile: PropTypes.bool.isRequired,
    sex: PropTypes.oneOf(['F','M']).isRequired,
    numb: PropTypes.number.isRequired,

}
