document.addEventListener('DOMContentLoaded', () => {
    // Bar chart
const barLineCtx = document.getElementById('barLineChart').getContext('2d');

const barLineData = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June',],
    datasets: [
        {
            // label: 'Line Dataset',
            type: 'line',
            data: [5, 3, 7, 3, 8,12],
            fill: false,
            borderColor: 'rgba(161, 151, 178, 1)',
            borderWidth: 2,
            borderRadius: 5, 
            borderSkipped: 'start',
            tension: 0.4
        },
        {
            // label: 'Bar Dataset',
            type: 'bar',
            data: [12, 10, 8, 6, 10, 14],
            backgroundColor: 'rgba(28, 113, 229, 1)',
            borderColor: 'rgb(0, 110, 255)',
            borderWidth: 1, 
            borderRadius: 5
        }
        
    ]
};

const barLineChart = new Chart(barLineCtx, {
    type: 'bar',
    data: barLineData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Two lines chart

const twoLineCtx = document.getElementById('twoLineChart').getContext('2d');

        const twoLineChartData = {
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November'],
            datasets: [
                {
                    // label: 'Line 1',
                    data: [5, 8, 15, 9, 12, 18, 13, 5, 3, 8, 12],
                    borderColor: 'rgba(37, 226, 251, 1)',
                    borderWidth: 2,
                    borderRadius: 5, 
                    borderSkipped: 'start',
                    tension: 0.4
                },
                {
                    // label: 'Line 2',
                    data: [3, 6, 4, 2, 7, 4, 22, 10, 5, 3, 8],
                    borderColor: 'rgba(142, 152, 255, 1)',
                    borderWidth: 2,
                    fill: false,
                    tension: 0.4
                }
            ]
        };

        const lineChartOptions = {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                shadowedLine: {
                    shadowColor: 'rgba(0, 0, 0, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 5
                }
            }
        };

        const lineChart = new Chart(twoLineCtx, {
            type: 'line',
            data: twoLineChartData,
            options: lineChartOptions
        });

})


// Doughnut Chart 
const Doughnut = document.querySelector('#Doughnut');

const doughnutData = {
    labels: [
        'Occupied',
        'Disconnect',
        'Unoccupied',
    ],
    datasets: [{
        data: [72, 18, 10],
        backgroundColor: [
            'rgba(5, 208, 223, 1)',
            'rgba(253, 55, 54, 1)',
            'rgba(207, 215, 218, 1)'
        ],
        hoverOffset: 1
    }]
};

const myDoughnut = new Chart(Doughnut, {
    type: 'doughnut',
    data: doughnutData,
    options: {
        cutout: '70%',
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})

const doughnutContainer = document.querySelector('#DoughnutValues');

const defaultColor = 'rgba(238, 238, 238, 1)';

const doughnutValues = doughnutData.datasets[0].data.map((value, index) => {
    const label = doughnutData.labels[index];
    const color = doughnutData.datasets[0].backgroundColor[index] || defaultColor;

    // Calculate circumference
    const radius = 10;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke dash offset
    const progress = value / 100;
    const strokeDashoffset = circumference * (1 - progress);

    return `
        <div class="flex items-center justify-between gap-3 mb-3">
            <div class="flex items-center gap-1">
                <svg class="w-8 h-8">
                    <circle class="progress-ring-back" cx="16" cy="16" r="${radius}" stroke-width="4" stroke="${defaultColor}" fill="transparent"></circle>
                    <circle class="progress-ring" cx="16" cy="16" r="${radius}" stroke-width="4" stroke="${color}" fill="transparent" style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset || circumference};"></circle>
                </svg>
                <p class="text-base dark-text">${label}</p>
            </div>
            <h6 style="color:rgba(17, 17, 17, 0.6);font-size:16px">${value}%</h6>
        </div>
    `;
}).join('');




doughnutContainer.innerHTML = doughnutValues;


// Doughnut Chart 
const DoughnutTwo = document.querySelector('#DoughnutTwo');

const doughnutTwoData = {
    labels: [
        'Test One',
        'Test Two',
        'Test Three',
        'Test Four'
    ],
    datasets: [{
        data: [42, 28, 20, 10],
        backgroundColor: [
            'rgba(132, 217, 218, 1)',
            'rgba(76, 77, 195, 1)',
            'rgba(249, 128, 105, 1)',
            'rgba(227, 186, 63, 1)'
        ],
        hoverOffset: 1
    }]
};

const myDoughnutTwo = new Chart(DoughnutTwo, {
    type: 'doughnut',
    data: doughnutTwoData,
    options: {
        cutout: '60%',
        plugins: {
            legend: {
                display: false,
            }
        }
    }
})

const doughnutTwoContainer = document.querySelector('#DoughnutTwoValues');

const doughnutTwoValues = doughnutTwoData.datasets[0].data.map((value, index) => {
    const label = doughnutTwoData.labels[index];
    const color = doughnutTwoData.datasets[0].backgroundColor[index] || defaultColor;

    // Calculate circumference
    const radius = 10;
    const circumference = 2 * Math.PI * radius;

    // Calculate stroke dash offset
    const progress = value / 100;
    const strokeDashoffset = circumference * (1 - progress);

    return `
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-1">
                <svg class="w-8 h-8">
                    <circle class="progress-ring-back" cx="16" cy="16" r="${radius}" stroke-width="4" stroke="${defaultColor}" fill="transparent"></circle>
                    <circle class="progress-ring" cx="16" cy="16" r="${radius}" stroke-width="4" stroke="${color}" fill="transparent" style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset || circumference};"></circle>
                </svg>
                <p class="text-base dark-text">${label}</p>
            </div>
            <h6 style="color:rgba(17, 17, 17, 0.6);font-size:16px">${value}%</h6>
        </div>
    `;
}).join('');




doughnutTwoContainer.innerHTML = doughnutTwoValues;