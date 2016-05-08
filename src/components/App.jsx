class App extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      currentVideo: { id: null },
      videoList: []
    };
  }

  videoUpdate (items) {
    this.setState({
      currentVideo: items[0],
      videoList: items
    });
  }

  componentDidMount () {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: 'flowers',
      maxResults: 5
    };

    this.props.searchYouTube(options, this.videoUpdate.bind(this));
  }

  videoListTitleClickHandler (videoObj) {
    this.setState({
      currentVideo: videoObj
    });
  }

  render () {
    return (
      <div>
        <Nav debouncedSearchYouTube={this.props.searchYouTube} videoUpdate={this.videoUpdate.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickHandler={this.videoListTitleClickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
