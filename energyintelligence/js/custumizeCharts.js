var configChart = [
    {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    70,
                    25,
                    5
                ],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(255, 159, 64)",
                    "rgb(255, 205, 86)"
                ],
                borderColor: [
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)"
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Yellow"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'center',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    },
    {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    10,
                    45,
                    25,
                    30
                ],
                backgroundColor: [
                    "rgb(255, 159, 64)",
                    "rgb(0, 99, 132)",
                    "rgb(0, 205, 86)",
                    "rgb(255, 0, 255)"
                ],
                borderColor: [
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)"
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Red",
                "Orange",
                "Blue",
                "Yellow"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'center',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    },
    {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [
                    10,
                    60,
                    30
                ],
                backgroundColor: [
                    "rgb(255, 159, 64)",
                    "rgb(0, 205, 86)",
                    "rgb(255, 0, 255)"
                ],
                borderColor: [
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)",
                    "rgb(0, 0, 0)"
                ],
                label: 'Dataset 1'
            }],
            labels: [
                "Orange",
                "Blue",
                "Yellow"
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: 'center',
            },
            title: {
                display: false,
                text: 'Chart.js Doughnut Chart'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    }
    ];
    window.onload = function() {
        var ctx = [
                document.getElementById("chart-0").getContext("2d"),
                document.getElementById("chart-1").getContext("2d"),
                document.getElementById("chart-2").getContext("2d")
            ];
        var myDoughnut = new Chart(ctx[0], configChart[0]);
        $('#homeCarusel').on('slide.bs.carousel', function (event) {
            var active = $(event.target).find('.carousel-inner > .carousel-item.active');
            var from = active.index();
            var next = $(event.relatedTarget);
            var to = next.index();
            var direction = event.direction;
                myDoughnut = new Chart(ctx[to], configChart[to]);
                myDoughnut.update();
        });
    };