// Get the canvas element from the page
const canvas = document.getElementById('myChart');

// Our data
const places = ['Campusgarten', 'Mühlbach', 'Interactive Media Lab', 'Mensa', `Derflers Garten`];
const votes = [12, 9, 5, 4, 3];
const votesLastYear = [9, 8, 4, 3, 2];

const dataset = {
  label: 'Number of votes',
  data: votes
};

const dataset2 = {
  label: 'Number of votes from last year',
  data: votesLastYear
};

const datasets = [dataset, dataset2];
const chartData = { labels: places, datasets };

// Create a new chart: new Chart(where, configuration)
new Chart(canvas, {
  type: 'pie', // try: 'line', 'pie', 'doughnut'
  data: chartData
});