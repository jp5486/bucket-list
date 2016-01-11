Slideshow = React.createClass({

	jssor_1_slider_init() {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 1,
                $Align: 0
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 600);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
        },


	

	render() {
		return (
			<div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden; visibility: hidden;">
	        
	        <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">

	            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>

	            <div style="position:absolute;display:block;background:url('img_test/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>

	        </div>

	        <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 600px; height: 300px; overflow: hidden;">

	            <div data-p="112.50" style="display: none;">
	                <img data-u="image" src="img_test/01.jpg" />

	                <div data-u="thumb">Do you notice it is draggable by mouse/finger?</div>

	            </div>
	            <div data-p="112.50" style="display: none;">
	                <img data-u="image" src="img_test/02.jpg" />

	                <div data-u="thumb">Did you drag by either horizontal or vertical?</div>

	            </div>

	            <div data-p="112.50" style="display: none;">
	                <img data-u="image" src="img_test/03.jpg" />

	                <div data-u="thumb">Do you notice navigator responses when drag?</div>

	            </div>

	            <div data-p="112.50" style="display: none;">
	                <img data-u="image" src="img_test/04.jpg" />

	                <div data-u="thumb">Do you notice arrow responses when click?</div>

	            </div>
	        </div>
	        
	        <div data-u="thumbnavigator" class="jssort09-600-45" style="position:absolute;bottom:0px;left:0px;width:600px;height:45px;">

	            <div style="position: absolute; top: 0; left: 0; width: 100%; height:100%; background-color: #000; filter:alpha(opacity=40.0); opacity:0.4;"></div>
	            
	            <div data-u="slides" style="cursor: default;">

	                <div data-u="prototype" class="p">

	                    <div data-u="thumbnailtemplate" class="t"></div>

	                </div>

	            </div>
	            
	        </div>
	        
	        <div data-u="navigator" class="jssorb01" style="bottom:16px;right:16px;">
	            <div data-u="prototype" style="width:12px;height:12px;"></div>
	        </div>
	        
	        <span data-u="arrowleft" class="jssora05l" style="top:0px;left:8px;width:40px;height:40px;" data-autocenter="2"></span>
	        <span data-u="arrowright" class="jssora05r" style="top:0px;right:8px;width:40px;height:40px;" data-autocenter="2"></span>
	        <a href="http://www.jssor.com" style="display:none">Bootstrap Carousel</a>
		    {this.jssor_1_slider_init()}
	    </div>

	    );
	}
})