
//-----------------------------------------------------------LOADING SCREEN STUFF----------------------------------------------
$('.loader').hide();


    function addLoader(){
      $('.loader').show();
      blurContent(5);
      console.log('add');
      centerCircle();
      loaded = true;

    }

    function removeLoader(){
      $('.loader').hide();
      blurContent(0);
      console.log('remove');
      loaded=false;
    }

    function blurContent(val){
      $('.content').css('-webkit-filter','blur('+val+'px)');
      $('.content').css('-moz-filter','blur('+val+'px)');
      $('.content').css('-ms-filter','blur('+val+'px)');
      $('.content').css('filter','blur('+val+'px)');

    }

    function centerCircle(){
      var heightMid= $(document).height()/2;
      var widthMid = $(document).width()/2;
      $('.loader').css('position','absolute');
      $('.loader').css('top',heightMid);
      $('.loader').css('left',widthMid);
      $('.loader .right').css('width','50%');

    }
