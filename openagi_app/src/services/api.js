// openagi-app/src/services/api.js
const API_BASE_URL = 'http://localhost:5000'; // Adjust the base URL as needed

export const fetchStacks = async () => {
  const response = await fetch(`${API_BASE_URL}/stacks`);
  if (!response.ok) {
    throw new Error('Failed to fetch stacks');
  }
  return response.json();
};

export const createStack = async (name, description) => {
  const response = await fetch(`${API_BASE_URL}/stacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, description })
  });
  if (!response.ok) {
    throw new Error('Failed to create stack');
  }
  return response.json();
};

export const fetchStackDetails = async (stackId) => {
  const response = await fetch(`${API_BASE_URL}/stacks/${stackId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch stack details');
  }
  return response.json();
};

export const buildStack = async (stackId) => {
  const response = await fetch(`${API_BASE_URL}/stacks/${stackId}/build`, {
    method: 'POST'
  });
  if (!response.ok) {
    throw new Error('Failed to build stack');
  }
  return response.json();
};

export const runStack = async (stackId) => {
  const response = await fetch(`${API_BASE_URL}/stacks/${stackId}/run`, {
    method: 'POST'
  });
  if (!response.ok) {
    throw new Error('Failed to run stack');
  }
  return response.json();
};

