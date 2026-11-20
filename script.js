// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa'];
const votes = [12, 9, 5, 4];

const dataset = {
  label: 'Number of votes',
  data: votes
};
const datasets = [dataset];
const chartData = { labels: places, datasets };

const yAxis = { beginAtZero: true };
const scales = { y: yAxis };
const options = { scales };

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'bar', // try: 'line', 'pie', 'doughnut'
  data: chartData,
  options
});