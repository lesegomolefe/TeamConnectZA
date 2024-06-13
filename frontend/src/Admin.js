import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setShowModal(false); // Close the modal after submitting the form
  };

  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-between' }} className="navbar navbar-expand-lg bg-dark">
        <div style={{ color: 'white' }} className="container-md">
          <h1>TeamConnect</h1>
          <div>
            <div className="dropdown d-inline-block me-2">
              <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">  
                Zensar Interns Groups
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                <li><a className="dropdown-item" href="#">Java Interns 2023</a></li>
                <li><a className="dropdown-item" href="#">The Zen Squad</a></li>
                <li><a className="dropdown-item" href="#">C# $.Net Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Liberty Admin Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Mobile App Develeopment 2022</a></li>
                <li><a className="dropdown-item" href="#">Cybersecuty Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Mainframe Interns 2022</a></li>
              </ul>
            </div>
            
            <button onClick={handleModal} className="btn btn-outline-primary me-2">Add Group</button>
            <button type="button" className="btn btn-outline-primary">
              <a style={{ textDecoration: 'none', color: 'blue' }} href="/logout">
                Logout
              </a>
            </button>
          </div>
        </div>
      </nav>
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
                    <h5 className="modal-title">Add new member</h5>
                    <button type="button" className="btn-close" onClick={handleModal} aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      {message ? message : 'Input new member information'}
                      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="id" className="form-label">ID number</label>
                      <input required type="number" name="id" className="form-control" id="id" placeholder="" value={id} onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="firstname" className="form-label">Firstname</label>
                      <input required type="text" name="firstname" className="form-control" id="firstname" placeholder="" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lastname" className="form-label">Lastname</label>
                      <input required type="text" name="lastname" className="form-control" id="lastname" placeholder="" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" name="email" className="form-control" id="email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
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

        <h1>Complains</h1>
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
                    Complains <span className="badge text-bg-warning">{/* Length of complains array */}</span>
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
                  {/* Loop through complains array */}
                  {/* Display complains here */}
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
