import 'bootstrap/dist/css/bootstrap.min.css';
import { ArcElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import './TrackProgress.css'; // Import the custom CSS

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function TrackProgress() {
  const [report, setReport] = useState('');
  const [reportSubject, setReportSubject] = useState('');
  const [reportHistory, setReportHistory] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [performanceData, setPerformanceData] = useState({
    labels: [], // Initially empty, will be updated dynamically
    datasets: [
      {
        label: 'Tasks Completed',
        data: [], // Initially empty, will be updated dynamically
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  });
  const [pieChartData, setPieChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    updateCurrentDate();
    const interval = setInterval(updateCurrentDate, 1000);
    return () => clearInterval(interval);
  }, []);

  const updateCurrentDate = () => {
    const now = new Date();
    setCurrentDate(now.toLocaleString());
  };

  const handleReportChange = (e) => {
    setReport(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setReportSubject(e.target.value);
  };

  const handleSubmitReport = () => {
    if (report.trim() === '' || reportSubject.trim() === '') return;

    if (editingId !== null) {
      setReportHistory(reportHistory.map(item => 
        item.id === editingId ? {...item, text: report, subject: reportSubject} : item
      ));
      setEditingId(null);
    } else {
      const newReport = {
        id: Date.now(),
        subject: reportSubject,
        text: report,
        date: new Date().toLocaleString()
      };
      setReportHistory([newReport, ...reportHistory]);
      
      // Update performance data with new report
      setPerformanceData(prevData => {
        const updatedLabels = [...prevData.labels, reportSubject];
        const updatedData = [...prevData.datasets[0].data, report.length]; // For demo purposes, use report length as data point
        return {
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData
            }
          ]
        };
      });

      // Update pie chart data
      const newPieData = [...pieChartData.datasets[0].data];
      const subjectIndex = pieChartData.labels.indexOf(reportSubject);
      if (subjectIndex !== -1) {
        newPieData[subjectIndex] += 1;
      } else {
        pieChartData.labels.push(reportSubject);
        newPieData.push(1);
      }
      setPieChartData({
        labels: pieChartData.labels,
        datasets: [{...pieChartData.datasets[0], data: newPieData}]
      });
    }
    setReport('');
    setReportSubject('');
  };

  const handleEdit = (id) => {
    const reportToEdit = reportHistory.find(item => item.id === id);
    setReport(reportToEdit.text);
    setReportSubject(reportToEdit.subject);
    setEditingId(id);
  };

  const handleDelete = (id) => {
    setReportHistory(reportHistory.filter(item => item.id !== id));
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Performance Metrics',
      },
    },
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="bg-primary text-white text-center py-3 card mb-4">
            <h1>Lesego's Track Progress</h1>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Track Progress</h1>
              <p className="text-muted text-center">{currentDate}</p>
              <div className="mb-3">
                <label htmlFor="reportSubject" className="form-label">Report Subject:</label>
                <input
                  type="text"
                  className="form-control"
                  id="reportSubject"
                  value={reportSubject}
                  onChange={handleSubjectChange}
                  placeholder="Enter report subject "
                />
              </div>
              <div className="mb-3">
                <label htmlFor="reportText" className="form-label">Report Details:</label>
                <textarea
                  className="form-control"
                  id="reportText"
                  value={report}
                  onChange={handleReportChange}
                  rows="5"
                  placeholder="Write your report here..."
                />
              </div>
              <button 
              style={{ width: "100%" }}
                className="btn btn-primary btn-lg btn-block mb-4"
                onClick={handleSubmitReport}
              >
                {editingId !== null ? 'Update Report' : 'Submit Report'}
              </button>

              <h2 className="mt-4">Report History</h2>
              {reportHistory.map((item) => (
                <div key={item.id} className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{item.subject}</h5>
                    <p className="card-text">{item.text}</p>
                    <p className="text-muted">Submitted on: {item.date}</p>
                    <button 
                      className="btn btn-sm btn-outline-primary me-2"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Weekly Performance</h2>
              <Line options={chartOptions} data={performanceData} />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Task Distribution</h2>
              <Pie options={chartOptions} data={pieChartData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackProgress;
