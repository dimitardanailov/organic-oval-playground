/*
 * action types
 */

export const SET_ORDER_VALUE = 'SET_ORDER_VALUE'

export const ORDER_VALUES = {
	ALPHABETICAL: 'name-ascending',
	FREQUENCY_DESCENDING: 'value-descending',
	FREQUENCY_ASCENDING: 'value-ascending' 
}

export function setOrderValue(value) {
	return { type: SET_ORDER_VALUE, value }
}