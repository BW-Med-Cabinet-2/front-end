import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import strainReducer from '../reducer'; 

export const store = createStore(strainReducer, applyMiddleware(thunk)); 