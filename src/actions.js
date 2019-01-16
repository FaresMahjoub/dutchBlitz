
export const MOVE= "card_move"
export const MOVE_3_CARDS= "move_3_cards"
export const PLAY_PAUSE= "playPause"
export const SET_CARDS= "setCards"
export const INITIALIZE="initialise"
export const CLICK="click"

export function cardMove(click1, click2){
    if ((click2.props.color === click1.props.color && click2.props.numb === click1.props.numb-1)
        || (click1.props.numb===1 && click2.props.numb==0)
        || (click2.props.sex  !== click1.props.sex && click2.props.numb===click1.props.numb-1)){
           return {type: MOVE, click1, click2}
    } else{
        return {}
    }
}
export function cardClick(click1){
    return({type: CLICK, click1})
}

export function initialise(){
    return ({type: INITIALIZE})
}

export function move3Cards(){
    return ({type: MOVE_3_CARDS})
}

export function setCards(){
    return ({type: SET_CARDS})
}

export function playPause(){
    return ({type: PLAY_PAUSE})
}