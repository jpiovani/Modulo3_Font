import axios from 'axios';

//Cria uma conexão Axios com a URL base que está na API da iClean
const ApiIclean = axios.create({baseURL: process.env.REACT_APP_API_ICLEAN,
});
export default ApiIclean;