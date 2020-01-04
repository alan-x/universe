import axios from 'axios';

class Http {
	static get(url, params) {
		return axios.get(url, params);
	}
}

export default Http;
