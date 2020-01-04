import Http from '../utils/Http';
import api from '../config/api.config';

class NewsService {
	static list() {
		return Http.get(api.news.list);
	}
}

export default NewsService;
