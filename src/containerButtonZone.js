import {initialise, setCards} from "./actions";
import { connect } from 'react-redux'
import ButtonZone from './ButtonZone.js'


const mapDispatchToProps= dispatch =>({
        onResetClick: () => dispatch(initialise()),
        onGiveCardsClick: () => dispatch(setCards()),
})

const ContainerButtonZone=connect(null, mapDispatchToProps)(ButtonZone)

export default ContainerButtonZone