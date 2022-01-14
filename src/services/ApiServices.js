import axios from 'axios'

const apiClient = 
{
    baseURL: 'https://api.unsplash.com',
    init(baseURL){
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common['Content-Type'] = 'application/vnd.api+json';
        axios.defaults.headers.common['Accept'] = 'application/vnd.api+json';
    },

    get(resource, params) {
        return axios.get(resource, params, options)
    },
}

export default ApiService
