import axios from 'axios';
import { environment } from '../../react-app-env';

export const mTClient = axios.create({
  baseURL:environment.mTBaseUrl,
  headers:{
    'Content-Type':'application/json'
  },
  withCredentials:true
})