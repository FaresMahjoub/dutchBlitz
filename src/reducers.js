
import { combineReducers } from 'redux'
import {
    move,
    move3cards,
    playpause,
    setcards,
    initialize
} from './actions'


const initialState={
    cardsInMiddle: new Array(16).fill({color:'',pos: 'm', sex: '', numb:0, index:this.index}),
    playing: true,
    player1Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexiestStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),
    },
    player2Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexiestStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    },
    player3Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexiestStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    } ,
    player4Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexiestStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    }
}

function initialiseR(){
    return initialState
}
function moveR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state))
    switch (action.click1.pos){
        case 'b':
            switch (action.click2.pos){
                case 'm':
                    stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
                    stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
                    break;
                case 'ls':
                    stateObj.player3Data.leftSexiestStack.push(action.click1)
                    break;
                case 'ms':
                    stateObj.player3Data.middleSexiestStack.push(action.click1)
                    break;
                case 'rs':
                    stateObj.player3Data.rightSexiestStack.push(action.click1)
                    break;
                default:
                    stateObj.player3Data.blitzStack.pop()
            }
             break;
        case 'ls':
            stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.leftSexiestStack.pop()
            break;
        case 'ms':
            stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.middleSexiestStack.pop()
            break;
        case 'rs':
            stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.rightSexiestStack.pop()
            break;
        case 'rems':
            stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.remainingStack.pop()
        default:
            return stateObj
            }
}

function move3CardsR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state))
    let len=stateObj.player3Data.remainingStack
    let last=stateObj.player3Data.remainingStack[len-1]
    let prelast=stateObj.player3Data.remainingStack[len-2]
    for (let i=len-1;i>=0;i--){
        stateObj.player3Data.remainingStack[i]=stateObj.player3Data.remainingStack[i-2]
    }
    stateObj.player3Data.remainingStack[0]=prelast
    stateObj.player3Data.remainingStack[0]=last
    return stateObj
}

function setCardsR(state=initialState, action){
    let deck=[{color:'blue',pos: '', sex: 'M', numb:1},
              {color:'green',pos: '', sex: 'F', numb:1},
              {color:'yellow',pos: '', sex: 'F', numb:1},
              {color:'red',pos: '', sex: 'M', numb:1},
    ]
    for (let i=2;i<11;i++){
        deck.push({color:'blue', pos: '', sex: i%2===0 ? 'F':'M',numb: i});
        deck.push({color:'green',pos: '', sex: i%2===0 ? 'M':'F', numb: i});
        deck.push({color:'yellow',pos: '', sex: i%2===0 ? 'M':'F', numb:i});
        deck.push({color:'red',pos: '', sex: i%2===0 ? 'F':'M', numb:i});
    }
    const shuffle= a=>{
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    deck=shuffle(deck)
    let stateObj=JSON.parse(JSON.stringify(state))
    stateObj.player3Data.leftSexiestStack[0]=deck[deck.len()-1]
    deck.pop()
    stateObj.player3Data.middleSexiestStack[0]=deck[deck.len()-1]
    deck.pop()
    stateObj.player3Data.rightSexiestStack[0]=deck[deck.len()-1]
    deck.pop()
    for (let i=0;i<10;i++){
        stateObj.player3Data.blitzStack[i]=deck[deck.len()-1]
        deck.pop()
    }
    stateObj.player3Data.remainingStack=Object.assign({},deck)
}

export function blitzReducer(state=initialState, action) {
    switch (action.type) {
        case move:
            return moveR(state, action)
            break;
        case move3cards:
            return move3CardsR(state, action)
            break;
        case initialize:
            return initialiseR()
            break;
        case setcards:
            return setCardsR(state, action)
            break;
    }
}

