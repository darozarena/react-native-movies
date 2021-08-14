import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '63d06d02bd36536ec972b32ad8bfd810',
    language: 'es-ES',
  },
});

export default movieDB;
