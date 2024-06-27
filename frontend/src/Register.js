import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import AuthService from './AuthService';

const Register = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [idNo, setIdNo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [role, setRole] = useState('intern'); // Default role is set to 'intern'

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Here you can implement the actual registration logic, such as sending a request to the server
    //     if (!firstName || !lastName || !idNo || !email || !password) {
    //         // If any required field is empty, set an error message and return
    //         setMsg('Please fill in all the required fields.');
    //         return;
    //     }
    //     // For now, let's just log the form data
    //     console.log('First Name:', firstName);
    //     console.log('Last Name:', lastName);
    //     console.log('ID Number:', idNo);
    //     console.log('Email:', email);
    //     console.log('Password:', password);
    //     // Reset form fields
    //     setFirstName('');
    //     setLastName('');
    //     setIdNo('');
    //     setEmail('');
    //     setPassword('');
    //     // Display a success message
    //     setMsg('Registration successful!');
    //     navigate('/');
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AuthService.register({ firstName, lastName,idNo, email, password });
            setMsg(response.data);
            if (response.data === 'User registered successfully') {
                navigate('/');
            }
        } catch (error) {
            setMsg('Registration failed');
        }
    };




    return (
        <div className="login" style={{ backgroundColor: 'rgb(245, 246, 250)', marginLeft: '15%', marginRight: '15%', marginTop: '10%', width: '70%', border: '1px solid rgb(38, 0, 70)', borderRadius: '15px', padding: '15px', textAlign: 'center' }}>
            <h1>TeamConnect</h1>
            <p>Hi newbie 😊, Please register.</p>
         
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
                <div className="mb-3">
                    <label htmlFor="roleSelect" className="form-label"> Please Select the Group</label>
                    <select id="roleSelect" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="option1">Java Interns 2023</option>
                    <option value="option2">The Zen Squad</option>
                    <option value="option3">C# $.Net Interns 2022</option>
                    <option value="option4">Liberty Admin Interns 2022</option>
                    <option value="option5">Cybersecuty Interns 2022</option>
                    <option value="option6">Mainframe Interns 2022</option>
                    </select>
                </div>
                <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
            </form>
            <div id="emailHelp" className="form-text">Been here? <button type="button" className="btn btn-link" onClick={() => navigate('/')}>Login</button></div>
        </div>
    );
};

export default Register;
