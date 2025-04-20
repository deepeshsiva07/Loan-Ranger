import  axios from 'axios';

const API_URL = 'http://localhost:5000';

export const checkLoanEligibility = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/predict`, formData);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
 