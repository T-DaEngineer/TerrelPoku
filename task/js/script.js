$('#weatherButton').click(function() {
    $.ajax({
      url: 'libs/php/getWeatherInfo.php',
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        $('#results').html('');
        console.log(result)
        $.each(result, function (i, item) {
          $
            .each(item, function (index, val) {
              $('#results').append('ICAO: ' + val.ICAO + '<br/>')
              $('#results').append('Clouds: ' + val.clouds + '<br/>')
              $('#results').append('Temperature: ' + val.temperature + ' Degrees' + '<br/>')
            })
        })
      }
    })
  })

  $('#earthButton').click(function() {
    $.ajax({
      url: 'libs/php/getEarthInfo.php',
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        $('#results').html('');
        console.log(result)
        $.each(result, function (i, item) {
          $
            .each(item, function (index, val) {
              $('#results').append('Datetime: ' + val.datetime + '<br/>')
              $('#results').append('Magnitude: ' + val.magnitude + '<br/>')
              $('#results').append('SRC: ' + val.src + ' Degrees' + '<br/>')
            })
        })
      }
    })
  })

  
  $('#oceanButton').click(function() {
    $.ajax({
      url: 'libs/php/getOceanInfo.php',
      type: 'GET',
      dataType: 'json',
      success: function (result) {
        $('#results').html('');
        $.each(result, function (i, item) {
              $('#results').append('Ocean Name: ' + item.name + '<br/>')
              $('#results').append('Distance: ' + item.distance + '<br/>')
        })
      }
    })
  })