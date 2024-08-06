import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const [role, setRole] = useState('intern');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMsg('');

        // Simulate an asynchronous login process
        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Email:', email);
        console.log('Password:', password);

        setEmail('');
        setPassword('');
        setMsg('Login successful!');
        setIsLoading(false);

        if (role === 'intern') {
            navigate('/dashboard');
        } else if (role === 'manager') {
            navigate('/dashboard');
        }
    };

    return (
        <div className="login" style={{ backgroundColor: 'rgb(245, 246, 250)', marginLeft: '15%', marginRight: '15%', marginTop: '10%', width: '70%', border: '1px solid rgb(38, 0, 70)', borderRadius: '15px', padding: '15px', textAlign: 'center' }}>
            <h1>TeamConnect</h1>
            <p>Hello there, Please login.</p>
            {msg && <p style={{ margin: 'auto', width: '50%', textAlign: 'center', backgroundColor: '#0d6efd', color: 'white', borderRadius: '25px' }}>{msg}</p>}
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
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span className="visually-hidden">Loading...</span>
                        </>
                    ) : (
                        'Login'
                    )}
                </button>
            </form>
            <div id="emailHelp" className="form-text">New? <button type="button" className="btn btn-link" onClick={() => navigate('/register')}>Register</button></div>
        </div>
    );
};

export default Login;