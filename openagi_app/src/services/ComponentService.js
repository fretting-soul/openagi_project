// src/services/componentService.js
import api from './api';

export const createComponent = async (component) => {
  const response = await api.post('/components/', component);
  return response.data;
};

// Similar setup for workflows
