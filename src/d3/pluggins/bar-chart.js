import * as d3 from "d3";
import { ORDER_VALUES } from '../redux/actions'

let global = {
	margin: null,
	dimensions: null,
	data: null
}

let x, y, chart

const xAxis = function(g) {
	const axis = g.attr('transform', `translate(0,${global.dimensions.height - global.margin.bottom})`)
		.call(d3.axisBottom(scaleBand()).tickSizeOuter(0))

	return axis
}

const yAxis = function(g) {
	const axis = g.attr('transform', `translate(${global.margin.left},0)`)
		.call(d3.axisLeft(scaleLinear()))
		.call(g => g.select('.domain').remove())
		
	return axis
}

const scaleBand = function() {
	return d3.scaleBand()
		.domain(global.data.map(d => d.name))
		.range([global.margin.left, global.dimensions.width - global.margin.right])
		.padding(0.1)
}

const scaleLinear = function() {
	return d3.scaleLinear()
    .domain([0, d3.max(global.data, d => d.value)]).nice()
    .range([global.dimensions.height - global.margin.bottom, global.margin.top])
}

export const barChart = function(el, data, dimensions, margin) {
	global.margin = margin
	global.dimensions = dimensions
	global.data = data

	x = scaleBand()
	y = scaleLinear()

	const svg = d3.select(el)
		.append('svg')
			.attr('width', dimensions.width)
			.attr('height', dimensions.height)
	
	const bar = svg.append('g')
			.attr('fill', 'steelblue')
		.selectAll("rect")
		.data(global.data)
		.enter().append('rect')
			.style('mix-blend-mode', 'multiply')
			.attr('x', d => x(d.name))
			.attr('y', d => y(d.value))
			.attr('height', d => y(0) - y(d.value))
			.attr('width', x.bandwidth())	

	const gx = svg.append('g')
			.call(xAxis)

	svg.append('g').call(yAxis)

	svg.node().update = () => {
		const t = svg.transition()
				.duration(750)

		bar.data(global.data, d => d.name)
				.order()
			.transition(t)
				.delay((d, i) => i * 20)
				.attr('x', d => x(d.name))

		gx.transition(t)
				.call(xAxis)
			.selectAll('.tick')
				.delay((d, i) => i * 20)
	};

	chart = svg.node()

	return chart
}

export const order = function(state) {
	switch (state.orderValue) {
		case ORDER_VALUES.ALPHABETICAL:
			global.data.sort((a, b) => a.name.localeCompare(b.name))
			break;
		case ORDER_VALUES.FREQUENCY_DESCENDING:
			global.data.sort((a, b) => a.value - b.value); 
			break;
		case ORDER_VALUES.FREQUENCY_ASCENDING:
			global.data.sort((a, b) => b.value - a.value); 
			break;
	}

	x.domain(global.data.map(d => d.name))
	chart.update()
}