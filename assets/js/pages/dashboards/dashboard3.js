// -------------------------------------------------------------------------------------------------------------------------------------------
// Dashboard 3 : Chart Init Js
// -------------------------------------------------------------------------------------------------------------------------------------------
$(function () {
		"use strict";
		// -----------------------------------------------------------------------
		// Sales overview
		// -----------------------------------------------------------------------

		var options_Sales_Overview = {
        series: [{
            name: "Earnings ($) ",
            data: [0, 150, 110, 240, 200, 200, 300]
        }, ],
        chart: {
            height: 300,
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

    var chart_line_overview = new ApexCharts(document.querySelector("#Sales-Overview"), options_Sales_Overview);
    chart_line_overview.render();


		// -----------------------------------------------------------------------
		// Visitor
		// -----------------------------------------------------------------------

		var option_Visit_Separation = {
        series: [50, 40, 30, 10],
        labels: ["Mobile", "Tablet", "Other", "Desktop"],
        chart: {
            type: 'donut',
            fontFamily: 'Montserrat,sans-serif',
            height: 225,
            offsetY: 30,
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                expandOnClick: true,
                donut: {
                    size: '80',
                    labels: {
                        show: true,
                        name: {
                            show: true,
                            offsetY: 10,

                        },
                        value: {
                            show: false,
                        },
                        total: {
                            show: true,
                            color: '#000',
                            fontFamily: 'Montserrat,sans-serif',
                            fontSize: '26px',
                            fontWeight: 600,
                            label: 'Visits',
                        }
                    },
                },
            },
        },
        colors: ['#1e88e5', '#26c6da', '#eceff1', '#745af2'],
        tooltip: {
            show: true,
            fillSeriesColor: false,
        },
        legend: {
            show: false
        },
        responsive: [{
            breakpoint: 1025,
            options: {
                chart: {
                    height: 220,
                    width: 220
                },
            }
        },
        {
            breakpoint: 769,
            options: {
                chart: {
                    height: 250,
                    width: 250
                },
            }
        }]
    };

    var chart_pie_donut_status = new ApexCharts(document.querySelector("#Visit-Separation"), option_Visit_Separation);
    chart_pie_donut_status.render();
		
				
		// -----------------------------------------------------------------------
		// Website Visitor
		// -----------------------------------------------------------------------

		var  option_Website_Visit = {
        series: [
            {
                name: "Series A View ",
                data: [0, 5, 6, 8, 25, 9, 8, 24],
            },
            {
                name: "Series B View ",
                data: [0, 3, 1, 2, 8, 1, 5, 1],
            },
        ],
        chart: {
           fontFamily: 'Montserrat,sans-serif',
            height: 360,
            type: "area",
            toolbar: {
                show: false,
            },
        },
        grid: {
            show: true,
            borderColor: "rgba(0,0,0,.1)",
            xaxis: {
                lines: {
                    show: true,
                },
            },
            yaxis: {
                lines: {
                    show: true,
                },
            },
        },
        colors: ["#06d79c", "#398bf7"],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            width: 2,
        },
        markers: {
            size: 3,
            strokeColors: "transparent",
        },
        xaxis: {
            categories: ["1", "2", "3", "4", "5", "6", "7", "8"],
            labels: {
                style: {
                    colors: [
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                    ],
                },
            },
            axisBorder: {
            	color: "rgba(0,0,0,0.5)"
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: [
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                        "#a1aab2",
                    ],
                },
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm",
            },
            theme: "dark",
        },
        legend: {
            show: false,
        },
    };

    var chart_area_spline = new ApexCharts(document.querySelector("#Website-Visit"), option_Website_Visit);
    chart_area_spline.render();

		
	 
});    
		