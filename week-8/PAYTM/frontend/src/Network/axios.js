import axios from 'axios'
import config from '../config/config'
const instance =axios.create({
    baseURL: config.backend.baseURL, // Replace this with your actual base URL
    timeout: 10000, // Adjust the timeout as needed
    headers: {
      'Content-Type': 'application/json',
      // Add any common headers here
    },
})

export default instance;