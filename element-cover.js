(function($){
  
  //Detect and return vendor prefix
  var prefix = function () {
    var styles = window.getComputedStyle(document.documentElement, ''),
      pre = (Array.prototype.slice
        .call(styles)
        .join('') 
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
      )[1],
      dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    };
  }

  $.fn.elementCover = function(){
    var $el    = $(this);
    var $mum   = $(this).parent();
    var width  = $el[0].offsetWidth;
    var height = $el[0].offsetHeight;
    
    var ratio  = width / height;
    
    $(window).on('resize', function(){
      
      var mumRatio = $mum[0].offsetWidth / $mum[0].offsetHeight;
                
      var a, b, c;
      
      //If width < height
      if(ratio < mumRatio){
        a = $mum[0].offsetWidth;
        b = $mum[0].offsetHeight;
        c = $el[0].offsetHeight;
      //If height < width 
      } else {
        a = $mum[0].offsetHeight;
        b = $mum[0].offsetWidth;
        c = $el[0].offsetWidth;
      }
      
      $el.css('height', '100%');
      $el.css('width', a * ratio);
      $el.css(prefix().css + 'transform', 'translate(' + (b - c) / 2 + 'px, 0)');
    });
    
    $(window).trigger('resize');
  };
  
})(jQuery)