// Searchbar Handler
$(function() {
  var searchField = $('#query');
  var icon = $('#search-btn');
  var searchAnimateSpeed = 400;


  // Focus Handler
  $(searchField).on('focus', function() {
    $(this).animate({
      width: '100%'
    }, searchAnimateSpeed);
    $(icon).animate({
      right: '10px'
    }, searchAnimateSpeed)
  });

  // Blur Event Handler
  $(searchField).on('blur', function() {
    if (searchField.val() == '') {
      $(searchField).animate({
        width: '45%'
      }, searchAnimateSpeed, function(){});

      $(icon).animate({
        right: '360px'
      }, searchAnimateSpeed, function(){});
    }
  });

  $('#search-form').submit(function(e) {
    e.preventDefault();
  });
})

function search() {
  // Clear Results
  $('#results').html('');
  $('#buttons').html('');

  // Get Form Input
  query = $('#query').val();

  // Run GET Request on API
  $.get(
    "https://www.googleapis.com/youtube/v3/search", // URL
    {                                               // Data that is requested
      part: 'snippet, id',
      q: query,
      type: 'video',
      key: 'AIzaSyDr2gRVR6b_ODv1kcUvJ1M84yx3Yk2DScI'
    },
    function(data) {  // On request success, 'data' will be returned as the response. We manipulate that data in this function.
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      console.log(data);

      //Loop through the items
      $.each(data.items, function(i, item) {
        // Get Output
        var output = getOutput(item);
        // Display Results
        $('#results').append(output);
      });
      var buttons = getButtons(prevPageToken, nextPageToken);

      // Display Buttons
      $('#buttons').append(buttons);
    }
  );
}

// Next Page Function
function nextPage() {
  var token = $('#next-button').data('token');
  var query = $('#next-button').data('query');
  console.log('1. ' + query)

  // Clear Results
  $('#results').html('');
  $('#buttons').html('');

  // Run GET Request on API
  $.get(
    "https://www.googleapis.com/youtube/v3/search", // URL
    {                                               // Data that is requested
      part: 'snippet, id',
      q: query,
      pageToken: token,
      type: 'video',
      key: 'AIzaSyDr2gRVR6b_ODv1kcUvJ1M84yx3Yk2DScI'
    },
    function(data) {  // On request success, 'data' will be returned as the response. We manipulate that data in this function.
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      console.log(data);

      //Loop through the items
      $.each(data.items, function(i, item) {
        // Get Output
        var output = getOutput(item);
        // Display Results
        $('#results').append(output);
      });
      var buttons = getButtons(prevPageToken, nextPageToken);

      // Display Buttons
      $('#buttons').append(buttons);
    }
  );
}

// Previous Page Function
function prevPage() {
  var token = $('#prev-button').data('token');
  var query = $('#prev-button').data('query');
  console.log('1. ' + query)

  // Clear Results
  $('#results').html('');
  $('#buttons').html('');

  // Run GET Request on API
  $.get(
    "https://www.googleapis.com/youtube/v3/search", // URL
    {                                               // Data that is requested
      part: 'snippet, id',
      q: query,
      pageToken: token,
      type: 'video',
      key: 'AIzaSyDr2gRVR6b_ODv1kcUvJ1M84yx3Yk2DScI'
    },
    function(data) {  // On request success, 'data' will be returned as the response. We manipulate that data in this function.
      var nextPageToken = data.nextPageToken;
      var prevPageToken = data.prevPageToken;

      console.log(data);

      //Loop through the items and display it to the page
      $.each(data.items, function(i, item) {
        // Get Output
        var output = getOutput(item);
        // Display Results
        $('#results').append(output);
      });
      var buttons = getButtons(prevPageToken, nextPageToken);

      // Display Buttons
      $('#buttons').append(buttons);
    }
  );
}

// Build Output
function getOutput(item) {
  var videoId       = item.id.videoId;
  var title         = item.snippet.title;
  var description   = item.snippet.description;
  var thumbnail     = item.snippet.thumbnails.high.url;
  var channelTitle  = item.snippet.channelTitle;
  var videoDate     = item.snippet.publishedAt;

  // Build Output String
  var output = `
    <li>
      <div class="list-left">
        <img src="`+thumbnail+`">
      </div>
      <div class="list-right">
        <h3><a href="http://www.youtube.com/watch?v=`+videoId+`" target="_blank">`+title+`</a></h3>
        <small>By <span class="cTitle"> `+channelTitle+`</span> on`+videoDate+`</small>
        <p>`+description+`</p>
      </div>
    </li>
    <div class="clearfix"></div>`;
  return output;
}

// Build the Buttons
function getButtons(prevPageToken, nextPageToken) {
  if (!prevPageToken) {
    var btnoutput = `
    <div class="button-container">
      <button id="next-button" class="paging-button" data-token="`+nextPageToken+`" data-query="`+query+`" onclick="nextPage();">Next Page</button>
    </div>`;
  } else {
    var btnoutput = `
    <div class="button-container">
      <button id="prev-button" class="paging-button" data-token="`+prevPageToken+`" data-query="`+query+`" onclick="prevPage();">Previous Page</button>
      <button id="next-button" class="paging-button" data-token="`+nextPageToken+`" data-query="`+query+`" onclick="nextPage();">Next Page</button>
    </div>`;
  }
  return btnoutput;
}
