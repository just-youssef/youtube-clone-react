import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const YOUTUBE_RAPID_API_KEY = 'a29cab14famsh9884e5e49eed56cp11e703jsn3ddf6856a899';
const YOUTUBE_RAPID_API_KEY = '072ba40c08mshac3c26057ea0b61p13b25djsn9b5df87a4ffc';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': YOUTUBE_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}
