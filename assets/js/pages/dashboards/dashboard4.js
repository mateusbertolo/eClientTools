// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 4 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
	"use strict";
	// -----------------------------------------------------------------------
	// Sales overview
	// -----------------------------------------------------------------------

	var options_Sales_Overview_Line = {
				series: [{
						name: "Earnings ($) ",
						data: [10, 150, 110, 240, 200, 200, 300]
				}, ],
				chart: {
						height: 360,
						type: 'line',
						fontFamily: 'Montserrat,sans-serif',
						zoom: {
								enabled: false
						},
						toolbar: {
								show: false
						},
				},
				colors: ["#398bf7"],
				dataLabels: {
						enabled: false
				},
				stroke: {
						curve: 'straight',
						colors: ["#398bf7"],
						width: 4,
				},
				markers: {
						size: 3,
						colors: ["#398bf7"],
						strokeColors: 'transparent',
				},
				grid: {
						show: true,
						borderColor: "rgba(0,0,0,.1)",
						xaxis: {
						lines: {
								show: false
						}
				}, 
				yaxis: {
						lines: {
								show: true
						}
				}, 
				},
				xaxis: {
						type: 'category',
						categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
						tickAmount: '16',
						tickPlacement: 'on',
						axisTicks: {
								show: true,
								borderType: 'solid',
								color: '#dadada',
								height: 6,
								offsetX: 0,
								offsetY: 0
						},
						axisBorder: {
							color: "rgba(0,0,0,0.5)"
						},
						labels: {
								style: {
										colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2"],
								},
						},
				},
				yaxis: {
						labels: {
								style: {
										colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2"],
								},
						},
				},
				legend: {
						show: false
				},
				tooltip: {
						theme: "dark",

				},
		};

		var chart_line_overview = new ApexCharts(document.querySelector("#Sales-Overview-Line"), options_Sales_Overview_Line);
		chart_line_overview.render();

	
	// -----------------------------------------------------------------------
	// Sales overview 2
	// -----------------------------------------------------------------------

	var options_Sales_Overview_Bar = {
					series: [{
					name: '',
					data: [400, 120, 140, 130, 200, 150, 140, 130, 300, 120, 140, 150]
				}, {
					name: '',
					data: [200, 188, 242, 300, 200, 400, 230, 300, 200, 400, 180, 300]
				}, {
					name: '',
					data: [100, 200, 400, 600, 100, 200, 400, 370, 240, 200, 280, 330]
				}],
					chart: {
					fontFamily: 'Montserrat,sans-serif',
					type: 'bar',
					height: 360,
					stacked: true,
					toolbar: {
						show: false
					},
					zoom: {
						enabled: true
					}
				},
				colors: ['#398bf7', 'rgba(57,139,247,.8)', 'rgba(57, 139, 247, 0.4)'],
				plotOptions: {
					bar: {
						horizontal: false,
						columnWidth: '45%',
					},
				},
				dataLabels: {
					enabled: false, 
				},
				grid: {
						borderColor: "rgba(0,0,0,.1)",
				},
				yaxis: {
						labels: {
								style: {
										colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2"],
								},
						},
				},
				xaxis: {
					type: 'category',
					categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					labels: {
								style: {
										colors: ["#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2", "#a1aab2"],
								},
						},
						axisBorder: {
								show: false,
						},
						axisTicks: {
								show: false, 
							},
				},
				legend: {
					show: false
				},
				fill: {
					opacity: 1
				},
				tooltip: {
					theme: 'dark'
				}
				};

				var chart = new ApexCharts(document.querySelector("#Sales-Overview-Bar"), options_Sales_Overview_Bar);
				chart.render();

	// -----------------------------------------------------------------------
	// world map
	// -----------------------------------------------------------------------
	jQuery("#visitfromworld").vectorMap({
		map: "world_mill_en",
		backgroundColor: "#fff",
		borderColor: "#000",
		borderOpacity: 0.9,
		borderWidth: 1,
		zoomOnScroll: false,
		color: "#ddd",
		regionStyle: {
			initial: {
				fill: "rgba(0,0,0,.09)",
				"stroke-width": 1,
				stroke: "#black",
			},
		},
		markerStyle: {
			initial: {
				r: 5,
				fill: "#26c6da",
				"fill-opacity": 1,
				stroke: "#fff",
				"stroke-width": 1,
				"stroke-opacity": 1,
			},
		},
		enableZoom: true,
		hoverColor: "#79e580",
		markers: [
			{
				latLng: [21.0, 78.0],
				name: "India : 9347",
				style: { fill: "#398bf7" },
			},
			{
				latLng: [-33.0, 151.0],
				name: "Australia : 250",
				style: { fill: "#398bf7" },
			},
			{
				latLng: [36.77, -119.41],
				name: "USA : 250",
				style: { fill: "#398bf7" },
			},
			{
				latLng: [55.37, -3.41],
				name: "UK   : 250",
				style: { fill: "#398bf7" },
			},
			{
				latLng: [25.2, 55.27],
				name: "UAE : 250",
				style: { fill: "#398bf7" },
			},
		],
		hoverOpacity: null,
		normalizeFunction: "linear",
		scaleColors: ["#fff", "#ccc"],
		selectedColor: "#c9dfaf",
		selectedRegions: [],
		showTooltip: true,
		onRegionClick: function (element, code, region) {
			var message =
				'You clicked "' +
				region +
				'" which has the code: ' +
				code.toUpperCase();
			alert(message);
		},
	});
});
