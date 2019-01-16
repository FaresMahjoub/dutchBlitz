import React from "react";
import PropTypes from 'prop-types';



function CardContainer({
    pubPile,
    color,
    sex,
    numb,
}) {
       const verticalMargin=10 + 40 * Math.random()
        return (
            <div style={{margin: `10px ${verticalMargin}px`}}>
                <button  /* onClick= onMoveClick*/ disabled={!pubPile} > {color} {sex} {numb} </button>
            </div>
        )
}


export default CardContainer

CardContainer.propTypes={
    color: PropTypes.oneOf(['green','yellow','red','blue']).isRequired,
    pubPile: PropTypes.bool.isRequired,
    sex: PropTypes.oneOf(['F','M']).isRequired,
    numb: PropTypes.number.isRequired,

}
