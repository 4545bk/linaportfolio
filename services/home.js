// services/home.js
import axios from 'axios';

// Function to fetch home data
export const fetchHomeData = async () => {
  try {
    const response = await axios.get('/api/home-data');  // Replace with your actual API endpoint
    return response.data;  // Adjust based on your API response structure
  } catch (error) {
    console.error('Error fetching home data:', error);
    throw error;  // Rethrow the error to handle it later
  }
};

// Business logic example
export const processWelcomeMessage = (message) => {
  return message.trim();  // For example, just trimming whitespace
};
