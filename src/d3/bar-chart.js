/**
 * Idea: https://beta.observablehq.com/@mbostock/d3-sortable-bar-chart
 */

import oval from 'organic-oval'
import barChart from './pluggins/bar-chart'

oval.init()

class BarChart {
	constructor (rootEl, props, attrs) {
		oval.BaseTag(this, rootEl, props, attrs)

		this.on('mounted', () => {
			this.loadD3()
		})
	}

	loadD3() {
		const dimensions = {
			height: this.props.height,
			width: this.props.width
		}

		const data = BarChart.data()

		barChart(this.refs.section, data, dimensions, BarChart.getMarginValues())
	}

	render (createElement) { 
		return (
			<section ref='section' />
		)
	}

	static data() {
		return [
			{ name: "A", value: 0.08167 },
			{ name: "B", value: 0.01492 },
			{ name: "C", value: 0.02782 },
			{ name: "D", value: 0.04253 },
			{ name: "E", value: 0.12702 },
			{ name: "F", value: 0.02288 },
			{ name: "G", value: 0.02015 },
			{ name: "H", value: 0.06094 },
			{ name: "I", value: 0.06966 },
			{ name: "J", value: 0.00153 },
			{ name: "K", value: 0.00772 },
			{ name: "L", value: 0.04025 },
			{ name: "M", value: 0.02406 },
			{ name: "N", value: 0.06749 },
			{ name: "O", value: 0.07507 },
			{ name: "P", value: 0.01929 },
			{ name: "Q", value: 0.00095 },
			{ name: "R", value: 0.05987 },
			{ name: "S", value: 0.06327 },
			{ name: "T", value: 0.09056 },
			{ name: "U", value: 0.02758 },
			{ name: "V", value: 0.00978 },
			{ name: "W", value: 0.02360 },
			{ name: "X", value: 0.00150 },
			{ name: "Y", value: 0.01974 },
			{ name: "Z", value: 0.00074 }
		]
	}

	static getMarginValues() {
		return { 
			top: 20, 
			right: 0, 
			bottom: 30, 
			left: 40
		}
	}
}

oval.registerTag('d3-bar-chart', BarChart)