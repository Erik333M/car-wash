import { combineReducers, createStore } from 'redux'
import catsReducer from './catsReducer'
import categorisReducer from './categorisReducer'
import dataReducer from './selectedReducer'

const combain = combineReducers({
    cats:catsReducer,
    categoris:categorisReducer,
    selected:dataReducer
})

const Store = createStore(combain) 

export default Store