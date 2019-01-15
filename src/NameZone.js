import React from "react";
import PropTypes from 'prop-types';


export function NameZone({
    name,
    bot,
}) {
    return (<div style={{display: "flex"}}>
        {bot ? <p>{name}</p>: <textarea> My Name </textarea>}
            {bot && <button type="button"
                /*onClick={}*/ > Change Opponent </button>
            }
        </div>

    )
}

NameZone.propTypes={
    name: PropTypes.string,
    bot: PropTypes.bool.isRequired,
}