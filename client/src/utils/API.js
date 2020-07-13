import axios from "axios";

export default {
  createUser: function (newUser) {
    return axios.post("/login/createUser", newUser);
  },

  loginUser: function (user) {
    return axios.post("/login/login", user);
  },

  getAllCHI: function () {
    return axios.get("/api/allCHI");
  },

  createCHI: function (newClimb) {
    return axios.post("/api/createCHI", newClimb);
  },

  searchDoor: function (searchQuery) {
    return axios.get("/api/search/"+searchQuery);
  },
};
