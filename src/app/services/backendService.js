import axios from 'axios';

const Console = console;

const http = axios.create({
  baseURL: 'http://api-challenge.getcrowder.com',
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getEvents() {
    return http.get('/event')
      .then(response => response.data)
      .catch((error) => {
        Console.log(error);
        return [];
      });
  },
};