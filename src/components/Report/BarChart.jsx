import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// db это на время создания компонентов
import category from './db/db.json';

function BarChart() {
  const isMobile = useMediaQuery({
    query: '(max-width: 320px)',
  });
  const indexAxis = isMobile ? 'y' : 'x';
  // ==========================================
  const labels = [];
  category.map(({ name }) => labels.push(name));
  const dataSumm = [];
  category.map(({ summ }) => dataSumm.push(summ));

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );
  const options = {
    indexAxis: indexAxis,
    responsive: true,
    plugins: {
      legend: {
        position: false,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'Category',
        data: dataSumm,
        backgroundColor: '#FF751D',
        borderRadius: '10',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}

export default BarChart;
