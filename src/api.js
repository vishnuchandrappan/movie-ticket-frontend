import axios from "axios";

export default axios.create({
  // baseURL: `http://localhost:8000`
  baseURL: `https://gentle-bastion-82843.herokuapp.com/`
});
