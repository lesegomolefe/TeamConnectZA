import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { register } from './api';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNo, setIdNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await register({ firstName, lastName, idNo, email, password });
          console.log(response.data);
          setMsg('Registration successful!');
          
          
        } catch (error) {
          console.error('Registration error:', error);
          setMsg('Registration failed. Please try again.');
        }
      };

    return (
        <div className="login" style={{ backgroundColor: 'rgb(245, 246, 250)', marginLeft: '15%', marginRight: '15%', marginTop: '10%', width: '70%', border: '1px solid rgb(38, 0, 70)', borderRadius: '15px', padding: '15px', textAlign: 'center' }}>
            <h1>TeamConnect</h1>
            <p>Hi newbie, Please register.</p>
         
            <p style={{ margin: 'auto', width: '50%', textAlign: 'center', backgroundColor: '#0d6efd', color: 'white', borderRadius: '25px' }}>{msg}</p>
            <div className="progress" style={{ height: '1px' }}>
                <div className="progress-bar" role="progressbar" aria-label="Example 1px high" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <form onSubmit={handleSubmit} >
                <div className="row">
                    <div className="col">
                        <input name="firstname" type="text" className="form-control" placeholder="First name" required aria-label="First name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="col">
                        <input name="lastname" type="text" className="form-control" placeholder="Last name" required aria-label="Last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                </div>
                <br />
                <div className="mb-3">
                    <input type="number" maxLength="13" minLength="13" required name="id_no" className="form-control" placeholder="Identity number" aria-describedby="emailHelp" value={idNo} onChange={(e) => setIdNo(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Your email address" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" required type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
            <div id="emailHelp" className="form-text">Been here? <Link to="/">Login</Link></div>
        </div>
    );
};

export default Register;
