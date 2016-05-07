class App extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      currentVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  titleClickHandler (videoObj) {
    // is this.setState, when executed as callback in VideoListEntry, using the context of
    // the parent App instance?
    this.setState({
      // this in the executed callback is equal to the videoListEntryTitle...how to get parent
      // element elegantly/properly?
      currentVideo: videoObj
    });
  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} clickHandler={this.titleClickHandler.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
