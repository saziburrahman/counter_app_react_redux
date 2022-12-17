import {createStore} from 'redux'
import CounterReducers from './Redux/reducers/CounterReducers'

const store = createStore(CounterReducers)

export default store;
