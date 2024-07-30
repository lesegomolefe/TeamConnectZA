import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const register = (userData) => axios.post(`${API_URL}/register`, userData);
export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);
// export const getComplaints = () => axios.get(`${API_URL}/complaints`);
// export const addComplaint = (complaintData) => axios.post(`${API_URL}/complaints`, complaintData);