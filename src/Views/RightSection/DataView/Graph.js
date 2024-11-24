import {Chart} from 'chart.js';
import { getRelativePosition } from 'chart.js/helpers';

const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

const chart = new Chart(document.getElementById('myChart'), {
    type: 'bar',
    data: {
      labels: data.map(row => row.year),
      datasets: [
        {
          label: 'Acquisitions by year',
          data: data.map(row => row.count)
        }
      ]
    }
  });
const GraphChart = () => {
    return (
        <div className='chart-container'>
            <div id="myChart"></div>
            <chart />
        </div>
    )
}

export default GraphChart;