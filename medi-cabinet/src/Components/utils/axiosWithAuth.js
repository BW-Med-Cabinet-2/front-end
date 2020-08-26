import axios from 'axios';

 const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://reqres.in',
        headers: {
            Authorization: localStorage.getItem('token')
        }
    });
}; 

export default axiosWithAuth; 