import { faCalendarAlt, faChartLine, faComments, faTasks, faUserCog, faUserGraduate, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const activeGroups = [
    { id: 1, name: "Web Development", members: 5 },
    { id: 2, name: "Data Science", members: 4 },
    { id: 3, name: "UI/UX Design", members: 3 },
    { id: 4, name: "Mobile App", members: 6 },
  ];

  const performanceData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Performance Score',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const groupDistributionData = {
    labels: activeGroups.map(group => group.name),
    datasets: [
      {
        data: activeGroups.map(group => group.members),
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
  };

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/users");
//         setEmployees(response.data);
//       } catch (error) {
//         console.error("Error fetching employees:", error);
//       }
//     };

//     const fetchComplaints = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/complaints");
//         setUserComp(response.data);
//       } catch (error) {
//         console.error("Error fetching complaints:", error);
//       }
//     };

//     fetchEmployees();
//     fetchComplaints();
//   }, []);

//   const handleFileUpload = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://localhost:5000/api/upload", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSubmitComplaint = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const complaint = {
//       comp_about: formData.get("comp_about"),
//       comp_message: formData.get("comp_message"),
//       date: formData.get("date"),
//       seen: 0,
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/complaints", complaint);
//       setUserComp([...userComp, response.data]);
//     } catch (error) {
//       console.error("Error submitting complaint:", error);
//     }
//   };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Dashboard</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="btn btn-outline-primary" onClick={() => navigate('/admin')}>
                  <FontAwesomeIcon icon={faUserCog} className="me-2" />
                  Admin
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <h1 className="mt-4 mb-4">Dashboard</h1>

        <div className="row">
          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                      Total Interns
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">25</div>
                  </div>
                  <div className="col-auto">
                    <FontAwesomeIcon icon={faUserGraduate} size="2x" className="text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                      Active Groups
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">5</div>
                  </div>
                  <div className="col-auto">
                    <FontAwesomeIcon icon={faUsers} size="2x" className="text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-info shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                      Average Performance
                    </div>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">78%</div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "78%" }}
                            aria-valuenow="78"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <FontAwesomeIcon icon={faChartLine} size="2x" className="text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
              <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                      Pending Tasks
                    </div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                  </div>
                  <div className="col-auto">
                    <FontAwesomeIcon icon={faTasks} size="2x" className="text-gray-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Performance Overview</h6>
              </div>
              <div className="card-body">
                <div className="chart-area">
                  <Line data={performanceData} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-5">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">Group Distribution</h6>
              </div>
              <div className="card-body">
                <div className="chart-pie pt-4 pb-2">
                  <Pie data={groupDistributionData} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Upcoming Events</h6>
              </div>
              <div className="card-body">
                <div className="mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-info" />
                  Team Building Workshop - August 15, 2024
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-info" />
                  Quarterly Performance Review - September 1, 2024
                </div>
                <div>
                  <FontAwesomeIcon icon={faCalendarAlt} className="mr-2 text-info" />
                  Tech Talk Series - September 10, 2024
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Recent Announcements</h6>
              </div>
              <div className="card-body">
                <div className="mb-2">
                  <FontAwesomeIcon icon={faComments} className="mr-2 text-warning" />
                  New project kickoff meeting scheduled for next week.
                </div>
                <div className="mb-2">
                  <FontAwesomeIcon icon={faComments} className="mr-2 text-warning" />
                  Congratulations to Team Alpha for completing their project ahead of schedule!
                </div>
                <div>
                  <FontAwesomeIcon icon={faComments} className="mr-2 text-warning" />
                  Reminder: Submit your weekly reports by Friday EOD.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
