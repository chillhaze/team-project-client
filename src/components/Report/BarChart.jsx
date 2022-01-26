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
import { Wrapper } from 'components/Chart/Chart.styled';
import { BgrReport, WrapperReportMobile } from './styled/Chart.styled';
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
        value: total,
      }),
    );
    return data;
  }
  const renderBarLabel = ({ x, y, width, value }) => (
    <text x={x + width / 1.1} y={y} textAnchor="middle" fontSize={10} dy={-10}>
      {value ? `${value} грн.` : ''}
    </text>
  );

  const renderCategoryLabel = ({ x, y, value }) => (
    <text x={x} y={y} dy={-10} fontSize={10}>
      {value}
    </text>
  );

  const renderCustomBarLabel = ({ x, y, width, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y - 4}
        fill="#52555F"
        textAnchor="middle"
        dy={-10}
      >{`${Math.round(value)} грн.`}</text>
    );
  };

  return (
    <>
      {!isMobile && (
        <BgrReport>
          <BarChart
            width={605}
            height={328}
            data={getReportForChart(sortedCategories)}
            margin={{ top: 50, right: 20, bottom: 9, left: 20 }}
            barCategoryGap={20}
          >
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              dy={5}
            ></XAxis>

            <Bar
              dataKey="total"
              barSize={38}
              fill="#fd8905"
              label={renderCustomBarLabel}
              radius={[10, 10, 0, 0]}
              animationDuration={1500}
            >
              {getReportForChart(sortedCategories) &&
                getReportForChart(sortedCategories).map((el, idx) => (
                  <Cell
                    key={`cell-${idx}`}
                    fill={idx % 3 ? '#FFDAC0' : '#ff751d'}
                  />
                ))}
            </Bar>
          </BarChart>
        </BgrReport>
      )}
      {isMobile && (
        <BgrReport>
          <ResponsiveContainer
            width="95%"
            height={50 * sortedCategories.length}
          >
            <BarChart
              layout="vertical"
              data={getReportForChart(sortedCategories)}
              margin={{ top: 0, right: 0, bottom: 0, left: 19 }}
              barGap="15"
            >
              <XAxis hide axisLine={false} type="number" />
              <YAxis dataKey="name" type="category" hide />
              <Bar
                dataKey="total"
                barSize={15}
                radius={[0, 10, 10, 0]}
                label={renderBarLabel}
                fill="#52555f"
                minPointSize={5}
              >
                {getReportForChart(sortedCategories) &&
                  getReportForChart(sortedCategories).map((el, idx) => (
                    <Cell
                      key={`cell-${idx}`}
                      fill={idx % 3 ? '#FFDAC0' : '#ff751d'}
                    />
                  ))}
                <LabelList
                  dataKey="name"
                  content={renderCategoryLabel}
                  fill="#52555F"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </BgrReport>
      )}
    </>
  );
}

export default ReportBarChart;
