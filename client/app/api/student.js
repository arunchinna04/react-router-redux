import axios from 'axios';
//import store from 'store';

export function getStudent() {
    return axios.get('http://localhost:8011/student').then(function(response) {
      return response.data;
    }).catch(function(err) {
        console.error(err);
    });
}

export function getStudentById(id){
    return axios.get('http://localhost:8011/student/'+id).then(function(response) {
        return response.data;
    }).catch(function(err) {
        console.error(err);
    });
}




