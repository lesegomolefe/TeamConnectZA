import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InternProfile = () => {
  const [notice, setNotice] = useState({
    message: "Sample notification message",
    date: new Date(),
  });

  const [session, setSession] = useState({
    firstname: "Lesego",
    lastname: "Molefe",
  });

  const [editMode, setEditMode] = useState(false);

  const handleProfileEdit = () => {
    setEditMode(true);
  };

  const handleProfileSave = () => {
    setEditMode(false);
  };

  const [msg, setMsg] = useState("");
  const [employees, setEmployees] = useState([
    { id: 1, name: "Prince", surname: "Vilakazi" },
    { id: 2, name: "Letago", surname: "Molefe" },
  ]);

  const [userComp, setUserComp] = useState([
    {
      comp_id: 1,
      comp_about: "1 Prince Vilakazi",
      comp_message: "Message 1",
      date: new Date(),
      seen: 1,
    },
    {
      comp_id: 2,
      comp_about: "2 Letago Willams",
      comp_message: "Message 2",
      date: new Date(),
      seen: 0,
    },
  ]);

  const [compAboutUser, setCompAboutUser] = useState([
    {
      comp_from: "Prince TuT",
      comp_message: "Message about you 1",
      date: new Date(),
    },
  ]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [cvFile, setCvFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const Navigate = useNavigate();

  const handleFileUpload = (e) => {
    e.preventDefault();
    setCvFile(selectedFile);
  };

  const [activeTab, setActiveTab] = useState("complains");
  const [userProfile, setUserProfile] = useState(null);
  const handleProfileClick = () => {
    const userProfile = {
      name: "Lesego Molefe",
      profilePicture: "https://via.placeholder.com/150",
      email: "lesego@gmail.com",
      phone: "277-456-7890",
      bio: "A passionate software developer.",
      occupation: "Software Engineer",
      summary: "Leading and managing team effectively.",
    };
    setUserProfile(userProfile);
    setEditMode(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...userProfile });

  const handleCloseProfileModal = () => {
    setUserProfile(null);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = () => {
    setUserProfile({ ...editedProfile, cv: cvFile });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewComplain = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newComplain = {
      comp_id: userComp.length + 1,
      comp_about: formData.get("comp_about"),
      comp_message: formData.get("comp_message"),
      date: new Date(formData.get("date")),
      seen: 0,
    };
    setUserComp((prevComplains) => [...prevComplains, newComplain]);
    e.target.reset();
  };

  const handleSubmit = (person) => {
    Navigate(`/track-progress/${person.id}`);
  };

  const [messages, setMessages] = useState([]);
  const handleSendMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newMessage = {
      id: messages.length + 1,
      message: formData.get("message"),
      date: new Date(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    e.target.reset();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TeamConnect
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <form
                  onSubmit={handleFileUpload}
                  encType="multipart/form-data"
                  className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center"
                >
                  <label
                    htmlFor="cv-upload"
                    className="btn btn-outline-primary mx-2 my-1 my-lg-0"
                  >
                    Upload CV
                  </label>
                  <input
                    type="file"
                    id="cv-upload"
                    accept=".pdf,.doc,.docx"
                    style={{ display: "none" }}
                    onChange={handleFileChange}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2 my-1 my-lg-0"
                    onClick={handleSubmit}
                  >
                    Progress
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mx-2 my-1 my-lg-0"
                  >
                    <a
                      style={{ textDecoration: "none", color: "blue" }}
                      href="/"
                    >
                      Logout
                    </a>
                  </button>
                </form>
              </li>
            </ul>
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
          {notice.date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
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
          <FaUserCircle size={30} onClick={handleProfileClick} />
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

        <h1></h1>
        <br />
        <div
          style={{
            border: "1px solid blue",
            padding: "2%",
            borderRadius: "15px",
          }}
        >
          <form onSubmit={handleNewComplain}>
            <div className="container-sm">
              <select
                required
                name="comp_about"
                className="form-select"
                aria-label="Default select example"
              >
                <option value="" disabled selected>
                  Please choose a member to write message to
                </option>
                {employees.map((emp) => (
                  <option
                    key={emp.id}
                    value={`${emp.id} ${emp.name} ${emp.surname}`}
                  >
                    {emp.name} {emp.surname}
                  </option>
                ))}
              </select>
              <br />

              <div className="form-floating mb-3">
                <input
                  required
                  name="date"
                  type="date"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput">Date</label>
              </div>
              <div className="form-floating">
                <textarea
                  required
                  name="comp_message"
                  className="form-control"
                  id="floatingInput"
                  rows="3"
                  aria-label="With textarea"
                  style={{ height: "150px" }}
                ></textarea>
                <label htmlFor="floatingInput">Message</label>
              </div>
            </div>
            <br />
            <button
              style={{ width: "100%" }}
              type="submit"
              className="btn btn-primary"
            >
              Send Message
            </button>
          </form>
        </div>
        <br />

        <div className="tabs is-centered">
          <ul>
            <li
            className={activeTab === "complains" ? "is-active" : ""}
            onClick={() => handleTabChange("announcement")}
             >
                Announcements
            
            </li>
            <li
              className={activeTab === "complains" ? "is-active" : ""}
              onClick={() => handleTabChange("complains")}
            >
              <a>Messages</a>
            </li>
            <li
              className={activeTab === "aboutMe" ? "is-active" : ""}
              onClick={() => handleTabChange("aboutMe")}
            >
              <a>About me</a>
            </li>
            <li
              className={activeTab === "chat" ? "is-active" : ""}
              onClick={() => handleTabChange("chat")}
            >
              <a>Chat</a>
            </li>
          </ul>
        </div>

        {activeTab === "complains" && (
          <div>
            <h2>Message</h2>
            <div className="accordion" id="complainsAccordion">
              {userComp.map((comp) => (
                <div key={comp.comp_id} className="accordion-item">
                  <h2
                    className="accordion-header"
                    id={`heading${comp.comp_id}`}
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${comp.comp_id}`}
                      aria-expanded="true"
                      aria-controls={`collapse${comp.comp_id}`}
                    >
                      #{comp.comp_id} - About: {comp.comp_about}
                    </button>
                  </h2>
                  <div
                    id={`collapse${comp.comp_id}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`heading${comp.comp_id}`}
                    data-bs-parent="#complainsAccordion"
                  >
                    <div className="accordion-body">
                      <strong>Message:</strong> {comp.comp_message}
                      <br />
                      <strong>Time:</strong>{" "}
                      {comp.date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "aboutMe" && (
          <div>
            <h2>Complains About Me</h2>
            <div className="accordion" id="aboutMeAccordion">
              {compAboutUser.map((comp, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header" id={`headingAbout${index}`}>
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapseAbout${index}`}
                      aria-expanded="true"
                      aria-controls={`collapseAbout${index}`}
                    >
                      Message from: {comp.comp_from}
                    </button>
                  </h2>
                  <div
                    id={`collapseAbout${index}`}
                    className="accordion-collapse collapse show"
                    aria-labelledby={`headingAbout${index}`}
                    data-bs-parent="#aboutMeAccordion"
                  >
                    <div className="accordion-body">
                      <strong>Message:</strong> {comp.comp_message}
                      <br />
                      <strong>Time:</strong>{" "}
                      {comp.date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "chat" && (
          <div>
            <form onSubmit={handleSendMessage}>
              <div className="mb-3">
                <textarea
                  required
                  name="message"
                  className="form-control"
                  id="message"
                  rows="3"
                >
                  <label htmlFor="message" className="form-label">
                    Your Message
                  </label>
                </textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
            <div className="mt-4">
              <h3>Chat History</h3>
              <ul className="list-group">
                {messages.map((msg) => (
                  <li key={msg.id} className="list-group-item">
                    <strong>
                      {msg.date.toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                      :
                    </strong>{" "}
                    {msg.message}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {userProfile && (
        <div className="modal show" tabIndex="-1" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {editMode ? "Edit Profile" : "Profile"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleCloseProfileModal}
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <div
                  className="card"
                  style={{
                    width: "18rem",
                    textAlign: "center",
                    margin: "auto",
                    border: "2px solid blue",
                  }}
                >
                  <div
                    className="card-body"
                    style={{
                      text_decoration: "none",
                      color: "#1a73e8",
                      display: "block",
                      border: "none",
                      justifyContent: "space-between",
                      borderTop: "1px solid #e0e0e0",
                    }}
                  >
                    {editMode ? (
                      <>
                        <div
                          className="mb-3"
                          style={{
                            textDecoration: "none",
                            color: "#1a73e8",
                            fontSize: "14px",
                          }}
                        >
                          <label htmlFor="name" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={userProfile.name}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="occupation" className="form-label">
                            Occupation
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="occupation"
                            value={userProfile.occupation}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                occupation: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="summary" className="form-label">
                            Summary
                          </label>
                          <textarea
                            className="form-control"
                            id="summary"
                            rows="3"
                            value={userProfile.summary}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                summary: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={userProfile.email}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                email: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            value={userProfile.phone}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                phone: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="mb-3">
                          <label htmlFor="bio" className="form-label">
                            Bio
                          </label>
                          <textarea
                            className="form-control"
                            id="bio"
                            rows="3"
                            value={userProfile.bio}
                            onChange={(e) =>
                              setUserProfile({
                                ...userProfile,
                                bio: e.target.value,
                              })
                            }
                          ></textarea>
                        </div>
                      </>
                    ) : (
                      <>
                        <h5
                          className="card-title"
                          style={{ marginBottom: "0", fontSize: "1.2rem" }}
                        >
                          {userProfile.name}
                        </h5>
                        <p className="card-text" style={{ textAlign: "left" }}>
                          <strong>Occupation:</strong> {userProfile.occupation}
                          <br />
                          <strong>Summary:</strong> {userProfile.summary}
                          <br />
                          <strong>Email:</strong> {userProfile.email}
                          <br />
                          <strong>Phone:</strong> {userProfile.phone}
                          <br />
                          <strong>Bio:</strong> {userProfile.bio}
                          <br />
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {editMode ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleProfileSave}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleProfileEdit}
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseProfileModal}
                >
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

export default InternProfile;
