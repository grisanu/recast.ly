var Search = props => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={e => {
      props.debouncedSearchYouTube({
        query: e.target.value,
        key: window.YOUTUBE_API_KEY,
        maxResults: 5
      }, props.videoUpdate);
    }}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
