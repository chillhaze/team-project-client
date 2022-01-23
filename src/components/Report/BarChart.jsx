import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
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

function BarChart({ type, idSubcategory, detailedReport }) {
  const reportChart = useSelector(
    ({ reports }) => reports.reportsDataDetailed.categories,
  );
  function getCategoriesByTypeChart(type, idSubcategory, detailedReport) {
    let reportForChart = [];
    if (!detailedReport) {
      reportForChart = reportChart.filter(item => item.type === type);
    } else {
      reportForChart = reportChart.find(
        option => option._id === idSubcategory,
      ).subcategories;
    }
    return reportForChart;
  }

  const reportForChart = getCategoriesByTypeChart(
    type,
    idSubcategory,
    detailedReport,
  );
  const sortedCategories = [...reportForChart].sort(
    (a, b) => b.total - a.total,
  );
  const isMobile = useMediaQuery({
    query: '(max-width: 320px)',
  });
  const indexAxis = isMobile ? 'y' : 'x';
  // ==========================================
  const labels = [];
  sortedCategories.map(({ name }) => labels.push(name));
  const dataSumm = [];
  sortedCategories.map(({ total }) => dataSumm.push(total));

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
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export default BarChart;
