
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
    playing: true,  // todo shouldn't it start with false? with true it's going to start playing immediately
    player1Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexiestStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
		// todo discuss this  --  perhaps it would be cleaner if the logic had an extra pile, to keep the cards in the hand, which are transfered to this one when you 'move3cards'
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

// todo what is this useful for? couldn't you just get the object directly?
function initialiseR(){
    return initialState
} // todo pay attention to spacing, there should be a blank line here
function moveR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state))
    switch (action.click1.pos){
        case 'b':
            switch (action.click2.pos){
                case 'm':
                	// todo add a comment to explain this line (it avoids the reader of re-thinking of the index logic just to understand this)
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
			// todo add a comment to explain this line (it avoids the reader of re-thinking of the index logic just to understand this)
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.leftSexiestStack.pop()
            break;
        case 'ms':
			// todo add a comment to explain this line (it avoids the reader of re-thinking of the index logic just to understand this)
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.middleSexiestStack.pop()
            break;
        case 'rs':
			// todo add a comment to explain this line (it avoids the reader of re-thinking of the index logic just to understand this)
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.rightSexiestStack.pop()
            break;
        case 'rems':
			// todo add a comment to explain this line (it avoids the reader of re-thinking of the index logic just to understand this)
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.remainingStack.pop()
        default:
            return stateObj
            }
}

function move3CardsR(state=initialState, action){
    // todo discuss this  --  aren't you moving only 2 cards here?
    let stateObj=JSON.parse(JSON.stringify(state))
    let len=stateObj.player3Data.remainingStack
    let last=stateObj.player3Data.remainingStack[len-1]
    let prelast=stateObj.player3Data.remainingStack[len-2]
    for (let i=len-1;i>=0;i--){
        stateObj.player3Data.remainingStack[i]=stateObj.player3Data.remainingStack[i-2]
    }
    // todo discuss this  --  aren't you replacing the same position 2 times, shouldn't it be 0 and 1?
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

    // todo use more meaningful names
    const shuffle= a=>{
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));  // todo find a better function, there are many available which would be easier to understand
            // todo add comment
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
    deck=shuffle(deck)
    let stateObj=JSON.parse(JSON.stringify(state))

    // todo discuss -- couldn't you just slice the deck?
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

