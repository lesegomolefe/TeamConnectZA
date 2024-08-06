import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useRef, useState } from "react";
import { Form } from 'react-bootstrap';
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faUserCog } from '@fortawesome/free-solid-svg-icons';
import  './App.css';
// Updated search function


const searchPeople = (searchTerm) => {
  const people = [
    {
      name: "John Doe",
      skills: ["JavaScript", "React", "Node.js"],
      profilePicture: "https://via.placeholder.com/150",
      email: "john@example.com",
      phone: "123-456-7890",
      bio: "A passionate developer.",
      occupation: "Software Developer",
      summary: "Expert in JavaScript and web development.",
    },
    {
      name: "Jane Smith",
      skills: ["Python", "Django", "Machine Learning"],
      profilePicture: "https://via.placeholder.com/150",
      email: "jane@example.com",
      phone: "123-456-7891",
      bio: "An expert in Python and ML.",
      occupation: "Data Scientist",
      summary: "Specializes in data science and machine learning.",
    },
    {
      name: "Bob Johnson",
      skills: ["Java", "Spring", "Hibernate"],
      profilePicture: "https://via.placeholder.com/150",
      email: "bob@example.com",
      phone: "123-456-7892",
      bio: "Specializes in backend development.",
      occupation: "Backend Developer",
      summary: "Focuses on Java and Spring framework.",
    },
    {
      name: "Lesego Molefe",
      skills: ["C#", "C++", "python", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "Lesego@gmail.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Letago Willams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "Letago@gmail.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Prince Vilakazi",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "Prince@gmail.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Nhlala Boysens",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Sizakele Van DerMerwe",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
    {
      name: "Alice Williams",
      skills: ["C#", ".NET", "SQL Server"],
      profilePicture: "https://via.placeholder.com/150",
      email: "alice@example.com",
      phone: "123-456-7893",
      bio: "Experienced in .NET technologies.",
      occupation: "Full-Stack Developer",
      summary: "Expert in C# and .NET framework.",
    },
  ];

  return people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
};


function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [groupname, setGroupname] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
const [personToDelete, setPersonToDelete] = useState(null);

const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");
  const [internMessages, setInternMessages] = useState([
    { content: "Hello, this is a test message", date: "2024-08-01" },
    { content: "Another test message", date: "2024-08-02" },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  const [isDeleting, setIsDeleting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState([]);
  const [chatMessage, setChatMessage] = useState("");
  const [groups, setGroups] = useState([
    "Java Interns 2023",
    "The Zen Squad",
    "C# $.Net Interns 2022",
    "Liberty Admin Interns 2022",
    "Mobile App Development 2022",
    "Cybersecurity Interns 2022",
    "Mainframe Interns 2022",
  ]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [people, setPeople] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const dropdownRef = useRef(null);

 
  const handleDelete = (person) => {
    setPersonToDelete(person);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (password === "lesego") { // Replace with actual password check
      setIsDeleting(true);
      
      // Simulate a delay for the deletion process
      setTimeout(() => {
        console.log("Deleting person:", personToDelete);
        setSearchResults((prevResults) => {
          if (prevResults === null) return [];
          return prevResults.filter(person => person !== personToDelete);
        });
        setPassword('');
        setShowDeleteModal(false);
        setDeleteMessage(`${personToDelete.name} has been successfully deleted.`);
        setIsDeleting(false);
        
        // Clear the message after 3 seconds
        setTimeout(() => setDeleteMessage(''), 3000);
      }, 1000); // Simulated 1-second delay
    } else {
      alert("Incorrect password!");
    }
  };

  const handleCloseModal = () => {
    setShowDeleteModal(false);
    setPassword('');
  };
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const navigate = useNavigate();

  const handleProfileClick = () => {
    // Simulate fetching logged-in user profile
    const userProfile = {
      name: "Phumzile",
      profilePicture: "https://via.placeholder.com/150",
      email: "phumzile@gmail.com",
      phone: "277-456-7890",
      bio: "A passionate manager.",
      occupation: "Team Manager",
      summary: "Leading and managing team effectively.",
    };
    setUserProfile(userProfile);
    setEditMode(false);
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    // Chat submit logic here
    setChatMessage("");
  };

  

  const handleShowProgress = (person) => {
    navigate(`/track-progress/${person.id}`);
  };

  const handleProfileEdit = () => {
    setEditMode(true);
  };

  const handleProfileSave = () => {
    setEditMode(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setGroups([...groups, groupname]);
    setShowModal(false);
    setGroupname("");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      const results = searchPeople(searchTerm);
      setSearchResults(results);
    } else {
      setSearchResults(null);
    }
  };

  const handleShowProfile = (person) => {
    setUserProfile(person);
    setEditMode(false);
  };

  const handleCloseProfileModal = () => {
    setUserProfile(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSearchResults(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

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
            <form
              className="d-flex my-2 my-lg-0 mx-auto"
              onSubmit={handleSearch}
            >
              <div className="input-group" style={{ position: "relative" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by name or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-light" type="submit">
                  Search
                </button>
              </div>
            </form>

            {searchResults !== null && (
              <div
                ref={dropdownRef}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "100%",
                  backgroundColor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  zIndex: 1000,
                  maxHeight: "300px",
                  overflowY: "auto",
                }}
              >
                {searchResults.length > 0 ? (
                  <ul
                    style={{
                      listStyleType: "none",
                      padding: "10px",
                      margin: 0,
                    }}
                  >
                    {searchResults.map((person, index) => (
                      <li
                        key={index}
                        style={{
                          padding: "10px",
                          borderBottom:
                            index < searchResults.length - 1
                              ? "1px solid #eee"
                              : "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            borderLeft: "3px solid #007bff",
                            paddingLeft: "10px",
                          }}
                        >
                          <strong style={{ fontSize: "16px" }}>
                            {person.name}
                          </strong>
                          <br />
                          <small style={{ color: "#6c757d" }}>
                            {person.skills.join(", ")}
                          </small>
                        </div>
                        <div>
                          <button
                            className="btn btn-sm btn-info me-2"
                            onClick={() => handleShowProfile(person)}
                          >
                            View
                          </button>
                          <button
                            className="btn btn-sm btn-success me-2"
                            onClick={() => handleShowProgress(person)}
                          >
                            Progress
                          </button>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(person)}
                          >
                            Delete
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p style={{ padding: "10px", margin: 0 }}>
                    No people found with the specified name or skills.
                  </p>
                )}
              </div>
            )}

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Zensar Interns Groups
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {groups.map((group, index) => (
                    <li key={index}>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={() => setSelectedGroup(group)}
                      >
                        {group}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item">
                <button
                  onClick={() => console.log("Add Group")}
                  className="btn btn-outline-light me-2"
                >
                  Add Group
                </button>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light" href="/">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>



      {showDeleteModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <div className="custom-modal-header">
              <h5>Confirm Delete</h5>
              <button onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="custom-modal-body">
            <form>
                <div className="form-group">
                  <label htmlFor="formPassword">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="formPassword"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="custom-modal-footer">
  <button className="btn btn-secondary" onClick={handleCloseModal} disabled={isDeleting}>
    Cancel
  </button>
  <button className="btn btn-danger" onClick={confirmDelete} disabled={isDeleting}>
    {isDeleting ? (
      <>
        <span className="spinner d-inline-block me-2"></span>
        Deleting...
      </>
    ) : (
      'Confirm Delete'
    )}
  </button>
</div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
        }
        .custom-modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 400px;
          max-width: 100%;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
        }
        .custom-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #dee2e6;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .custom-modal-header h5 {
          margin: 0;
        }
        .custom-modal-header button {
          background: none;
          border: none;
          font-size: 1.5rem;
          line-height: 1;
          color: #000;
          cursor: pointer;
        }
        .custom-modal-body {
          margin-bottom: 20px;
        }
        .custom-modal-footer {
          display: flex;
          justify-content: flex-end;
        }
      `}</style>

      
      <br />
      <div
        style={{ marginLeft: "4%", marginRight: "4%" }}
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>Phumzile,</strong>
        <br />
        <br />
        {message || "Hope you are having a great day 😊"}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <div
        style={{
          paddingLeft: "5%",
          paddingRight: "5%",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FaUserCircle
          size={32}
          onClick={handleProfileClick}
          style={{ cursor: "pointer", marginRight: "10px" }}
        />
        <h1 style={{ textAlign: "right", margin: 0 }}>Hi, Phumzile</h1>
      </div>
      <div className="progress" style={{ height: "5px", marginTop: "10px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: "100%" }}
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", marginRight: "15%" }}
          tabIndex="-1"
          role="dialog"
        >
          <form onSubmit={handleSubmit}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add new Group</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleModal}
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    {message || "Input new group"}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="groupname" className="form-label">
                      Group Name
                    </label>
                    <input
                      required
                      type="text"
                      name="groupname"
                      className="form-control"
                      id="groupname"
                      value={groupname}
                      onChange={(e) => setGroupname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleModal}
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}

      <h1>Write new message</h1>
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
                  aria-selected="true"
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
                  aria-selected="false"
                >
                  Messages{" "}
                  <span className="badge text-bg-warning">
                    {messages.length}
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
                <button
                  className="nav-link"
                  id="nav-chat-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-chat"
                  type="button"
                  role="tab"
                  aria-controls="nav-chat"
                  aria-selected="false"
                >
                  Chat
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
                <form onSubmit={handleSubmit}>
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
                    <label htmlFor="message" className="form-label">
                      Notice message
                    </label>
                    <textarea
                      name="message"
                      className="form-control"
                      id="message"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <div className="dropdown">
                      <button
                        className="btn btn-primary "
                        type="button"
                        id="postDropdown"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Post
                      </button>
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
                {/* Loop through complaints array */}

                {messages.length === 0 ? (
                  <p>No messages at the moment.</p>
                ) : (
                  <div>
                    <ul>
                      {messages.map((message, index) => (
                        <li key={index}>{message}</li>
                      ))}
                    </ul>
                    <textarea
                      className="form-control mt-3"
                      rows="3"
                      placeholder="Type your message here..."
                    ></textarea>
                    <button className="btn btn-primary mt-2">Send</button>
                  </div>
                )}
                {/* Display complaints here */}
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

                {privateMessages.length === 0 ? (
                  <p>No private messages at the moment.</p>
                ) : (
                  <div>
                    <ul>
                      {privateMessages.map((message, index) => (
                        <li key={index}>{message}</li>
                      ))}
                    </ul>
                    <textarea
                      className="form-control mt-3"
                      rows="3"
                      placeholder="Type your private message here..."
                    ></textarea>
                    <button className="btn btn-primary mt-2">
                      Send Private Message
                    </button>
                  </div>
                )}

                <div
                  className="tab-pane fade"
                  id="nav-private"
                  role="tabpanel"
                  aria-labelledby="nav-private-tab"
                  tabIndex="0"
                >
                  <br />

                  {console.log("internMessages:", internMessages)}
                  {internMessages.length > 0 ? (
                    internMessages.map((message, index) => {
                      console.log("Rendering message:", message);
                      return (
                        <div key={index} className="card mb-3">
                          <div className="card-body">
                            <h5 className="card-title">Message from Intern</h5>
                            <p className="card-text">{message.content}</p>
                            <p className="card-text">
                              <small className="text-muted">
                                Sent on: {message.date}
                              </small>
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p>No messages from interns at this time.</p>
                  )}
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="nav-chat"
                role="tabpanel"
                aria-labelledby="nav-chat-tab"
                tabIndex="0"
              >
                <br />
                <form onSubmit={handleChatSubmit}>
                  <div className="mb-3">
                    <label htmlFor="chatMessage" className="form-label">
                      Send a message
                    </label>
                    <textarea
                      name="chatMessage"
                      className="form-control"
                      id="chatMessage"
                      rows="3"
                      value={chatMessage}
                      onChange={(e) => setChatMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-primary">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

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
}

export default Admin;
