import React from "react";
import PropTypes from 'prop-types';



function CardContainer({
    pubPile,
    color,
    sex,
    numb,
}) {
        return (
            // todo move this math operation to inside the method and put it in a variable
            <div style={{margin: `10px ${10 + 40 * Math.random()}px`}}>
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
