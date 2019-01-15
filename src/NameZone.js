import React from "react";
import PropTypes from 'prop-types';


export function NameZone({
    name,
    bot,
}) {
    return (<div style={{display: "flex"}}>
            <p> {name} </p>
            {bot && <button type="button"
                /*onClick={}*/ > Change Opponent </button>
            }
        </div>

    )
}

NameZone.propTypes={
    name: PropTypes.string.isRequired,
    bot: PropTypes.bool.isRequired,
}