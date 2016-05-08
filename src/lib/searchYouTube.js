var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    dataType: 'json',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: jsonObj => callback(jsonObj.items),
    error: err => console.log('Error in GET request', err)
  });

};

window.searchYouTube = searchYouTube;
