
// todo the notation for constants usually is CAPITALIZED_WITH_WORDS_SEPARATED_BY_UNDERSCORES
export const move= "card_move"
export const move3cards= "move_3_cards"
export const playPause= "PlayPause"
export const setcards= "setCards"
export const initialize="initialize"

// todo change name notation to camelCase
export function CardMove(click1, click2){
    if ((click2.props.color === click1.props.color && click2.props.numb === click1.props.numb-1)
        || (click1.props.numb===1 && click2.props.numb==0)
        || (click2.props.sex  !== click1.props.sex && click2.props.numb===click1.props.numb-1)){
           return {type: move, click1, click2}
    } else{
        return {}
    }
}

// todo change name notation to camelCase
export function Initialise(){
    return {type: initialize}
}

// todo change name notation to camelCase
export function Move3Cards(){
    return {type: move3cards}
}

// todo change name notation to camelCase
export function SetCards(){
    return {type: setcards}
}

// todo change name notation to camelCase
export function PlayPause(){
    return {type: playPause}
}