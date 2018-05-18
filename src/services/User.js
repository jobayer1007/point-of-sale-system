import { axios } from './index';

export default {
    getUsers() {
        return axios.get('users')
                    .then(response => Promise.resolve(response.data))
                    .catch(error => Promise.reject(error.response.data));
    },

    authenticate(user) {
        return axios.post('users/login', user)
                    .then(response => Promise.resolve(response.data))
                    .catch(error => Promise.reject(error.response.data));
    },
};