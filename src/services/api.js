import axios from 'axios';

const API_BASE = 'http://localhost:8080/api';

export const fetchAllVideos = () =>
  axios.get(`${API_BASE}/videos`);

export const fetchUserVideos = (email) =>
  axios.get(`${API_BASE}/videos/user/${email}`);

export const fetchVideoById = (id) =>
  axios.get(`${API_BASE}/videos/${id}`);

export const uploadVideo = (formData) =>
  axios.post(`${API_BASE}/videos/upload`, formData);

export const postComment = (videoId, text) =>
  axios.post(`${API_BASE}/videos/${videoId}/comments`, { text });
