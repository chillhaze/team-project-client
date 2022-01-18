import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/any-route'; // тут нужна ссылка на бек

export async function signUp(credentials) {
  const data = await axios.post(`/api/auth/register`, credentials);
  return data;
}

export async function signIn(credentials) {
  const data = await axios.post(`/api/auth/login`, credentials);
  return data;
}

export async function getCurrentUser() {
  const data = await axios.get(`/api/auth/current`);
  return data;
}

export async function signOut() {
  const data = await axios.get(`/api/auth/logout`);
  return data;
}

export async function googleAuth(credentials) {
  const data = await axios.post(`/api/auth/user-google`, credentials);
  // console.log(data);
  return data;
}
