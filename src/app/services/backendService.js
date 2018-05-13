import axios from 'axios';

const Console = console;

const http = axios.create({
  baseURL: process.env.BACKEND_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const request = path => (http.get(path)
  .then(response => response.data)
  .catch((error) => {
    Console.log(error);
    return [];
  })
);

export default {
  getEvents: () => request('/event'),
  getEvent: idEvent => request(`/event/${idEvent}`),
  // getSectors: dateId => request(`/eventDate/${dateId}/sectors`),
  getSectors: () => request('/sector'),
  getRates: sectorId => request(`/sector/${sectorId}/rates`),
};
