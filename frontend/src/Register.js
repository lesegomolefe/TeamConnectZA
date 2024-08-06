import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('intern');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMsg('');

        // Simulate an asynchronous registration process
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);

        setFirstName('');
        setLastName('');
        setIdNo('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setMsg('Registration successful!');
        setIsLoading(false);

        if (role === 'intern') {
            navigate('/dashboard');
        } else if (role === 'manager') {
            navigate('/admin');
        }
    };

    return (
        <div className="login" style={{ backgroundColor: 'rgb(245, 246, 250)', marginLeft: '15%', marginRight: '15%', marginTop: '10%', width: '70%', border: '1px solid rgb(38, 0, 70)', borderRadius: '15px', padding: '15px', textAlign: 'center' }}>
            <h1>TeamConnect</h1>
            <p>Hi newbie, Please register.</p>
         
            {msg && <p style={{ margin: 'auto', width: '50%', textAlign: 'center', backgroundColor: '#0d6efd', color: 'white', borderRadius: '25px' }}>{msg}</p>}
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
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name="email" type="email" className="form-control" placeholder="Your email address" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name="password" required type="password" className="form-control" placeholder="Password" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input name="confirmPassword" required type="password" className="form-control" placeholder="Confirm Password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="roleSelect" className="form-label">Role</label>
                    <select id="roleSelect" className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="intern">Intern</option>
                        <option value="manager">Manager</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="visually-hidden">Loading...</span>
                        </>
                    ) : (
                        'Register'
                    )}
                </button>
            </form>
            <div id="emailHelp" className="form-text">Been here? <Link to="/">Login</Link></div>
        </div>
    );
};

export default Register;