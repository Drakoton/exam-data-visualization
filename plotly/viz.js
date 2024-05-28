function sortByCountryPopulation(data) {
    data.sort((a, b) => a.population - b.population);
}

function run_visualization(data) {
    sortByCountryPopulation(data);

    const top30Countries = data.slice(-30);

    const countries = top30Countries.map(countryData => countryData.country);
    const populations = top30Countries.map(countryData => countryData.population);

    const trace = {
        x: populations,
        y: countries,
        type: 'bar',
        orientation: 'h'
    };

    const layout = {
        title: 'Top 30 Pays avec la Plus Grande Population',
        yaxis: { title: 'Population' },
        xaxis: { title: 'Pays' }
    };

    Plotly.newPlot('bar-chart', [trace], layout);
}

fetch('data.json')
    .then(response => response.json())
    .then(data => run_visualization(data))
    .catch(error => console.error('Erreur lors du chargement des données :', error));
