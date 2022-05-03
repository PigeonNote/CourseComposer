/**
 * ************************************
 *
 * @module  marketsReducer
 * @author
 * @date
 * @description reducer for market data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  totalMarkets: 0,
  totalCards: 0,
  marketList: [],
  lastMarketId: 10000,
  newLocation: '',
};

const marketsReducer = (state = initialState, action) => {
//   let marketList; 
//   //console.log('WE MADE IT ', action)
//   let totalCards;

//   switch (action.type) {
//     case types.ADD_MARKET:
    
//       const newMarket = {
//         location: action.payload,
//         marketId: ++state.lastMarketId,
//         cards: 0,
//       };
    
//       marketList = state.marketList.slice();
//       marketList.push(newMarket);
  
//       // return updated state // by this point its already updated
//       return {
//         ...state,
//         marketList: marketList,
//         lastMarketId: newMarket.marketId, 
//         totalMarkets: ++state.totalMarkets, 
//         newLocation: newMarket.location,
//       }; // ends addMarket

//     case types.SET_NEW_LOCATION: 
    
//     case types.ADD_CARD: 
//       marketList = state.marketList.slice();
//       totalCards = state.totalCards;
//       console.log("reducer totalCards:" ,totalCards);
//       for (let i = 0; i < marketList.length; i++) {
//         if (marketList[i].marketId === action.payload) {
//           marketList[i].cards++;
//           totalCards++;
//           break;
//         }
//       }
//       return {
//         ...state,
//         marketList,
//         totalCards,
//       }; 
    
//     case types.DELETE_CARD: 
//       marketList = state.marketList.slice();
//       totalCards = state.totalCards;
//       for (let i = 0; i < marketList.length; i++) {
//         if (marketList[i].marketId === action.payload) {
//           marketList[i].cards--;
//           totalCards--;
//           break;
//         }
//       }
//       return {
//         ...state,
//         marketList,
//         totalCards,
//       };
      
//     default: {
//       return state;
//     }
//   }
};

export default marketsReducer;
