import React from "react";
import PropTypes from 'prop-types';
import {cardClick} from './actions'
import {connect} from "react-redux";



function CardContainer({
    pubPile,
    color,
    sex,
    numb,
    pos,
    whenClicked,
    index,
}) {
       const verticalMargin=10 + 40 * Math.random()
        return (
            <div style={{margin: `10px ${verticalMargin}px`}}>
                <button   onClick={whenClicked} disabled={!pubPile} > {color} {sex} {numb} </button>
            </div>
        )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
        whenClicked: () => dispatch(cardClick({color: ownProps.color ,pos: ownProps.pos, sex: ownProps.sex, numb:ownProps.numb, index:ownProps.index}))
})

CardContainer = connect(null, mapDispatchToProps)(CardContainer)
export default CardContainer

CardContainer.propTypes={
    color: PropTypes.oneOf(['green','yellow','red','blue']).isRequired,
    pubPile: PropTypes.bool.isRequired,
    sex: PropTypes.oneOf(['F','M']).isRequired,
    numb: PropTypes.number.isRequired,

}
