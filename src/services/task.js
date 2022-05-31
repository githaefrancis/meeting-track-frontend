import axios from 'axios'

export const getTasks=()=>{
    return axios.get('http://localhost:8000/api');
}