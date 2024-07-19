const BASE_URL = process.env.REACT_APP_BASE_URL;

const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      return response.text();
    }
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

export const getCalls = async () => {
  return apiRequest(`${BASE_URL}/activities`);
};

export const updateCall = async ({ id, isArchived }) => {
  return apiRequest(`${BASE_URL}/activities/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ is_archived: isArchived }),
  });
};

export const resetCalls = async () => {
  return apiRequest(`${BASE_URL}/reset`, {
    method: 'PATCH',
  });
};
