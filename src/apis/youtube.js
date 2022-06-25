import axios from 'axios';

const KEY = 'AIzaSyBpPlFwysHxPGhVo_H4j5ZSxwMmK0vPjyg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
