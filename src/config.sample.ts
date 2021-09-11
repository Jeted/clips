const config = {
  CLIENT_ID: '5lwlf9w9oltmzn9oquqgambkdbjr5d',

  REMOTE_URL: 'https://jeted.github.io/',
  LOCAL_URL: 'http://localhost:5000/',
  REPO: 'clips',

  get BASE_URL() {
    if (window.location.href.includes(config.REMOTE_URL)) {
      return config.REMOTE_URL + config.REPO;
    }
    return config.LOCAL_URL + config.REPO;
  },
};

export default config;
