import axios from 'axios';

export default class TaskService {
  apiURL = 'http://localhost:3200/api';
  getTasks(): any {
    return axios.get<any>(`${this.apiURL}`)
  }
}