import axios from 'axios';

const URL = 'http://localhost:4000';

export const loginApi = async (data) => {
  try {
    return await axios.post(`${URL}/ngo/login`, data);
  } catch (error) {
    console.log('error while sending login data', error);
  }
};

export const registerApi = async (data) => {
  try {
    return await axios.post(`${URL}/ngo/register`, data);
  } catch (error) {
    console.log('error while sending register data', error);
  }
};

export const hotelDataApi = async (data) => {
  try {
    return await axios.post(`${URL}/hotel/donate`, data);
  } catch (error) {
    console.log('error while getting hotels data', error);
  }
};

export const getHotel = async () => {
  try {
    return await axios.get(`${URL}/hotels`);
  } catch (error) {
    console.log('error while gettng hotels', error);
  }
};

export const manageHotelApi = async (id) => {
  try {
    return await axios.delete(`${URL}/hotels/${id}`);
  } catch (error) {
    console.log('error while mangagehotelapi data', error);
  }
};

export const addNgoHotel = async (id1, id2) => {
  try {
    return await axios.post(`${URL}/ngo/hotel/${id1}/${id2}`);
  } catch (error) {
    console.log('error while addNgohotelapi data', error);
  }
};

export const ngoHotel = async () => {
  try {
    return await axios.get(`${URL}/ngo/hotel`);
  } catch (error) {
    console.log('error while ngoHotelapi data', error);
  }
};

export const sendMail = async (id1, id2) => {
  try {
    return await axios.post(`${URL}/send-mail/${id1}/${id2}`);
  } catch (error) {
    console.log('error while sending mail', error);
  }
};
