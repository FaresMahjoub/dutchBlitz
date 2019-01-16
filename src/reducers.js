
import {
    MOVE,
    MOVE_3_CARDS,
    playpause,
    SET_CARDS,
    INITIALIZE,
    CLICK,
} from './actions'
import {cardMove} from './actions'

const cardsInMiddle = Array(16).fill({color:'',pos: 'm', sex: '', numb:0, index:0 });
cardsInMiddle[1].index=1
cardsInMiddle[2].index=2
cardsInMiddle[3].index=3
cardsInMiddle[4].index=4
cardsInMiddle[5].index=5
cardsInMiddle[6].index=6
cardsInMiddle[7].index=7
cardsInMiddle[8].index=8
cardsInMiddle[9].index=9
cardsInMiddle[10].index=10
cardsInMiddle[11].index=11
cardsInMiddle[12].index=12
cardsInMiddle[13].index=13

console.log("total");
console.log(cardsInMiddle);
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

function clickedR(state=initialState, action){
    console.log(state);
    let stateObj=JSON.parse(JSON.stringify(state));
    console.log(stateObj);
    if (stateObj.player3Data.clicked===false){
        stateObj.player3Data.clicked=true;
        stateObj.player3Data.lastClicked=action.click1;
        return stateObj
    }
    else{
        let click2=action.click1;
        let click1=stateObj.player3Data.lastClicked;
        console.log("click1");
        console.log(click1);
        console.log("click2");
        console.log(click2);
        stateObj=moveR(stateObj,click1,click2);
        stateObj.player3Data.lastClicked=click2;
        stateObj.player3Data.clicked=false;
        console.log(stateObj);
        return stateObj
    }
}

function moveR(state=initialState, click1,click2){
    console.log(state);
    let stateObj=JSON.parse(JSON.stringify(state));
    console.log("action.click1");
    console.log(click1);
    if ((click2.color === click1.color && click2.numb === click1.numb-1)
        || (click1.numb===1 && click2.numb==0)
        || (click2.sex  !== click1.sex && click2.numb===click1.numb-1)
        || (click1.pos===click2.pos && click1.pos==='rem')){
        console.log("ok pour if");
    switch (click1.pos){
        case 'b':
            switch (click2.pos){
                case 'm':
                	// the cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                    // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                    stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
                    stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'ls':
                    stateObj.player3Data.leftSexistStack.push(click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'ms':
                    stateObj.player3Data.middleSexistStack.push(click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
                case 'rs':
                    stateObj.player3Data.rightSexistStack.push(click1)
                    stateObj.player3Data.blitzStack.pop()
                    break;
            }
             break;
        case 'ls':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for tthe piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.leftSexistStack.pop()
            stateObj.player3Data.leftSexistStack.push({color:'',pos: 'ls', sex: '', numb:0})
            break;
        case 'ms':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.middleSexistStack.pop()
            stateObj.player3Data.middleSexistStack.push({color:'',pos: 'ms', sex: '', numb:0})
            break;
        case 'rs':
            // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
            // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
			stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
            stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
            stateObj.player3Data.rightSexistStack.pop()
            stateObj.player3Data.rightSexistStack.push({color:'',pos: 'rs', sex: '', numb:0})
            break;
        case 'rem':
            switch (click2.pos){
                case 'm':
                    // card coming to the middle. The cards in cardInMiddle are only the top of the pile. The index prop is the number of the pile on the board
                    // (specific for the piles in the middle) thus needs to be added to cards coming to the middle
                    stateObj.cardsInMiddle.splice(click2.index,1,{...click1, ...{index: click2.index}})
                    stateObj.player3Data.nbCardsInMiddle=state.player3Data.nbCardsInMiddle+1
                    stateObj.player3Data.remainingStack.pop()
                    break;
                case 'rem':
                    let len=stateObj.player3Data.remainingStack.length
                    let last=stateObj.player3Data.remainingStack[len-1]
                    let prelast=stateObj.player3Data.remainingStack[len-2]
                    let beforePrelast=stateObj.player3Data.remainingStack[len-3]
                    for (let i=len-1;i>=0;i--){
                        stateObj.player3Data.remainingStack[i]=stateObj.player3Data.remainingStack[i-3]
                    }
                    stateObj.player3Data.remainingStack[0]=beforePrelast
                    stateObj.player3Data.remainingStack[1]=prelast
                    stateObj.player3Data.remainingStack[2]=last
                    console.log("ok pour rem");
            }
    }}
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
        case CLICK:
            return clickedR(state, action)
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

