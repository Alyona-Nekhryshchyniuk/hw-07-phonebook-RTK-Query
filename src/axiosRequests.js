import axios from 'axios';

axios.defaults.baseURL = 'https://63da6ba5b28a3148f686d43d.mockapi.io';

export const postContact = data => {
  return axios.post('/contacts', data);
};

export const fetchAll = () => {
  return axios.get('/contacts');
};

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
