import axios from 'axios';
import * as Config from '../constants/Config';

const callApi = (endpoint, method= 'GET', body) => {
	return axios({
		method:	method,
		url: Config.URL_CONFIG+endpoint,
		data: body
	}).catch(err => console.log(err));
} 

export default callApi;