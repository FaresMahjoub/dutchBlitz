
export const MOVE= "card_move"
export const MOVE_3_CARDS= "move_3_cards"
export const PLAY_PAUSE= "playPause"
export const SET_CARDS= "setCards"
export const INITIALIZE="initialise"
export const CLICK="click"

export function cardMove(click1, click2){
    if ((click2.color === click1.color && click2.numb === click1.numb-1)
        || (click1.numb===1 && click2.numb==0)
        || (click2.sex  !== click1.sex && click2.numb===click1.numb-1)
        || (click1.pos===click2.pos && click1.pos==='rem')){
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