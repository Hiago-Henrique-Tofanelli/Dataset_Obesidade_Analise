// Dados reais para todos os 51 estados
const states = [
    "Texas", "California", "Kentucky", "Georgia", "Wisconsin", "Oregon", "Virginia", "Tennessee", "Louisiana", "New York",
    "Michigan", "Idaho", "Florida", "Alaska", "Montana", "Minnesota", "Nebraska", "Washington", "Ohio", "Illinois",
    "Missouri", "Iowa", "South Dakota", "Arkansas", "Mississippi", "Colorado", "North Carolina", "Utah", "Oklahoma", "Wyoming",
    "West Virginia", "Indiana", "Massachusetts", "Nevada", "Connecticut", "District of Columbia", "Rhode Island", "Alabama", "Puerto Rico", "South Carolina",
    "Maine", "Hawaii", "Arizona", "New Mexico", "Maryland", "Delaware", "Pennsylvania", "Kansas", "Vermont", "New Jersey", "North Dakota", "New Hampshire"
];

const obesityRates = [
    32.4, 24.2, 34.6, 30.7, 30.7, 30.1, 29.2, 33.8, 36.2, 25.0,
    31.2, 28.6, 26.8, 29.8, 23.6, 26.1, 31.4, 26.4, 29.8, 30.8,
    32.4, 32.1, 30.4, 34.5, 35.6, 20.2, 30.1, 24.5, 33.9, 29.0,
    35.6, 31.3, 24.3, 26.7, 25.3, 22.1, 26.0, 35.6, 29.5, 31.7,
    30.0, 22.7, 28.4, 28.8, 28.9, 29.7, 30.0, 34.2, 25.1, 25.6, 31.0, 26.3
];

// Gráfico de barras com todos os estados
const barDataAll = [{
    x: states,
    y: obesityRates,
    type: 'bar',
    text: obesityRates.map(rate => rate.toFixed(2) + '%'),
    marker: {
        color: 'blue'
    }
}];

const barLayoutAll = {
    title: 'Porcentagem de Obesidade por Estado (Todos os Estados)',
    xaxis: {
        title: 'Estado'
    },
    yaxis: {
        title: 'Porcentagem de Obesidade'
    }
};

Plotly.newPlot('bar-chart-all', barDataAll, barLayoutAll);
// Selecionando os cinco estados com maior obesidade
const topStates = states.slice(0, 5);
const topStatesObesity = obesityRates.slice(0, 5);

// Gráfico de barras com os cinco estados com maior obesidade
const barDataTop = [{
    x: topStates,
    y: topStatesObesity,
    type: 'bar',
    text: topStatesObesity.map(rate => rate.toFixed(2) + '%'),
    marker: {
        color: 'red'
    }
}];

const barLayoutTop = {
    title: 'Top 5 Estados com Maior Porcentagem de Obesidade',
    xaxis: {
        title: 'Estado'
    },
    yaxis: {
        title: 'Porcentagem de Obesidade'
    }
};

Plotly.newPlot('bar-chart-top', barDataTop, barLayoutTop);

// Selecionando os cinco estados com menor obesidade
const bottomStates = states.slice(-5);
const bottomStatesObesity = obesityRates.slice(-5);

// Gráfico de barras com os cinco estados com menor obesidade
const barDataBottom = [{
    x: bottomStates,
    y: bottomStatesObesity,
    type: 'bar',
    text: bottomStatesObesity.map(rate => rate.toFixed(2) + '%'),
    marker: {
        color: 'green'
    }
}];

const barLayoutBottom = {
    title: 'Top 5 Estados com Menor Porcentagem de Obesidade',
    xaxis: {
        title: 'Estado'
    },
    yaxis: {
        title: 'Porcentagem de Obesidade'
    }
};

Plotly.newPlot('bar-chart-bottom', barDataBottom, barLayoutBottom);

// Função para criar um gráfico de waffle horizontal para a diferença de Maior - Menor
function createHorizontalWaffleChartDifference(differencePercentage, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo anterior.

    const totalSquares = 100; // Número total de quadrados no gráfico de waffle.

    const squaresPerInterval = [
        { color: 'blue', range: [20, 24.9] },
        { color: 'green', range: [25, 29.9] },
        { color: 'red', range: [30, 35] }
    ];

    squaresPerInterval.forEach((interval) => {
        const squaresInInterval = (differencePercentage / 100) * totalSquares;
        if (differencePercentage >= interval.range[0] && differencePercentage <= interval.range[1]) {
            const row = document.createElement('div');
            row.className = 'waffle-row';
            for (let i = 0; i < totalSquares; i++) {
                const square = document.createElement('div');
                square.style.backgroundColor = i < squaresInInterval ? interval.color : 'lightgray';
                square.className = 'waffle-square';
                row.appendChild(square);
            }
            container.appendChild(row);
        }
    });
}

// Primeira diferença: Maior - Menor (Ajuste o valor conforme seus dados reais)
const differencePercentage = 5; // A diferença Maior - Menor

// Chame a função para criar o gráfico de waffle para a primeira diferença (Maior - Menor)
createHorizontalWaffleChartDifference(differencePercentage, 'waffle-chart');

// Função para criar um gráfico de waffle horizontal para a diferença de Menor - Maior
function createHorizontalWaffleChartDifference2(differencePercentage, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Limpa o conteúdo anterior.

    const totalSquares = 100; // Número total de quadrados no gráfico de waffle.

    const squaresPerInterval = [
        { color: 'blue', range: [20, 24.9] },
        { color: 'green', range: [25, 29.9] },
        { color: 'red', range: [30, 35] }
    ];

    squaresPerInterval.forEach((interval) => {
        const squaresInInterval = (-differencePercentage / 100) * totalSquares;
        if (differencePercentage <= interval.range[0] && differencePercentage >= interval.range[1]) {
            const row = document.createElement('div');
            row.className = 'waffle-row';
            for (let i = 0; i < totalSquares; i++) {
                const square = document.createElement('div');
                square.style.backgroundColor = i < squaresInInterval ? interval.color : 'lightgray';
                square.className = 'waffle-square';
                row.appendChild(square);
            }
            container.appendChild(row);
        }
    });
}

// Segunda diferença: Menor - Maior (Ajuste o valor conforme seus dados reais)
const differencePercentage2 = -5; // A diferença Menor - Maior

// Chame a função para criar o gráfico de waffle para a segunda diferença (Menor - Maior)
createHorizontalWaffleChartDifference2(differencePercentage2, 'waffle-chart-2');