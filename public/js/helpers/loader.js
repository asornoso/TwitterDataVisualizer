
//-----------------------------------------------------------LOADING SCREEN STUFF----------------------------------------------
    function addLoader(){
      $('.loader').show();
      blurContent(5);
      centerCircle();
      loaded = true;

    }

    function removeLoader(){
      $('.loader').hide();
      blurContent(0);
      loaded=false;
    }

    function blurContent(val){
      $('.graphRow').css('-webkit-filter','blur('+val+'px)');
      $('.graphRow').css('-moz-filter','blur('+val+'px)');
      $('.graphRow').css('-ms-filter','blur('+val+'px)');
      $('.graphRow').css('filter','blur('+val+'px)');

    }

    function centerCircle(){
      var heightMid= $(document).height()/2;
      var widthMid = $(document).width()/2;
      $('.loader').css('position','absolute');
      $('.loader').css('top','600px');
      $('.loader').css('left',widthMid);
      $('.loader .right').css('width','50%');

    }
