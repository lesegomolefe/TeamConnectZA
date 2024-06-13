import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Doughnut, Pie, Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraphsPage() {
  const [selectedChart, setSelectedChart] = useState('Doughnut');
  const chartRef = useRef(null);

  const handleDropdownChange = (e) => {
    setSelectedChart(e.target.innerText);
  };

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  }, [selectedChart]);

  const renderChart = () => {
    switch (selectedChart) {
      case 'Doughnut':
        return <Doughnut ref={chartRef} data={data} width={200} height={200} />;
      case 'Pie':
        return <Pie ref={chartRef} data={data} width={200} height={200} />;
      case 'Line':
        return <Line ref={chartRef} data={lineData} width={200} height={200} />;
      case 'Bar':
        return <Bar ref={chartRef} data={barData} width={200} height={200} />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Graphs Page</h1>
      <div className="dropdown mb-4">
        <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Select Chart
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Doughnut</a></li>
          <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Pie</a></li>
          <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Line</a></li>
          <li><a className="dropdown-item" href="#" onClick={handleDropdownChange}>Bar</a></li>
        </ul>
      </div>
      <div>
        {renderChart()}
      </div>
    </div>
  );
}

export default GraphsPage;
