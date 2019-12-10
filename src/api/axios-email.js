import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://newsletter-txt4seo.firebaseio.com/'
});

export default instance;