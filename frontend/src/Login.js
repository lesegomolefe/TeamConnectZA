import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
    const navigate = useNavigate(); // Use the useNavigate hook to get the navigation function
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('intern'); // Default role is set to 'intern'
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can implement the actual login logic, such as sending a request to the server
        // For now, let's just log the email, password, and role
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Role:', role);
        // Reset form fields
        setEmail('');
        setPassword('');
        // Display a success message
        setMsg('Login successful!');
        // Navigate to the appropriate dashboard based on the selected role
        navigate(role === 'intern' ? '/dashboard' : '/admin');
    };

    return (
        <div className="login" style={{ backgroundColor: 'rgb(245, 246, 250)', marginLeft: '15%', marginRight: '15%', marginTop: '10%', width: '70%', border: '1px solid rgb(38, 0, 70)', borderRadius: '15px', padding: '15px', textAlign: 'center' }}>
            <h1>TeamConnect</h1>
            <p>Hello there 😊, Please login.</p>
            <p style={{ margin: 'auto', width: '50%', textAlign: 'center', backgroundColor: '#0d6efd', color: 'white', borderRadius: '25px' }}>{msg}</p>
            <div className="progress" style={{ height: '1px' }}>
                <div className="progress-bar" role="progressbar" aria-label="Example 1px high" style={{ width: '100%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="roleSelect" className="form-label">Role</label>
                    <select id="roleSelect" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="intern">Intern</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <div id="emailHelp" className="form-text">New? <button type="button" className="btn btn-link" onClick={() => navigate('/register')}>Register</button></div>
        </div>
    );
};

export default Login;
