import React from "react";
import PropTypes from 'prop-types';


// todo change for export default
export function NameZone({
    name,
    bot,
}) {
    // todo correct indentation
    // no need to use flex here, right?
    return (<div style={{display: "flex"}}>
            <p> {name} </p>
            {bot && <button type="button"
                /*onClick={}*/ > Change Opponent </button>
            }
        </div>

    )
}

// todo correct spacing
NameZone.propTypes={
    name: PropTypes.string.isRequired,
    bot: PropTypes.bool.isRequired,
};