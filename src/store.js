import { createStore } from 'redux'
import blitzReducer from './reducers'
import initialState from './reducers.js'
import {
    initialise,
    move3Cards,
    setCards,
} from './actions'

const store = createStore(blitzReducer)

export default store








