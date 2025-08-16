const ctx = document.getElementById('patientLineChart').getContext('2d');
const patientLineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [{
            label: 'Number of Patients',
            data: [12, 19, 7, 14, 22, 9, 15], // Replace with real data
            fill: true, // Fill under the line for visual effect
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Under the line
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            borderWidth: 2,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)', // Point color
            pointRadius: 5, // Size of points
            pointHoverRadius: 8, // Size of points on hover
            tension: 0.4 // Smooth curve
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 14,
                        family: "'Helvetica', 'Arial', sans-serif",
                        weight: 'bold'
                    }
                }
            }
        },
        responsive: true,
        animation: {
            duration: 1500,
            easing: 'easeInOutCubic'
        }
    }
});
