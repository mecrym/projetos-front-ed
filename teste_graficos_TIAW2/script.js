// Sample yearTasks data
var yearTasks = {
    "2024-01-01": [{ "due_date": "2024-01-01", "conclude": true }, { "due_date": "2024-01-15", "conclude": false }],
    "2024-02-01": [{ "due_date": "2024-02-01", "conclude": true }, { "due_date": "2024-02-15", "conclude": true }],
    // Add more data for other months...
};

// Function to show the year chart
function showYearChart() {
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var completedTasksByMonth = Array(12).fill(0);

    for (var date in yearTasks) {
        var tasks = yearTasks[date];
        for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
            var taskDate = new Date(task.due_date);
            var monthIndex = taskDate.getMonth();
            if (task.conclude) {
                completedTasksByMonth[monthIndex]++;
            }
        }
    }

    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Completed Tasks',
                data: completedTasksByMonth,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Function to switch between different periods
function showPeriod(period) {
    if (period === 'year') {
        showYearChart();
    }
    // Add functions for other periods (day, week, month) if needed
}
