import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

//images
import youtubePic from '../images/youtube.png';
//style
import '../style/App.css';
class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.handleTermSubmit('dogs');
  }

  handleTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <div className='title-div'>
          <img
            src={youtubePic}
            className='camera-svg'
            alt='camera svg'
            width='70'
            height='70'
          />
          <h1 className='title'>Video browser</h1>
          <img
            src={youtubePic}
            className='camera-svg'
            alt='camera-svg'
            width='70'
            height='70'
          />
        </div>
        <SearchBar onFormSubmit={this.handleTermSubmit} />
        <div className='ui grid'>
          <div className='ui test'>
            <div className='video-detail'>
              {/* <div className='eleven wide column'> */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='video-list'>
              {/* <div className='five wide column'> */}
              <VideoList
                onVideoSelect={this.handleVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
