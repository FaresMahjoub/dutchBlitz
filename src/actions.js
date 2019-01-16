
export const move= "card_move"
export const move3cards= "move_3_cards"
export const playPause= "PlayPause"
export const setcards= "setCards"
export const initialize="initialize"


export function CardMove(click1, click2){
    if ((click2.props.color === click1.props.color && click2.props.numb === click1.props.numb-1)
        || (click1.props.numb===1 && click2.props.numb==0)
        || (click2.props.sex  !== click1.props.sex && click2.props.numb===click1.props.numb-1)){
           return {type: move, click1, click2}
    } else{
        return {}
    }
}

export function Initialise(){
    return {type: initialize}
}

export function Move3Cards(){
    return {type: move3cards}
}

export function SetCards(){
    return {type: setcards}
}

export function PlayPause(){
    return {type: playPause}
}