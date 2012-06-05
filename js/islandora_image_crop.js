jQuery(function($){
  $('#jcrop-image').Jcrop({
    onSelect:   updateCoords
  });
  
  function updateCoords(c) {
    $("input[name='x']").val(c.x);
    $("input[name='y']").val(c.y);
    $("input[name='w']").val(c.w);
    $("input[name='h']").val(c.h);
  }
});
