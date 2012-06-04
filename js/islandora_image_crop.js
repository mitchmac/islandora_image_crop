jQuery(function($){
  $('#target').Jcrop(
	onChange:   updateCoords,
    onSelect:   updateCoords
  );
});

function updateCoords(c) {
	
}