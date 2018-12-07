import oval from 'organic-oval'
oval.init()

require('./bar-chart')

class BarChartWrapper {

	constructor (rootEl, props, attrs) {
		oval.BaseTag(this, rootEl, props, attrs)

		this.props.selectedValue = 'name-ascending';
		this.props.dropDownValues = BarChartWrapper.getDropDownValues();
	}

	render (createElement) { 
		return (
			<section>
				<select>
					{this.props.dropDownValues.map((dropDownValue) =>
						<option value={dropDownValue.value}>
							{dropDownValue.text}
						</option>
					)}
				</select>

				<d3-bar-chart 
					prop-width="500"
					prop-height="500"
					prop-selectedValue={ this.props.selectedValue } />
			</section>
		)
	}

	static getDropDownValues() {
		return [
			{
				value: 'name-ascending',
				text: 'Alphabetical'
			},
			{
				value: 'value-descending',
				text: 'Frequency, descending'
			},
			{
				value: 'value-ascending',
				text: 'Frequency, ascending '
			}
		]
	}
}

oval.registerTag('d3-bar-chart-wrapper', BarChartWrapper)