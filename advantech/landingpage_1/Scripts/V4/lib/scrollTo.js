/* Copyright (c) 2006 Xiao Feng
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2010-07-7 10:30:56 $
 * $Rev: 1 $
 *
 * Version 1.0.1
 */
(function($){
	$.extend($.fn,{
		scrollTo:function(time,to){
			time=time||1200;
			to=to||1;
            $('a[href*=#]', this).click(function(){
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var $target = $(this.hash);
                    $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
                    if ($target.length) {
                        if (to == 1) {
                            $('html,body').animate({
                                scrollTop: $target.offset().top
                            }, time,'easeInOutQuart', $(this).data.completeFunction);
                        }
                        else if(to==2){
                            $('html,body').animate({
                                scrollLeft: $target.offset().left
                            }, time,'easeInOutQuart', $(this).data.completeFunction);
                        }else{
							alert('argument error');
						}
                        return false;
                    }
                }
            });
		}
	});
})(jQuery);