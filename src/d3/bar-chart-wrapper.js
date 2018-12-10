import oval from 'organic-oval'
import { ORDER_VALUES, setOrderValue } from './redux/actions'
import store from './redux/store'

oval.init()

require('./bar-chart')

class BarChartWrapper {

	constructor (rootEl, props, attrs) {
		oval.BaseTag(this, rootEl, props, attrs) 

		this.on('mounted', () => {
			this.addOnChangeListener()
		})
	}

	addOnChangeListener() {
		const values = Object.values(ORDER_VALUES)
		const keys = Object.keys(ORDER_VALUES)
		
		this.refs.select.addEventListener('change', e => {
			let index = null	
			for (let i = 0; i < values.length; i++) {
				if (values[i] === e.target.value) {
					index = i
				}
			}
			
			let state = keys[index]
			store.dispatch(setOrderValue(state))
		})
	}

	render (createElement) { 
		return (
			<section>
				<select ref='select'>
					{ BarChartWrapper.getDropDownValues().map((dropDownValue) =>
						<option value={dropDownValue.value}>
							{dropDownValue.text}
						</option>
					)}
				</select>

				<d3-bar-chart 
					ref='barChar'
					prop-width="500"
					prop-height="500" />
			</section>
		)
	}

	static getDropDownValues() {
		return [
			{
				value: ORDER_VALUES.ALPHABETICAL,
				text: 'Alphabetical'
			},
			{
				value: ORDER_VALUES.FREQUENCY_DESCENDING,
				text: 'Frequency, descending'
			},
			{
				value: ORDER_VALUES.FREQUENCY_ASCENDING,
				text: 'Frequency, ascending'
			}
		]
	}
}

oval.registerTag('d3-bar-chart-wrapper', BarChartWrapper)