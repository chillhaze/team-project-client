import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import {
  BarChart,
  Bar,
  Cell,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

function ReportBarChart({ type, idSubcategory, detailedReport }) {
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

  function getReportForChart(report) {
    const data = [];
    report.map(({ name, total }) =>
      data.push({
        name: name,
        total: total,
      }),
    );
    return data;
  }
  // const renderCustomizedLabel = ({ payload, x, y, width, total }) => {
  //   console.log(total, 111);
  //   return (
  //     <text
  //       x={x + width / 2}
  //       y={y}
  //       fill="#666"
  //       textAnchor="middle"
  //       dy={-10}
  //       fontSize={12}
  //     >
  //       {`${total}`}
  //     </text>
  //   );
  // };
  // const data = [
  //   { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  //   { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  //   { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  //   { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  //   { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  // ];

  // const renderCustomizedLabel = ({ x, y, width, total }) => (
  //   <text
  //     x={x + width / 2}
  //     y={y}
  //     dy={-10}
  //     textAnchor="middle"
  //     fontSize={12}
  //   >{`6000грн`}</text>
  // );
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={getReportForChart(sortedCategories)}
        width={666}
        height={422}
        layout="horizontal"
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/* <YAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          position="top"
          // angle="90"
          // orientation={'top'}
        /> */}

        <Bar
          dataKey="name"
          radius={[10, 10, 0, 0]}
          barSize={38}
          label={<div>6000</div>}
        >
          {getReportForChart(sortedCategories).map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
        </Bar>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" scale="band" />
        <Tooltip />
        <Legend />
        <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar
          dataKey="name"
          radius={[10, 10, 0, 0]}
          barSize={38}
          label={<div>6000</div>}
        >
          {getReportForChart(sortedCategories).map((el, idx) => (
            <Cell key={`cell-${idx}`} fill={idx % 3 ? '#FFDAC0' : '#ff751d'} />
          ))}
        </Bar>
        {/* <XAxis dataKey="total" />
        <YAxis dataKey="name" type="category" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ReportBarChart;
