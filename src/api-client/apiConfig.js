const config = {
  host: 'https://api.github.com',
  endpoints: {
    repositories: '/search/repositories',
    topics: '/search/topics',
  },
  headers: {
    Accept: 'application/vnd.github.mercy-preview+json',
  },
};

export default config;
