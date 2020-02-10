$(function() {
    $('#cafe-detail').click(function(){
      $('#cafe-modal').fadeIn();
      $('.modal').fadeIn();
    });
    
    $('#bokunatsu-detail').click(function(){
        $('#bokunatsu-modal').fadeIn();
        $('.modal').fadeIn();
      });
      
   
    // 「.close-modal」要素にclickイベントを設定してください
    
    $('.close-modal').click(function() {
        $('#cafe-modal').fadeOut();
        $('#bokunatsu-modal').fadeOut();
      });
    
  });
  