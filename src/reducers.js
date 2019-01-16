
import {
    MOVE,
    MOVE_3_CARDS,
    playpause,
    SET_CARDS,
    INITIALIZE,
    CLICK,
} from './actions'

const cardsInMiddle = Array(16).fill({color:'',pos: 'm', sex: '', numb:0 });
for (let i=0;i<cardsInMiddle.length;i++){
    Object.assign(cardsInMiddle[i],{index: i,})
}
export const initialState={
    cardsInMiddle: cardsInMiddle,
    playing: false,
    player1Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
		// todo discuss this  --  perhaps it would be cleaner if the logic had an extra pile, to keep the cards in the hand, which are transfered to this one when you 'MOVE_3_CARDS'
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),
    },
    player2Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    },
    player3Data:{
        clicked:false,
        lastClicked:{color:'',pos: '', sex: '', numb:0, index:0},
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
		remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    } ,
    player4Data:{
        nbCardsInMiddle: 0,
        blitzStack: new Array(10).fill({color:'',pos: 'b', sex: '', numb:0}),
        leftSexistStack: new Array(1).fill({color:'',pos: 'ls', sex: '', numb:0}),
        middleSexistStack: new Array(1).fill({color:'',pos: 'ms', sex: '', numb:0}),
        rightSexistStack: new Array(1).fill({color:'',pos: 'rs', sex: '', numb:0}),
        remainingStack: new Array(27).fill({color:'',pos: 'rems', sex: '', numb:0}),    }
}

function initialiseR(){
    return initialState
}
/*function clickedR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state))
    if (stateObj.player3Data.clicked===false){
        stateObj.player3Data.clicked=true
        stateObj.player3Data.lastClicked=action.click1
    }
    else{
        let click1=stateObj.player3Data.clicked
        state
    }
}*/

function moveR(state=initialState, action){
    let stateObj=JSON.parse(JSON.stringify(state))
    switch (action.click1.pos){
        case 'b':
            switch (action.click2.pos){
                case 'm':
                	// the cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                    // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                    stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
                    stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'ls':
                    stateObj.player3Data.leftSexistStack.push(action.click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'ms':
                    stateObj.player3Data.middleSexistStack.push(action.click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'rs':
                    stateObj.player3Data.rightSexistStack.push(action.click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
            }
             break;
        case 'ls':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for tthe piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.leftSexistStack.pop()
            break;
        case 'ms':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.middleSexistStack.pop()
            break;
        case 'rs':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.rightSexistStack.pop()
            break;
        case 'rems':
            switch (action.click2.pos){
                case 'm':
                    // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                    // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                    stateObj.cardsInMiddle.splice(action.click2.index,1,{...action.click1, ...{index: action.click2.index}})
                    stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
                    stateObj.player3Data.remainingStack.pop()
                    break;
                case 'rems':
                    let len=stateObj.player3Data.remainingStack
                    let last=stateObj.player3Data.remainingStack[len-1]
                    let prelast=stateObj.player3Data.remainingStack[len-2]
                    let beforePrelast=stateObj.player3Data.remainingStack[len-3]
                    for (let i=len-1;i>=0;i--){
                        stateObj.player3Data.remainingStack[i]=stateObj.player3Data.remainingStack[i-3]
                    }
                    stateObj.player3Data.remainingStack[0]=beforePrelast
                    stateObj.player3Data.remainingStack[1]=prelast
                    stateObj.player3Data.remainingStack[2]=last
            }
    }
    return stateObj

}

const shuffle= deck=>{
    var newIndex, intermediateVariable, oldIndex;
    for (oldIndex = deck.length - 1; oldIndex > 0; oldIndex--) {
        newIndex = Math.floor(Math.random() * (oldIndex + 1));
        // shuffles the deck in a "insertion sort' way: the left side (from 0 to oldIndex) is shuffled and the new item is putted in a random place inside the suffled part
        intermediateVariable = deck[oldIndex];
        deck[oldIndex] = deck[newIndex];
        deck[newIndex] = intermediateVariable;
    }
    return deck;
}
function setCardsR(state=initialState, action){
    console.log("in setCardsR");
    console.log(state);
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


    deck=shuffle(deck)
    let stateObj=JSON.parse(JSON.stringify(state))

    // todo discuss -- couldn't you just slice the deck?
    stateObj.player3Data.leftSexistStack[0]=deck[deck.length-1]
    deck.pop()
    stateObj.player3Data.middleSexistStack[0]=deck[deck.length-1]
    deck.pop()
    stateObj.player3Data.rightSexistStack[0]=deck[deck.length-1]
    deck.pop()
    for (let i=0;i<10;i++){
        stateObj.player3Data.blitzStack[i]=deck[deck.length-1]
        deck.pop()
    }
    stateObj.player3Data.remainingStack=Object.assign([],deck)
    return stateObj
}

function blitzReducer(state=initialState, action) {
    switch (action.type) {
        case MOVE:
            return moveR(state, action)
            break;
        /*case MOVE_3_CARDS:
            return move3CardsR(state, action)*/
            break;
        case INITIALIZE:
            return initialiseR()
            break;
        case SET_CARDS:
            return setCardsR(state, action)
            break;
        default:
            return initialState
    }
}

export default blitzReducer

