import axios from "axios";

const BASE_URL = "http://192.168.1.2:1337/api";

const API_KEY = "1ddc42addc33272d4e855c18f7beb788497e52b2aaed1ee8ef836060c67da75ed7b4e2247dab3eae9b237eae143d32c3803709704feed02a1079ce336b53682f36ec0277022480cd40dcd62fc5d0eb9ff9a32b6380826c7889bd15f060efee8f59e8e72e1a883df31e383e3aa357b94e637bb8f2ca155578a2e009a47e2a3948";

const AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': "Bearer " + API_KEY
  }
});

const getSlider = () => AxiosInstance.get("/sliders?populate=*");

const getCategories = () => AxiosInstance.get("/categories?populate=*")

const getPremiumHospitals=()=>AxiosInstance.get("/hospitals?filters[Premium][$eq]=true&populate=*")

const getHospitalsByCategory=(category)=>AxiosInstance.get("/hospitals?filters[categories][Name][$in]="+category+"&populate=*")

const getDoctorsByCategory=(category)=>AxiosInstance.get("/doctors?filters[categories][Name][$in]="+category+"&populate=*")

const createAppointment=(data)=>AxiosInstance.post("/appointments",data)

const getAllHospital = () => AxiosInstance.get("/hospitals?populate=*");

const getAllDoctors = () => AxiosInstance.get("/doctors?populate=*");

const getUserAppointments=(email)=>AxiosInstance.get("/appointments?filters[email][$eq]="+email+"&populate=*");

const getSliderReverse = () => AxiosInstance.get("/sliders?populate=*&sort=id:desc"); // Modified function

const createContact = (data) => AxiosInstance.post("/contacts", data);


export default {
  getSlider,
  getCategories,
  getPremiumHospitals,
  getHospitalsByCategory,
  getDoctorsByCategory,
  createAppointment,
  getAllHospital,
  getAllDoctors,
  getUserAppointments,
  getSliderReverse, 
  createContact,
}
