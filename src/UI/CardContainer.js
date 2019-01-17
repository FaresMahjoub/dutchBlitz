import React from "react";
import PropTypes from 'prop-types';
import {cardClick} from '../redux/cards/actionsCards'
import {connect} from "react-redux";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import MaleIcon from './icons/maleIcon'
import FemaleIcon from './icons/femaleIcon'

const styles = {
    buttonBlue: {
        backgroundColor: 'blue',
    },
    buttonRed: {
        backgroundColor: 'red'
    },
    buttonGreen:{
        backgroundColor: 'green'
    },
    buttonYellow:{
        backgroundColor: 'yellow'
    },
    textBlack:{
        color:'black'
    },
    textWhite:{
        color:'white'
    }
};


function CardContainer({
    pubPile,
    color,
    sex,
    numb,
    pos,
    whenClicked,
    index,
    playerNumber,
    classes,

}) {
       const verticalMargin=10 + 40 * Math.random();
        return (
            <div style={{margin: `10px 10px`,width: "calc(100%*(1/10))"}}>
                {color==='blue' ?
                    <Button variant="contained"
                            className={classes.buttonBlue}
                            classes={{disabled: classes.buttonBlue}}gi
                            //style={{backgroundColor:'blue'}}
                            onClick={whenClicked}
                            disabled={!pubPile}
                    > <h2 className={classes.textWhite}/*style={{color:'white'}}*/> <MaleIcon/> {numb}</h2> </Button> :
                     color==='red' ?
                         <Button variant="contained"
                                 className={classes.buttonRed}
                                 classes={{disabled: classes.buttonRed}}
                             //style={{backgroundColor:'red',}}
                                 onClick={whenClicked}
                                 disabled={!pubPile}
                         >  <h2 className={classes.textWhite}/*style={{color:'white'}}*/> <MaleIcon/> {numb}</h2> </Button> :
                         color==='yellow' ?
                            <Button /*style={{backgroundColor:'yellow',}}*/
                                    className={classes.buttonYellow}
                                    classes={{disabled: classes.buttonYellow}}
                                    variant="contained"
                                    onClick={whenClicked}
                                    disabled={!pubPile}
                            >  <h2 className={classes.textBlack}/*style={{color:'black'}}*/> <FemaleIcon/> {numb}</h2> </Button> :
                             color === 'green' ?
                                 <Button //style={{backgroundColor:'green',}}
                                         variant="contained"
                                         className={classes.buttonGreen}
                                         classes={{disabled: classes.buttonGreen}}
                                         onClick={whenClicked}
                                         disabled={!pubPile} >  <h2 className={classes.textWhite}/*style={{color:'white'}}*/> <FemaleIcon/> {numb}</h2> </Button> :
                                 <Button variant="contained" onClick={whenClicked} disabled={!pubPile} >  {numb} </Button>
                }
            </div>
        )
}

CardContainer = withStyles(styles)(CardContainer)


const mapDispatchToProps = (dispatch, ownProps) => ({
        whenClicked: () => dispatch(cardClick({color: ownProps.color ,pos: ownProps.pos, sex: ownProps.sex, numb:ownProps.numb, index:ownProps.index, playerNumber: ownProps.playerNumber,}))
})

CardContainer = connect(null, mapDispatchToProps)(CardContainer)
export default CardContainer

CardContainer.propTypes={
    color: PropTypes.oneOf(['green','yellow','red','blue']).isRequired,
    pubPile: PropTypes.bool.isRequired,
    sex: PropTypes.oneOf(['F','M']).isRequired,
    numb: PropTypes.number.isRequired,

}
