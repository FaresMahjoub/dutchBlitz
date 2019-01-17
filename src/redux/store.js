import { createStore } from 'redux'
import blitzReducer from './cards/reducersCards'
import initialState from './cards/reducersCards.js'
import {
    initialise,
    move3Cards,
    setCards,
} from './cards/actionsCards'

const store = createStore(blitzReducer)

export default store








