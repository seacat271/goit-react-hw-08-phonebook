import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';


export const addContactFetch = value => axios.post('/contacts', value);
export const deleteContactFetch = value => axios.delete(`/contacts/${value}`)
export const allContactFetch = () => axios.get('/contacts');
export const updateContactFetch = value => axios.patch(`/contacts/${value.id}`, value);
export const signupUser = value => axios.post("/users/signup", value);
export const loginUser = value => axios.post("/users/login", value);
export const logoutUser = () => axios.post("/users/logout")