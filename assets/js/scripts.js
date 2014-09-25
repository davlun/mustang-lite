/**
 * Theme Frontend Scripts
 *
 * @package    WebMan WordPress Theme Framework
 * @copyright  2014 WebMan - Oliver Juhas
 *
 * @since    1.0
 * @version  1.2
 */

jQuery.fn.nospam=function(){return this.each(function(){var a=null,b=jQuery(this);a=jQuery(this).is("a[data-address]")?b.data("address").split("").reverse().join("").replace("[at]","@").replace(/\//g,"."):b.text().split("").reverse().join("").replace("[at]","@").replace(/\//g,"."),a&&(b.is("a[data-address]")?(b.attr("href","mailto:"+a),b.text(a)):b.text(a))})},jQuery(function(){function a(){var a="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-moz-min-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)";return window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(a).matches}function i(){var a=jQuery(window).scrollTop(),b="undefined"!=typeof d?d:f.top,c=0;b+e.outerHeight()<a?(c=b+h-g,e.parent().addClass("is-sticky")):(c=0>b-g?0:b-g,e.parent().removeClass("is-sticky")),jQuery(".website-container").css("padding-top",Math.round(c))}function m(){var a=jQuery("#nav-main"),b="rtl"!=jQuery("html").attr("dir")?"left":"right",c="-500px"===a.css(b)?0:-500,d=jQuery(".header-wrapper").css("z-index");0===c?jQuery(".header-wrapper").css({zIndex:999999}):jQuery(".header-wrapper").css({zIndex:d}),"rtl"!=jQuery("html").attr("dir")?a.stop().animate({left:c},200):a.stop().animate({right:c},200)}function t(){s.find(".wp-video").css({width:s.outerWidth(),height:s.outerHeight()}),s.each(function(){var a=jQuery(this),b=a.closest(".wm-section").outerWidth(),c=a.closest(".wm-section").outerHeight();c>a.outerHeight()&&(a.find("> .wp-video").css({width:16*(c/9),height:c}),a.css({width:16*(c/9),height:c}).closest(".wm-video").css({left:0-(16*(c/9)-b)/2,top:0,margin:0}))})}wmMasonryLayoutCompensation=1,jQuery(".no-js").removeClass("no-js"),jQuery().isotope&&jQuery(".filter-this").isotope({transitionDuration:0}),jQuery("a.email-nospam").nospam(),jQuery(".lie8 img[height]").removeAttr("height"),jQuery(".top-of-page").length&&(jQuery(".top-of-page").hide(),jQuery(window).scroll(function(){var a=jQuery(window).scrollTop();a>200?jQuery(".top-of-page").fadeIn():jQuery(".top-of-page").fadeOut()}));var b=jQuery(".logo img");if(a()&&b.data("highdpi")&&b.attr("src",b.data("highdpi")),jQuery(".wpcf7 p, .wpcf7 span").each(function(){var a=jQuery(this);""==jQuery.trim(a.html())&&a.remove()}),jQuery("body").hasClass("slider-enabled")){var c=jQuery("#slider"),d=c.outerHeight();c.imagesLoaded(function(){var a=jQuery("#wpadminbar"),b=a.offset(),e=a.length&&!b.top?a.outerHeight():0,f=c.offset().left;d=c.outerHeight(),jQuery(window).on("resize orientationchange",function(){d=c.outerHeight(),jQuery("body").hasClass("boxed")&&(f=jQuery(".website-container").offset().left,c.css({left:f}))}),jQuery(".website-container").css("padding-top",d),c.css({position:"fixed",left:f,top:e,zIndex:0}),jQuery(window).on("scroll",function(){var b=d/3,f=2,g=100-100*(jQuery(window).scrollTop()-b)/d/f;0>g?g=0:g>100&&(g=100),jQuery(".slider-fade-out #slider > .slider-content").css("opacity",g/100),c.css("top",e-.5*jQuery(window).scrollTop()+"px")})})}var e=jQuery("#header");if(jQuery("body").hasClass("sticky-header")&&e.length){var f=e.position(),g=jQuery("#topbar").outerHeight(!0),h=e.outerHeight();jQuery("body").hasClass("sticky-header-global")||e.wrap('<div class="header-wrapper">'),jQuery(window).on("scroll resize orientationchange",function(){i()})}jQuery('.form-search input[type="text"], .bbp-search-form input[type="text"]').attr("x-webkit-speech","x-webkit-speech"),jQuery("#menu-search").on("click","a",function(a){var b=jQuery(this).attr("href");jQuery(b).show(),jQuery(b+' input[type="text"]').focus(),a.preventDefault()}),jQuery(".form-close").on("click",function(a){jQuery(this).parent().hide(),a.preventDefault()});var j=jQuery("body").hasClass("sticky-header")?e.outerHeight():0,k=wmCurrentSection=wmSectionId="",l=jQuery(".wm-row[id]");jQuery(window).on("resize orientationchange",function(){j=e.outerHeight()}),jQuery("body").on("click",'a[href^="#"]',function(a){var b=jQuery(this),c=b.not(".mobile-nav").attr("href"),d=jQuery("html, body"),e=1024>=document.body.clientWidth?0:600;"#"===b.attr("href")||b.data("tab")||b.data("filter")||b.hasClass("no-scroll-link")||(a.preventDefault(),b.hasClass("inner")&&!jQuery(a.target).is(".expander")&&jQuery("body").hasClass("responsive-design")&&m(),c&&"#"!==c&&d.stop().animate({scrollTop:jQuery(c).offset().top-j+2+"px"},e))}),jQuery("body").hasClass("page")&&jQuery(window).scroll(function(){var a=jQuery(this).scrollTop()+j;wmCurrentSection=l.map(function(){var b=jQuery(this);return b.offset().top<a?b:void 0}),wmCurrentSection=wmCurrentSection[wmCurrentSection.length-1],wmSectionId=wmCurrentSection&&wmCurrentSection.length?wmCurrentSection[0].id:"",k!==wmSectionId&&(k=wmSectionId,jQuery("#nav-main li").removeClass("active-menu-item"),jQuery('#nav-main li a[href="#'+wmSectionId+'"]').parent().addClass("active-menu-item"))}),jQuery("body").hasClass("responsive-design")&&(jQuery('<a href="#nav-main" class="mobile-nav"></a>').insertBefore("#nav-main > .menu"),e.on("click",".mobile-nav",function(a){a.preventDefault(),m()}),jQuery('<i class="iconwm-down expander"></i>').appendTo("#nav-main .menu-item-has-children > .inner"),jQuery("#nav-main").on("click",".expander",function(a){a.preventDefault();var b=jQuery(this),c=b.closest(".menu-item").hasClass("megamenu");b.toggleClass("expanded"),c?b.closest(".menu-item").find("> .sub-menu, .empty-menu-item > .sub-menu").slideToggle(200):b.parent(".inner").next(".sub-menu").slideToggle(200)}));var n=jQuery("#topbar-extra");if(n.on("click",".topbar-extra-switch",function(a){n.toggleClass("open").find(".wrap-inner").slideToggle(),a.preventDefault()}),jQuery().masonry&&1<jQuery(".footer-widgets.masonry-enabled").data("columns")){var o=jQuery("#footer .footer-widgets-container");o.addClass("masonry-this with-margin").find("> .widget").addClass("wm-column with-margin width-1-"+jQuery(".footer-widgets.masonry-enabled").data("columns")),o.imagesLoaded(function(){o.masonry({itemSelector:".widget",isRTL:"rtl"==jQuery("html").attr("dir"),isOriginLeft:"rtl"!=jQuery("html").attr("dir")})})}if(jQuery().masonry){var p=jQuery(".gallery.masonry-container");p.imagesLoaded(function(){p.masonry({itemSelector:"figure",isRTL:"rtl"==jQuery("html").attr("dir"),isOriginLeft:"rtl"!=jQuery("html").attr("dir")})})}if(jQuery('iframe[src*="youtube.com"]').each(function(){var b=jQuery(this).attr("src");b+=-1==b.indexOf("?")?"?wmode=transparent":"&amp;wmode=transparent",jQuery(this).attr("src",b)}),jQuery().prettyPhoto&&jQuery("body").hasClass("theme-lightbox-enabled")){var q='a[href*=".gif"], a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".mov"], a[href*=".swf"], .lightbox, a.modal, a[data-modal], a[data-target="modal"], a[rel^="prettyPhoto"], a[rel^="lightbox"]',r={deeplinking:!1,overlay_gallery:!1,show_title:!1,slideshow:6e3,social_tools:!1,theme:"pp_webman",opacity:"0.8",default_width:800,default_height:450,horizontal_padding:0,ie6_fallback:!1,markup:'<div class ="pp_pic_holder"><div class="ppt">&nbsp;</div><div class="pp_content_container"><div class="pp_content"><div class="pp_loaderIcon"></div><div class="pp_fade"><a class="pp_close" href="#">Close</a><a href="#" class="pp_expand" title="Expand the image">Expand</a><div class="pp_nav"><a href="#" class="pp_arrow_previous">Previous</a><p class="currentTextHolder">0/0</p><a href="#" class="pp_arrow_next">Next</a></div><div class="pp_hoverContainer"><a class="pp_next" href="#">next</a><a class="pp_previous" href="#">previous</a></div><div id="pp_full_res"></div><div class="pp_details"><p class="pp_description"></p></div></div></div></div></div><div class="pp_overlay"></div>'};jQuery(".product > .images a").attr("rel","prettyPhoto[product-gallery]"),jQuery(".gallery, .tiled-gallery, .wm-slideshow").each(function(){var a=jQuery(this),b=a.find(q),c="gallery"+Math.floor(100*Math.random()+1);b.attr({rel:"prettyPhoto["+c+"]",title:function(){return jQuery(this).find("img").attr("title")}})}),jQuery(q).not(".no-lightbox").addClass("cursor-zoom-in").prettyPhoto(r),jQuery('a[rel^="prettyPhoto"]').prettyPhoto(r)}if(jQuery('<ul class="wm-tab-links"></ul>').prependTo(".wm-tabbed-widgets.wm-tabs"),jQuery(".wm-tabbed-widgets.wm-tabs > .wm-item").each(function(){var a=jQuery(this),b=a.attr("id"),c=a.find(".tab-title").html();c||(c="-"),jQuery('<li><a href="#'+b+'" data-tab="#'+b+'">'+c+"</a></li>").appendTo(".wm-tabbed-widgets > .wm-tab-links")}),jQuery().appear&&jQuery('.wm-progress, [class*="animation-"]').length&&(jQuery(".wm-progress.animated .wm-progress-bar").css("width",0),jQuery(".wm-progress.animated:in-viewport").each(function(){var a=jQuery(this);a.find(".wm-progress-bar").animate({width:a.data("progress")+"%"},2e3)}),jQuery('[class*="animation-"]:in-viewport').each(function(){var a=jQuery(this),b=a.attr("class");a.attr("class",b.replace("animation-","animated "))}),jQuery(".wm-progress.animated").appear().each(function(){var a=jQuery(this);a.on("appear",function(){a.find(".wm-progress-bar").animate({width:a.data("progress")+"%"},1e3)})}),jQuery('[class*="animation-"]').appear().each(function(){var a=jQuery(this),b=a.attr("class");a.on("appear",function(){a.attr("class",b.replace("animation-","animated "))})})),jQuery(".wm-section > .wm-row-video").length){var s=jQuery(".wm-section > .wm-row-video .media-container");t(),jQuery(window).on("resize orientationchange",function(){t()})}var u=jQuery(".wm-section, .vc_row_inner-shortcode, .match-column-height .wm-row");u.imagesLoaded(function(){function a(){u.children(".wm-column").css({height:"auto"}),800<document.body.clientWidth&&u.each(function(){var a=jQuery(this);a.children(".wm-column").not(".width-1-1").css({height:a.outerHeight()})})}a(),jQuery(window).on("resize orientationchange",function(){a()})}),jQuery("body").hasClass("page-layout-sections")&&jQuery(".extend-bg-before, .extend-background-before, .extend-bg-after, .extend-background-after").closest(".wm-section").addClass("overflow-hidden")});