import URI from 'urijs';
import config from './apiConfig';

class ApiCalls {
  constructor(_config) {
    this.host = _config.host;
    this.endpoints = _config.endpoints;
    this.headers = _config.headers;
  }

  getRepositories = (params) => {
    const url = new URI(this.host)
      .path(this.endpoints.repositories)
      .query(params)
      .toString();
    return fetch(url, {
      method: 'GET',
      headers: this.headers,
    });
  };

  getTopics = (params) => {
    const url = new URI(this.host)
      .path(this.endpoints.topics)
      .query(params)
      .toString();
    return fetch(url, {
      method: 'GET',
      headers: this.headers,
    });
  };
}

const apiCalls = new ApiCalls(config);
export default apiCalls;