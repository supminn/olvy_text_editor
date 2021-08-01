import axios from "axios";

export const findMeme = async (searchQuery) => {
  try {
    const response = await axios.get(
      `https://api.giphy.com/v1/stickers/search`,
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          limit: 1,
          q: searchQuery,
        },
      }
    );
    if (response.data.data[0].images.original.url) {
      return response.data.data[0].images.original.url;
    } else {
      return "no results found";
    }
  } catch (err) {
    return "no results found";
  }
};
