const API_KEY = "309a0f1f693645bee230c00407e76236";
const BASE_URL = `https://api.themoviedb.org/3/`;

const GET = async (type = "tv", resource) => {
  const res = await fetch(
    `${BASE_URL}${type}/${resource}?api_key=${API_KEY}&language=it-IT&page=1`
  );
  const data = await res.json();
  return data;
};

const GET_SEARCH = async (query, type) => {
  const res = await fetch(
    `${BASE_URL}search/${type}?api_key=${API_KEY}&language=it-IT&page=1&query=${query}&include_adult=false`
  );
  const data = await res.json();
  return data;
};

export { GET, GET_SEARCH };
