import { connect } from 'react-redux'
import BoardZone from './BoardZone.js'

const mapStateToProps=state =>({
        upperCards: state.cardsInMiddle
})

const ContainerBoardZone=connect(mapStateToProps, null)(BoardZone)

export default ContainerBoardZone