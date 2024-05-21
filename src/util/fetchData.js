import axios from "axios";

const baseUrl = "https://api.coursera.com/ent";
const tmdbToken =
  "dddHc5OTG7hFJb0ZnGq8P6uxM3vw";
const headers = {
  Authorization: "Bearer " + tmdbToken,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const res = await axios.get(baseUrl + url, { headers, params });
    return res.data;
    
  } catch (err) {
    console.log(err);
  }
};

