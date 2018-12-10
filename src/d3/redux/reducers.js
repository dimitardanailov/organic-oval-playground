import { combineReducers } from 'redux'

import { 
	SET_ORDER_VALUE,
	ORDER_VALUES } 
from './actions'


function orderValue(state = ORDER_VALUES.FREQUENCY_DESCENDING , action) {
	switch(action.type) {
		case SET_ORDER_VALUE:
			return action.value
		default:
			return state
	}
}

const app = combineReducers({
  orderValue
})

export default app