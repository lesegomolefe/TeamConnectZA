import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

function Admin() {
  const [showModal, setShowModal] = useState(false);
  const [id, setId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [group, setGroup] = useState('');
  const [groupPicture, setGroupPicture] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleModal = () => {
    setShowModal(!showModal);
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    setShowModal(true); // Close the modal after submitting the form

  
  
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
                <li><button className="dropdown-item" onClick={handleShow}>Add Group</button></li>
                <li><a className="dropdown-item" href="#">Java Interns 2023</a></li>
                <li><a className="dropdown-item" href="#">The Zen Squad</a></li>
                <li><a className="dropdown-item" href="#">C# $.Net Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Liberty Admin Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Mobile App Development 2022</a></li>
                <li><a className="dropdown-item" href="#">Cybersecurity Interns 2022</a></li>
                <li><a className="dropdown-item" href="#">Mainframe Interns 2022</a></li>
              </ul>
            </div>

            <button onClick={handleModal} className="btn btn-outline-primary me-2">Add Intern</button>
            <button type="button" className="btn btn-outline-primary">
              <a style={{ textDecoration: 'none', color: 'blue' }} href="/">
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

        {/* Modal for adding a group */}
        <Modal show={showModal} onHide={handleClose}>
  <Form onSubmit={handleSubmit}>
    <Modal.Header closeButton>
      <Modal.Title>Add Group</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form.Group className="mb-3" controlId="formGroupName">
  <Form.Label>Group Name</Form.Label>
  <Form.Control type="text" placeholder="Enter group name" value={group} onChange={(e) => setGroup(e.target.value)} />
</Form.Group>

      <Form.Group controlId="formGroupPicture">
        <Form.Label>Group Picture</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Button variant="primary" type="submit">Add Group</Button>
    </Modal.Footer>
  </Form>
</Modal>



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
