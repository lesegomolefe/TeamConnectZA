import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bulma/css/bulma.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";

const Dashboard = () => {
  const [notice, setNotice] = useState({
    message: "Sample notification message",
    date: new Date(),
  });

  const [session, setSession] = useState({
    firstname: "Nhlalala",
    lastname: "Mudanisi",
  });

  const [msg, setMsg] = useState("");
  const [employees, setEmployees] = useState([]);
  const [userComp, setUserComp] = useState([]);
  const [compAboutUser, setCompAboutUser] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [activeTab, setActiveTab] = useState("complains");
  const [userProfile, setUserProfile] = useState({
    name: "Nhlalala Mudanisi",
    email: "nhlalala60@example.com",
    phone: "0725753318",
    bio: "I am a passionate software developer with expertise in React and Node.js.",
    skills: "php, java, html, js",
    profilePicture: "icon.jpg",
  });
  const [showProfileModal, setShowProfileModal] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleProfileClick = () => {
    setShowProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/complaints");
        setUserComp(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchEmployees();
    fetchComplaints();
  }, []);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmitComplaint = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const complaint = {
      comp_about: formData.get("comp_about"),
      comp_message: formData.get("comp_message"),
      date: formData.get("date"),
      seen: 0,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/complaints", complaint);
      setUserComp([...userComp, response.data]);
    } catch (error) {
      console.error("Error submitting complaint:", error);
    }
  };

  return (
    <div>
      <nav
        style={{ display: "space-between", position: "fixed", width: "100%" }}
        className="navbar navbar-expand-lg bg-dark"
      >
        <div style={{ color: "white" }} className="container-md">
          <h1>TeamConnect</h1>
          <div>
            <form onSubmit={handleFileUpload} encType="multipart/form-data">
              <label htmlFor="cv-upload" className="btn btn-outline-primary mx-2">
                Upload CV
              </label>
              <input
                type="file"
                id="cv-upload"
                accept=".pdf,.doc,.docx"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <button type="submit" className="btn btn-outline-primary mx-2">
                Submit
              </button>
              <button type="button" className="btn btn-outline-primary">
                <a style={{ textDecoration: "none", color: "blue" }} href="/">
                  Logout
                </a>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <br />
      <br />
      <br />
      <div
        style={{ margin: "7px" }}
        className="alert alert-primary alert-dismissible fade show"
        role="alert"
      >
        <strong>NOTIFICATION</strong>
        <br />
        <br />
        {notice.message}
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
          {notice.date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <div
        style={{ marginLeft: "4%", marginRight: "4%" }}
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{session.firstname},</strong>
        {msg || "Hope you having a great day 😊😊."}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <div style={{ paddingLeft: "5%", paddingRight: "5%" }}>
        <h1 style={{ textAlign: "right" }}>
          {session.firstname} {session.lastname}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
            onClick={handleProfileClick}
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
        </h1>
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

        <h1>Write a new Message</h1>
        <br />
        <div
          style={{
            border: "1px solid blue",
            padding: "2%",
            borderRadius: "15px",
          }}
        >
          <form onSubmit={handleSubmitComplaint}>
            <div className="container-sm">
              {/* <select
                required
                name="comp_about"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="">Please choose a member to complain about</option>
                {employees.map((emp) => (
                  <option
                    key={emp.id}
                    value={`${emp.id} ${emp.name} ${emp.surname}`}
                  >
                    {emp.name} {emp.surname}
                  </option>
                ))}
              </select> */}
              <br />

              <div className="form-floating mb-3">
                <input
                  required
                  name="date"
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="when did it happen?"
                />
                <label htmlFor="floatingInput">Date</label>
              </div>
              <br />
              <div className="form-floating">
                <textarea
                  required
                  name="comp_message"
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  style={{ height: "150px" }}
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
              </div>
              <br />
              <button type="submit" className="btn btn-outline-primary">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>

      {showProfileModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profile</h5>
                <button type="button" className="btn-close" onClick={handleCloseProfileModal}></button>
              </div>
              <div className="modal-body">
                <img
                  src={userProfile.profilePicture}
                  alt="Profile"
                  className="img-fluid rounded-circle"
                />
                <h3>{userProfile.name}</h3>
                <p><strong>Email:</strong> {userProfile.email}</p>
                <p><strong>Phone:</strong> {userProfile.phone}</p>
                <p><strong>Bio:</strong> {userProfile.bio}</p>
                <p><strong>Skills:</strong> {userProfile.skills}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseProfileModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
