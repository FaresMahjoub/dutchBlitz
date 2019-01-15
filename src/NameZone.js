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
        {bot ? <p>{name}</p>: <textarea> My Name </textarea>}
            {bot && <button type="button"
                /*onClick={}*/ > Change Opponent </button>
            }
        </div>

    )
}

// todo correct spacing
NameZone.propTypes={
    name: PropTypes.string,
    bot: PropTypes.bool.isRequired,
};