$(document).ready(function() {
  $('#search-btn').click(function(event) {
    console.log("clicked search")
    var searchDate = $('#search-date').val()

    var options = {
      url: 'https://api.nasa.gov/planetary/apod',
      method: 'get',
      data: {
          api_key: 'nMn27egATxSQpht0mup9AxIhoWsodgjfVVNKOWwM',
          date: searchDate,
          hd: false
        },
      dataType: 'json',
      }
      //after i retrieve this, maybe i want to save to database


    var showResponse = function(response) {

      var img = response.url
      var title = response.title
      var date = response.date

      $('#date').html
      $('#screensaver-title')
      $('#image-url')



      console.log(response);
      console.log(response.title);

      $('.response').show();
    }

    $.ajax(options).done(saveResponse)

  })

  function saveResponse(response) {


    data = {
      image_url: response.url,
      title: response.title,
      date: response.date
    }

    console.log(data)

    $.ajax({
      url: '/api/screensavers',
      method: 'post',
      data: data
    })
    .done(function(res) {
      $('.response').show();
      console.log('entry saved')
    })
  }

  function set_body_height() { // set body height = window height
    $('body').width($(window).width());
  }

  $(window).bind('resize', set_body_width);
  set_body_width();


})
