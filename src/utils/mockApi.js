import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContactFetch = (value) => axios.post('/contacts', value);
export const deleteContactFetch = (value) => axios.delete(`/contacts/${value}`)
export const allContactFetch = () => axios.get('/contacts');