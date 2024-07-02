import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Admin() {
  const [group, setGroup] = useState("");
  const [message, setMessage] = useState("");
  const [noticeMessage, setNoticeMessage] = useState("");
  const [complaints, setComplaints] = useState([]); // Example complaints array
  const [showGroupForm, setShowGroupForm] = useState(false); // State to toggle the display of the group form
  const [showInternForm, setShowInternForm] = useState(false);
  const [internFullName, setInternFullName] = useState('');
  const [internEmail, setInternEmail] = useState('');
  const [internEmployeeNumber, setInternEmployeeNumber] = useState('');

  const handleGroupSubmit = (e) => {
    e.preventDefault();
    console.log("Group form submitted!");
    // Add logic to handle group form submission
    setShowGroupForm(false); // Hide the form after submitting
  };

  const handleInternSubmit = (e) => {
    e.preventDefault();
    console.log('Intern form submitted!', { internFullName, internEmail, internEmployeeNumber });
    setShowInternForm(false);
    // Reset form fields
    setInternFullName('');
    setInternEmail('');
    setInternEmployeeNumber('');
  };

  const handleNoticeSubmit = (e) => {
    e.preventDefault();
    console.log("Notice form submitted!");
    // Add logic to handle notice form submission
  };

  return (
    <div>
      <nav
        style={{ display: "flex", justifyContent: "space-between" }}
        className="navbar navbar-expand-lg bg-dark"
      >
        <div style={{ color: "white" }} className="container-md">
          <h1>TeamConnect</h1>
          <div>
            <div className="dropdown d-inline-block me-2">
              <button
                className="btn btn-outline-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Zensar Interns Groups
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <button
                    className="dropdown-item"
                    onClick={() => setShowGroupForm(true)}
                  >
                    Add Group
                  </button>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Java Interns 2023
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    The Zen Squad
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    C# $.Net Interns 2022
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Liberty Admin Interns 2022
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mobile App Development 2022
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cybersecurity Interns 2022
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Mainframe Interns 2022
                  </a>
                </li>
              </ul>
            </div>

            <button className="btn btn-outline-primary me-2" onClick={() => setShowInternForm(true)}>Add Intern</button>
            <button type="button" className="btn btn-outline-primary">
              <a
                style={{ textDecoration: "none", color: "blue" }}
                href="/logout"
              >
                Logout
              </a>
            </button>
          </div>
        </div>
      </nav>
      <br />
      <div
        style={{ marginLeft: "4%", marginRight: "4%" }}
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Phumzile,</strong>
        <br />
        <br />
        {message ? message : "Hope you having a great day 😊"}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <h1 style={{ textAlign: "right" }}>Hi, Phumzile</h1>
        <div className="progress" style={{ height: "5px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Example 1px high"
            style={{ width: "100%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>

        {/* Form for adding a group */}
        {showGroupForm && (
          <form
            onSubmit={handleGroupSubmit}
            style={{
              marginTop: "20px",
              border: "1px solid blue",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <div className="mb-3">
              <label htmlFor="groupName" className="form-label">
                Group Name
              </label>
              <input
                type="text"
                className="form-control"
                id="groupName"
                placeholder="Enter group name"
                value={group}
                onChange={(e) => setGroup(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="groupPicture" className="form-label">
                Group Picture
              </label>
              <input type="file" className="form-control" id="groupPicture" />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => setShowGroupForm(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add Group
              </button>
            </div>
          </form>
        )}

        {showInternForm && (
          <form
            onSubmit={handleInternSubmit}
            style={{
              marginTop: "20px",
              border: "1px solid blue",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
          
            <div className="mb-3">
              <label htmlFor="internFullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="internFullName"
                placeholder="Enter full name"
                value={internFullName}
                onChange={(e) => setInternFullName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="internEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="internEmail"
                placeholder="Enter email"
                value={internEmail}
                onChange={(e) => setInternEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="internEmployeeNumber" className="form-label">
                Employee Number
              </label>
              <input
                type="text"
                className="form-control"
                id="internEmployeeNumber"
                placeholder="Enter employee number"
                value={internEmployeeNumber}
                onChange={(e) => setInternEmployeeNumber(e.target.value)}
                required
              />
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                type="button"
                className="btn btn-secondary me-2"
                onClick={() => setShowInternForm(false)}
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Add Intern
              </button>
            </div>
          </form>
        )}

        <h1>Complains</h1>
        <br />
        <div
          style={{
            border: "1px solid blue",
            padding: "1%",
            borderRadius: "15px",
          }}
        >
          <div
            style={{ borderRadius: "8px" }}
            className="alert alert-primary alert-dismissible fade show"
            role="alert"
          >
            <strong>USERS NOTIFICATION</strong>
            <br />
            <br />
            <p
              style={{
                margin: "10px",
                textAlign: "right",
                fontSize: "12px",
                backgroundColor: "#0d6efd",
                borderRadius: "7px",
                padding: "7px",
                fontWeight: "700",
                color: "white",
              }}
            >
              {/* Display notice date here */}
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div className="container-sm">
            <br />
            <div className="row g-0 text-center">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="false"
                  >
                    Notice
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="true"
                  >
                    Complains{" "}
                    <span className="badge text-bg-warning">
                      {complaints.length}
                    </span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-private-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-private"
                    type="button"
                    role="tab"
                    aria-controls="nav-private"
                    aria-selected="false"
                  >
                    Private
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  style={{ textAlign: "left" }}
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex="0"
                >
                  <br />
                  <form onSubmit={handleNoticeSubmit}>
                    <div className="mb-3">
                      <label htmlFor="postedBy" className="form-label">
                        Posted by
                      </label>
                      <input
                        disabled
                        type="email"
                        className="form-control"
                        id="postedBy"
                        placeholder="admin@zensar.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="noticeMessage" className="form-label">
                        Notice message
                      </label>
                      <textarea
                        name="noticeMessage"
                        className="form-control"
                        id="noticeMessage"
                        rows="3"
                        value={noticeMessage}
                        onChange={(e) => setNoticeMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <div className="dropdown">
                        <button
                          className="btn btn-primary dropdown-toggle"
                          type="button"
                          id="postDropdown"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Post
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="postDropdown"
                        >
                          <li>
                            <button className="dropdown-item" type="submit">
                              Post Notice
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Post Announcement
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item" type="button">
                              Post Reminder
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex="0"
                >
                  <br />
                  {complaints.length > 0 ? (
                    complaints.map((complaint, index) => (
                      <div
                        key={index}
                        className="alert alert-warning"
                        role="alert"
                      >
                        {complaint}
                      </div>
                    ))
                  ) : (
                    <p>No complaints to display.</p>
                  )}
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-private"
                  role="tabpanel"
                  aria-labelledby="nav-private-tab"
                  tabIndex="0"
                >
                  <br />
                  {/* Private content here */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  );
}

export default Admin;