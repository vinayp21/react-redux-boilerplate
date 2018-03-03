import {createStore, applyMiddleware } from 'redux';
import reducers from './reducer'
import thunk from 'redux-thunk'
const consoleMessages = store => next => action => {

	return next(action)

}

export default (initialState={}) => {
	//return applyMiddleware(consoleMessages)(createStore)(reducers, initialState)
  return createStore(reducers,initialState)
}
