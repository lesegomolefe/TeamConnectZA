import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [complaintsCount, setComplaintsCount] = useState(0);
  const [complaintsMessages, setComplaintsMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  const searchBySkills = (searchTerm) => {
    const people = [
      { name: "John Doe", skills: ["JavaScript", "React", "Node.js"] },
      { name: "Jane Smith", skills: ["Python", "Django", "Machine Learning"] },
      { name: "Bob Johnson", skills: ["Java", "Spring", "Hibernate"] },
      { name: "Alice Williams", skills: ["C#", ".NET", "SQL Server"] },
    ];
  
    return people.filter(person => 
      person.skills.some(skill => 
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
 
  
  

  useEffect(() => {
    const fetchComplaints = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get('http://localhost:5000/api/complaints');
        setComplaintsMessages(response.data);
        setComplaintsCount(response.data.length);
      } catch (error) {
        console.error('Failed to fetch complaints', error);
        setError('Failed to fetch complaints. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchComplaints();
  }, []);

  

  const handleModal = () => {
    setShowModal(!showModal);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    const results = searchBySkills(searchTerm);
    setSearchResults(results);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGroupName.trim()) {
      setGroups([...groups, newGroupName]);
      setNewGroupName('');
      setShowModal(false);
    }
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }} className="navbar navbar-expand-lg bg-dark">
        <div style={{ color: 'white' ,display:'flex', alignItems :'center' }} className="container-md">
          <h1>TeamConnect</h1>
          <div>
          <form onSubmit={handleSearch} className="input-group" style={{width: '300px', marginLeft: 'auto', marginRight: '10px'}}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search by skills..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
            <div className="dropdown d-inline-block me-2">
              <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">  
                Zensar Interns Groups
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {groups.map((group, index) => (
                  <li key={index}><a className="dropdown-item" href="#">{group}</a></li>
                ))}
              </ul>
            </div>
            
            <button onClick={handleModal} className="btn btn-outline-primary me-2">Add Group</button>
            <button type="button" className="btn btn-outline-primary">
              <a style={{ textDecoration: 'none', color: 'blue' }} href="/">
                Logout
              </a>
            </button>
          </div>
        </div>
      </nav>
      {searchResults.length > 0 && (
        <div style={{position: 'absolute', top: '60px', right: '20px', width: '300px', backgroundColor: 'white', border: '1px solid #ddd', borderRadius: '4px', padding: '10px', zIndex: 1000}}>
          <h6>People with matching skills:</h6>
          <ul style={{listStyleType: 'none', padding: 0}}>
            {searchResults.map((person, index) => (
              <li key={index}>{person.name} - {person.skills.join(', ')}</li>
            ))}
          </ul>
        </div>
      )}
      <br />
      <div style={{ marginLeft: '4%', marginRight: '4%' }} className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Phumzile,</strong>
        <br /><br />
        {message ? message : 'Hope you having a great day 😊'}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <br />
      <div style={{ paddingLeft: '5%', paddingRight: '5%' }}>
        <h1 style={{ textAlign: 'right' }}>Hi, Phumzile</h1>
        <div className="progress" style={{ height: '5px' }}>
          <div className="progress-bar" role="progressbar" aria-label="Example 1px high" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>

        {/* Modal */}
        {showModal &&
          <div className="modal fade show" style={{ display: 'block', marginRight: '15%' }} tabIndex="-1" role="dialog">
            <form onSubmit={handleSubmit}>
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add new Group</h5>
                    <button type="button" className="btn-close" onClick={handleModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      {message ? message : 'Input new group name'}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="groupname" className="form-label">Group Name</label>
                      <input 
                        required 
                        type="text" 
                        name="groupname" 
                        className="form-control" 
                        id="groupname" 
                        placeholder="Enter group name" 
                        value={newGroupName} 
                        onChange={(e) => setNewGroupName(e.target.value)} 
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleModal}>Close</button>
                    <button type="submit" className="btn btn-primary">Add</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        }

        <h1>Messages</h1>
        <br />
        <div style={{ border: '1px solid blue', padding: '1%', borderRadius: '15px' }}>
          <div style={{ borderRadius: '8px' }} className="alert alert-primary alert-dismissible fade show" role="alert">
            <strong>USERS NOTIFICATION</strong>
            <br /><br />
            <p style={{ margin: '10px', textAlign: 'right', fontSize: '12px', backgroundColor: '#0d6efd', borderRadius: '7px', padding: '7px', fontWeight: '700', color: 'white' }}>
              {/* Display notice date here */}
            </p>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
          <div className="container-sm">
            <br />
            <div className="row g-0 text-center">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="false">
                    Notice
                  </button>
                  <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="true">
                    Messages <span className="badge text-bg-warning">{complaintsCount}</span>
                  </button>
                  <button className="nav-link" id="nav-private-tab" data-bs-toggle="tab" data-bs-target="#nav-private" type="button" role="tab" aria-controls="nav-private" aria-selected="false">
                    Private
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div style={{ textAlign: 'left' }} className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                  <br />
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="postedBy" className="form-label">Posted by</label>
                      <input disabled type="email" className="form-control" id="postedBy" placeholder="admin@zensar.com" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Notice message</label>
                      <textarea name="message" className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <div className="dropdown">
                        <button className="btn btn-primary dropdown-toggle" type="button" id="postDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                          Post
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="postDropdown">
                          <li><button className="dropdown-item" type="submit">Post Notice</button></li>
                          <li><button className="dropdown-item" type="button">Post Announcement</button></li>
                          <li><button className="dropdown-item" type="button">Post Reminder</button></li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                  <br />
                  {isLoading ? (
                    <p>Loading complaints...</p>
                  ) : error ? (
                    <p>{error}</p>
                  ) : complaintsMessages.length > 0 ? (
                    <ul className="list-group">
                      {complaintsMessages.map((complaint, index) => (
                        <li key={index} className="list-group-item">
                          <strong>Date:</strong> {new Date(complaint.date).toLocaleDateString()}<br />
                          <strong>Message:</strong> {complaint.comp_message}<br />
                          <strong>Seen:</strong> {complaint.seen ? 'Yes' : 'No'}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No complaints found.</p>
                  )}
                </div>
                <div className="tab-pane fade" id="nav-private" role="tabpanel" aria-labelledby="nav-private-tab" tabIndex="0">
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