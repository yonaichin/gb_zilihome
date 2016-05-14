$(document).on('ready', function(){
  $("#menuzord").menuzord({
    align: "left",
  });
  if($('.showhide').length > 1) {
    $('.showhide:eq(0)').remove();
  }

});
