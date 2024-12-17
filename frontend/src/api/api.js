import axios from "axios";
const BASE_URL='http://localhost:8081'
export const getMoviesInHomepage = async () => {
  const res = await axios.get(`${BASE_URL}/movie`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }
  const data = await res.data;
  return data;
};

export const getAllMovies = async () => {
  const res = await axios.get(`${BASE_URL}/movie/all`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }
  const data = await res.data;
  return data;
};
export const getSearchMovie = async (title) => {
  const res = await axios.get(`${BASE_URL}/movie/search?title=${title}`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }
 
  const data = await res.data;
  return data;
};

export const getShowtimeAndTheaterInfo = async (movieId, date = null) => {
  if (!movieId) {
    console.log("Movie ID is required");
    return null;
  }

  try {
    let url =`${BASE_URL}/movie/${movieId}/showtimes`;
    if (date) {
      url += `?date=${date}`;
    }

    const res = await axios.get(url);

    if (!res || res.status !== 200) {
      console.log("No Data or Failed to fetch");
      return null;
    }

    const data = await res.data;
    return data;
  } catch (error) {
    console.error("Error fetching showtimes:", error);
    return null;
  }
};


export const getPromotionInHompage = async () => {
  const res = await axios.get(`${BASE_URL}/promotion/`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }
  const data = await res.data;
  return data;
};

export const getFoodList =async()=>{
  const res=await axios.get(`${BASE_URL}/food/`).catch((err)=>console.log(err));

  if(res.status !==200) {
    return console.log("No data");
  }
  const data=await res.data;
  return data;
}

export const getSeatsByRoom = async (roomId) => {
  const res = await axios.get(`http://localhost:8081/seat/${roomId}`).catch((err) => console.log(err));

  if (res.status !== 200) {
    return console.log("No Data");
  }
  const data = await res.data;
  return data;
};
