

$('.langBar').on('click', function(){
	if ( $(this).hasClass('active') == true ) {
		$(this).removeClass('active');
	} else {
		$(this).addClass('active');
	};
});

// Hamburger Menu
$('.hmbrgrMenu').on('click', function(){
	if ( $(this).hasClass('active') == true ) {
		$(this).removeClass('active');
		$('body').removeClass('noScroll');
		$('.hmbrgrMenuCnt').fadeOut(500);
	} else {
		$(this).addClass('active');
		$('body').addClass('noScroll');
		$('.hmbrgrMenuCnt').fadeIn(500);
	};
});

$('#searchIcon').on('click', function(){
	if ( $(this).hasClass('active') == true ) {
		$(this).removeClass('active');
		$('body').removeClass('noScroll');
		$('.searchPopUpCnt').fadeOut(500);
	} else {
		$(this).addClass('active');
		$('body').addClass('noScroll');
		$('.searchPopUpCnt').fadeIn(500);
	};
});

$('.closeBtn').on('click', function(){
	$('#searchIcon').removeClass('active');
	$('body').removeClass('noScroll');
	$('.searchPopUpCnt').fadeOut(500);
});



// Home Slider
$('.slider_cnt').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	fade: true,
	cssEase: 'linear',
	arrows: false,
	dots: true
});

$('.evntHmSlider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 4000,
	arrows: false,
	dots: true
});
$('.evntHmSlider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-list').removeClass('do-transition');
}).on('afterChange', function(){
    $('.slick-list').addClass('do-transition');
});


// Home Testimonial 
$('.tsmnalSlider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	autoplaySpeed: 1000,
	arrows: false,
	dots: true
});

// Home Gallery Popup
	$('.masonryChild').on('click', function(){
		$('.masonryChild').removeClass('selected');
		var hmBigImgVal = $(this).find('#hmGlrybigImg').attr('src');
		var contentVal = $(this).find('.hmGlryCntn').text();
		$(this).addClass('selected');
		$('#hmGlryOvly').fadeIn(500);
		$('#hmGlryBxCnt').find('#hmGlryCrntImg').attr('src', hmBigImgVal);
		$('#hmGlryBxCnt').find('#hmGlryCrntTxt').text(contentVal);
		$('body').addClass('noScroll');
	});

	$('#hmGlryClsBtn').on('click', function(){
		$('.masonryChild').removeClass('selected');
		$('#hmGlryOvly').fadeOut(500);
		$('#hmGlryBxCnt').find('#hmGlryCrntImg').attr('src', '');
		$('#hmGlryBxCnt').find('#hmGlryCrntTxt').text('');
		$('body').removeClass('noScroll');
	});

	// LightBox Left/Right Arrow
	$('#hmGlryPrvBtn').on('click', function() {
		var prevImg = $('.glryHmCnt').find('.selected').prev().find('#hmGlrybigImg').attr('src');
		var prevImgCntnt = $('.glryHmCnt').find('.selected').prev().find('.hmGlryCntn').text();
		$('.glryHmCnt').find('.selected').removeClass('selected').prev().addClass('selected');
		$('#hmGlryBxCnt').find('#hmGlryCrntImg').attr('src', prevImg);
		$('#hmGlryBxCnt').find('#hmGlryCrntTxt').text(prevImgCntnt);
	});

	$('#hmGlryNxtBtn').on('click', function() {
		var nextImg = $('.glryHmCnt').find('.selected').next().find('#hmGlrybigImg').attr('src');
		var nextImgCntnt = $('.glryHmCnt').find('.selected').next().find('.hmGlryCntn').text();
		$('.glryHmCnt').find('.selected').removeClass('selected').next().addClass('selected');
		$('#hmGlryBxCnt').find('#hmGlryCrntImg').attr('src', nextImg);
		$('#hmGlryBxCnt').find('#hmGlryCrntTxt').text(nextImgCntnt);
	});


// Image Gallery Popup
	$('.imgCntChild').on('click', function(){
		$('.imgCntChild').removeClass('selected');
		var imgBigImgVal = $(this).find('#imgGlrybigImg').attr('src');
		var contentVal = $(this).find('#imgGlryTxtCnt').text();
		$(this).addClass('selected');
		$('#imgGlryOvly').fadeIn(500);
		$('#imgGlryBxCnt').find('#imgGlryCrntImg').attr('src', imgBigImgVal);
		$('#imgGlryBxCnt').find('#imgGlryCrntTxt').text(contentVal);
		$('body').addClass('noScroll');
	});

	$('#imgGlryClsBtn').on('click', function(){
		$('.imgCntChild').removeClass('selected');
		$('#imgGlryOvly').fadeOut(500);
		$('#imgGlryBxCnt').find('#imgGlryCrntImg').attr('src', '');
		$('#imgGlryBxCnt').find('#hmGlryCrntTxt').text('');
		$('body').removeClass('noScroll');
	});

	// Image Gallery LightBox Left/Right Arrow
	$('#imgGlryPrvBtn').on('click', function() {
		var prevImg = $('#imgCntMainChild').find('.selected').prev().find('#imgGlrybigImg').attr('src');
		var prevImgCntnt = $('#imgCntMainChild').find('.selected').prev().find('#imgGlryTxtCnt').text();
		$('#imgCntMainChild').find('.selected').removeClass('selected').prev().addClass('selected');
		$('#imgGlryBxCnt').find('#imgGlryCrntImg').attr('src', prevImg);
		$('#imgGlryBxCnt').find('#imgGlryCrntTxt').text(prevImgCntnt);
	});

	$('#imgGlryNxtBtn').on('click', function() {
		var nextImg = $('#imgCntMainChild').find('.selected').next().find('#imgGlrybigImg').attr('src');
		var nextImgCntnt = $('#imgCntMainChild').find('.selected').next().find('#imgGlryTxtCnt').text();
		$('#imgCntMainChild').find('.selected').removeClass('selected').next().addClass('selected');
		$('#imgGlryBxCnt').find('#imgGlryCrntImg').attr('src', nextImg);
		$('#imgGlryBxCnt').find('#imgGlryCrntTxt').text(nextImgCntnt);
	});

// Video Gallery Popup
	$('.vdoGlryChild .imgGlry').on('click', function(){
		var ytId = $(this).find('.ytDataLink').attr('data-youtube-id');
		var autoplay = '?autoplay=1';
		var related_no = '&rel=0';
		var src = '//www.youtube.com/embed/'+ytId+autoplay+related_no;
		$('#vdoGlryLghtBxCnt').find("#ytVideo").attr('src', src);
		$('.vdoGlryChild').removeClass('selected');
		$(this).addClass('selected');
		$('#vdoGlryOvly').fadeIn(500);
		$('body').addClass('noScroll');
	});

	$('#vdoGlryClsBtn').on('click', function(e){
		e.preventDefault();
		$('#vdoGlryOvly').fadeOut(500);
		$('body').removeClass('noScroll');
		$('#vdoGlryLghtBxCnt').find("#ytVideo").attr('src', '');
	});

	// $('#vdoGlryNxtBtn').on('click', function() {
	// 	var nextVdo = $('#vdoGlryMnChild').find('.selected').find('.ytDataLink').attr('data-youtube-id');
	// 	alert(nextVdo);
	// 	$('#vdoGlryMnChild').find('.selected').removeClass('selected').next().addClass('selected');
	// 	$('#vdoGlryLghtBxCnt').find("#ytVideo").attr('src', nextVdo);
	// });

// Donation Button
	$('.donationBtn, .donationBnt, .abtDntBtn').on('click', function(){
		$('.hmbrgrMenuCnt').fadeOut(500);
		$('.hmbrgrMenu').removeClass('active');
		$('.donate_ppup_cnt').fadeIn(500);
		$('.donate_ppup_txt').addClass('bounceInDown');
		$('body').addClass('noScroll');
	});
	$('.cls_icn').on('click', function(){
		$('body').removeClass('noScroll');
		$('.donate_ppup_cnt').fadeOut(500);
		$('.donate_ppup_txt').removeClass('bounceInDown');
	});

// Scrollar 
	$(document).ready(function() {
		$('a[rel="relativeanchor"]').click(function(){
		    $('html, body').animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top - 80
		    }, 1000);
		    return false;
		}); 
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 600){
			$('.top_scroll_btn').css({
				bottom: 30 +'px',
			});
		}
		else {
			$('.top_scroll_btn').css({
				bottom: '-' + 100 + 'px'
			});
		}
	});

	var width = $(window).width(), height = $(window).height();
	if ( width <= 767 ) {
		$(".mblArw").click(function(){
			$(".menuBrCnt ul ul.hmbrgrSubMenu").slideUp('slow');
			if(!$(this).next().is(":visible")){
				$(this).next().slideDown('fast');
			}
		})
	};



// Sticky Header 
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('#mainHdr').outerHeight();
	var subMenu = $('.mainMenu > ul > li > ul.subMenu');
	var subChildMenu = $('.mainMenu > ul > li.active > ul.subMenu > li > ul.subChildMenu');

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If scrolled down and past the navbar, add class .nav-up.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('#mainHdr').removeClass('nav-down').addClass('nav-up');
	        $(subMenu).removeClass('scrollDown').addClass('scrollUp');
	        $(subChildMenu).removeClass('scrollDown2').addClass('scrollUp2');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('#mainHdr').removeClass('nav-up').addClass('nav-down');
	            $(subMenu).removeClass('scrollUp').addClass('scrollDown');
	            $(subChildMenu).removeClass('scrollUp2').addClass('scrollDown2');
	        }
	    }
	  
	    lastScrollTop = st;
	}

// Temp top menu active 
	var mainMenu = $('.mainMenu > ul > li > a');
	var subMenu2 = $('.mainMenu > ul > li > ul.subMenu > li > a');
	var subChildMenu2 = $('.mainMenu > ul > li > ul.subMenu > li > ul.subChildMenu > li > a');

	$(mainMenu).on('click', function(){
		$(mainMenu).parent('li').removeClass('active');
		$(this).parent('li').addClass('active');
	});
	$(subChildMenu2).on('click', function(){
		$(subChildMenu2).parent('li').removeClass('active');
		$(this).parent().addClass('active');
	});


// Flip
	$('.hover').hover(function(){
		$(this).addClass('flip');
	},function(){
		$(this).removeClass('flip');
	});

// Profile Image upload
	var readURL = function(input) {
	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function (e) {
	            $('.profile-pic').attr('src', e.target.result);
	        }    
	        reader.readAsDataURL(input.files[0]);
	    }
	}   
	$(".file-upload").on('change', function(){
	    readURL(this);
		var imgVal = $('.profile-pic').attr('src').length;
	    if (imgVal.length > 0 ) {
			$('.cnddtPhotoCnt').removeClass('active');
		} else {
			$('.cnddtPhotoCnt').addClass('active');
		}
	});    
	$(".imgUpldBtn").on('click', function() {
		$(".file-upload").click();	
	});

// select job type
	$('select').each(function(){
	    var $this = $(this), numberOfOptions = $(this).children('option').length;
	  
	    $this.addClass('select-hidden'); 
	    $this.wrap('<div class="select"></div>');
	    $this.after('<div class="select-styled"></div>');

	    var $styledSelect = $this.next('div.select-styled');
	    $styledSelect.text($this.children('option').eq(0).text());
	  
	    var $list = $('<ul />', {
	        'class': 'select-options'
	    }).insertAfter($styledSelect);
	  
	    for (var i = 0; i < numberOfOptions; i++) {
	        $('<li />', {
	            text: $this.children('option').eq(i).text(),
	            rel: $this.children('option').eq(i).val()
	        }).appendTo($list);
	    }
	  
	    var $listItems = $list.children('li');
	  
	    $styledSelect.click(function(e) {
	        e.stopPropagation();
	        $('div.select-styled.active').not(this).each(function(){
	            $(this).removeClass('active').next('ul.select-options').hide();
	        });
	        $(this).toggleClass('active').next('ul.select-options').toggle();
	    });
	  
	    $listItems.click(function(e) {
	        e.stopPropagation();

	        // external js by me
	        var $activeElement = $(".selected");
	        $(this).addClass('selected');
		    $activeElement.removeClass("selected");

	        $styledSelect.text($(this).text()).removeClass('active');
	        $this.val($(this).attr('rel'));
	        $list.hide();
	        //console.log($this.val());
	    });
	  
	    $(document).click(function() {
	        $styledSelect.removeClass('active');
	        $list.hide();
	    });

	});


$(document).ready(function() {
	var $el = $('.evntDtlPgBnr');
    $(window).on('scroll', function () {
        var scroll = $(document).scrollTop();
        $el.css({
            'background-position-y':(+.05 * scroll) + 'px'
        });
    });
});

$('.pstShareIcn').on('click', function(){
	$(this).toggleClass('active');
});