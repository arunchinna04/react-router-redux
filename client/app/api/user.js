import axios from 'axios';
//import store from 'store';

export function getUsers() {
    return axios.get('http://localhost:3000/users').then(function(response) {

        // store.dispatch({
        //     type: 'GET_USERS',
        //     users: response.data
        // })

        return response;

    }).catch(function(err) {
        console.error(err);
    });
}

export function authenticateUsers(data) {
    return axios.post('http://localhost:8011/auth',data).then(function(response) {      

        return response.data;

    }).catch(function(err) {
        console.error(err);
    });
}


