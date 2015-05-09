$(document).ready(function(){

  initSliders();

  //NOTE: To append in different container
  // var appendToContainer = function(htmlele, record){
  //   console.log(record)
  // };

  FilterJS(places, "#places", {
    template: '#places-template',
    criterias:[
      {field: 'type', ele: '#type_filter', all: 'all'},
      {field: 'cost', ele: '#rating_filter', type: 'range'},
      {field: 'dist', ele: '#distance_filter', type: 'range'},
      {field: 'mood', ele: '#mood_criteria input:checkbox'}
    ],
    search: { ele: '#searchbox' }
  });
});

function initSliders(){
  $("#rating_slider").slider({
    min: 5,
    max: 50,
    values:[5, 50],
    step: 5,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html('$' + ui.values[ 0 ] + ' - ' + '$' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $("#distance_slider").slider({
    min: 1,
    max: 10,
    values:[1, 10],
    step: 1,
    range:true,
    slide: function( event, ui ) {
      $("#distance_range_label" ).html(ui.values[ 0 ] + ' miles - ' + ui.values[ 1 ] + ' miles.');
      $('#distance_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#mood_criteria :checkbox').prop('checked', true);
  $('#all_mood').on('click', function(){
    $('#mood_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
}
