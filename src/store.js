import { createStore } from 'redux'
import blitzReducer from './reducers'
import {
    Initialise,
    Move3Cards,
    SetCards,
} from './actions'

const store = createStore(blitzReducer)

const mapStatetoPtops=state =>{
    let playerCards=[
        state.player3Data.remainingStack["length"],
        state.player3Data.leftSexiestStack["length"],
        state.player3Data.middleSexistStack["length"],
        state.player3Data.rightSexistStack["length"],
        state.player3Data.blitzStack["length"],
    ]
    return{
        upperCards: state.cardsInMiddle,
        upperPlayerCards: playerCards,
    }
}

//const movingProcess=()


const mapDispatchToProps= dispatch =>{
    return{
        onResetClick: dispatch(Initialise()),
        onGiveCardsClick: dispatch(SetCards()),
    }
}



