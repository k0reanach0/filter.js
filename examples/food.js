$(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  var appendToContainer = function(htmlele, record){
    console.log(record)
  };

  var FJS = FilterJS(places, '#places', {
    template: '#places-template',
    search: {ele: '#searchbox'},
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: function(result){
        $('#total_places').text(result.length);
      }
    }
    //appendToContainer: appendToContainer
  });

  FJS.addCallback('beforeAddRecords', function(){
    if(this.recordsCount >= 450){
      this.stopStreaming();
    }
  });

  FJS.addCallback('afterAddRecords', function(){
    var percent = (this.recordsCount - 250)*100/250;

    $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      $('#stream_progress').parent().fadeOut(1000);
    }
  });

  FJS.setStreaming({
    data_url: 'data/stream_places.json',
    stream_after: 1,
    batch_size: 50
  });

  FJS.addCriteria({field: 'year', ele: '#type_filter', type: 'range', all: 'all'});
  FJS.addCriteria({field: 'rating', ele: '#rating_filter', type: 'range'});
  FJS.addCriteria({field: 'runtime', ele: '#distance_filter', type: 'range'});
  FJS.addCriteria({field: 'genre', ele: '#mood_criteria input:checkbox'});

  /*
   * Add multiple criterial.
    FJS.addCriteria([
      {field: 'genre', ele: '#mood_criteria input:checkbox'},
      {field: 'year', ele: '#type_filter', type: 'range'}
    ])
  */

  window.FJS = FJS;
});

function initSliders(){
  $("#rating_slider").slider({
    min: 8,
    max: 10,
    values:[8, 10],
    step: 0.1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $("#distance_slider").slider({
    min: 50,
    max: 250,
    values:[0, 250],
    step: 10,
    range:true,
    slide: function( event, ui ) {
      $("#distance_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
      $('#distance_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#mood_criteria :checkbox').prop('checked', true);
  $('#all_mood').on('click', function(){
    $('#mood_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
