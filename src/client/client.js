import axios from 'axios';

const url = 'http://localhost:3030';

export const client = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json'
  }
});