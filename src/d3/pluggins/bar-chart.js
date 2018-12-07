import * as d3 from "d3";

let global = {
	margin: null,
	dimensions: null,
	data: null
}

const barChart = function(el, data, dimensions, margin) {
	global.margin = margin
	global.dimensions = dimensions
	global.data = data

	const x = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([margin.left, dimensions.width - margin.right])
		.padding(0.1)

	const y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)]).nice()
    .range([dimensions.height - margin.bottom, margin.top])

	const svg = d3.select(el)
		.append('svg')
			.attr('width', dimensions.width)
			.attr('height', dimensions.height)
	
	const bar = svg.append('g')
			.attr('fill', 'steelblue')
		.selectAll("rect")
		.data(data)
		.enter().append('rect')
			.style('mix-blend-mode', 'multiply')
			.attr('x', d => x(d.name))
			.attr('y', d => y(d.value))
			.attr('height', d => y(0) - y(d.value))
			.attr('width', x.bandwidth())	

	const gx = svg.append('g')
			.call(xAxis);

	gx.call(d3.axisBottom(x).tickSizeOuter(0))
			
	const gy = svg.append('g')
			.call(yAxis)

	gy
		.call(d3.axisLeft(y))
		.call(g => g.select(".domain").remove())
}

const xAxis = function(g) {
	const axis = g.attr('transform', `translate(0,${global.dimensions.height - global.margin.bottom})`)

	return axis
}

const yAxis = function(g) {
	const axis = g.attr('transform', `translate(${global.margin.left},0)`)

	return axis
}

export default barChart