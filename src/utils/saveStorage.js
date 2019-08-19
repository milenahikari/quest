import api from '../services/api';

export function saveStorage(user) {
  localStorage.setItem('user', JSON.stringify(user));
  api.defaults.headers.Authorization = `Bearer ${user.token}`
}

export function saveStorageMonitor(monitor) {
  localStorage.setItem('monitor', JSON.stringify(monitor));
}