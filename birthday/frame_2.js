$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		var d_w = 35;
		$(window).resize(function(){
			vw = $(window).width()/2-30;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
			$('#b11').animate({top:240, left: vw-d_w*4},500);
			$('#b22').animate({top:260, left: vw-d_w*3},500);
			$('#b33').animate({top:240, left: vw-d_w*2},500);
			$('#b44').animate({top:260, left: vw-d_w/2},500);
			$('#b55').animate({top:240, left: vw+d_w/2},500);
			$('#b66').animate({top:260, left: vw+d_w*2},500);
			$('#b77').animate({top:240, left: vw+d_w*3},500);
			$('#b88').animate({top:260, left: vw+d_w*4},500);
		});

	$('#come_in').click(function(){
		document.getElementById("window_canvas").style.display = "none";
		document.getElementById("room_frame2").style.display = "block";

		$('.room').css('backgroud-color','black');
		$('.room').css('width',window.innerWidth);
		$('.room').css('height',window.innerHeight-30);
		$(this).fadeOut('slow').delay(500).promise().done(function(){
			$('#turn_on').fadeIn('slow');
		});
	});

	$('#turn_on').click(function(){
        $('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('.room').addClass('peach');
		// $('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('.room').css('backgroud-color','#FFF');
		$('.room').addClass('peach-after');
		// $('body').css('backgroud-color','#FFF');
		// $('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// function check_is_mobile(){
	// 	var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	// 	return isMobile;
	// }

	var mobile_w = window.innerWidth;
	var mobile_h = window.innerWidth;

	function loopOne() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}
	function loopEight() {
		var randleft = mobile_w*Math.random();
		var randtop = mobile_h*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b8').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		vw = $(window).width()/2-30;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b8').attr('id','b88')
		$('#b11').animate({top:240, left: vw-d_w*4},500);
		$('#b22').animate({top:260, left: vw-d_w*3},500);
		$('#b33').animate({top:240, left: vw-d_w*2},500);
		$('#b44').animate({top:260, left: vw-d_w/2},500);
		$('#b55').animate({top:240, left: vw+d_w/2},500);
		$('#b66').animate({top:260, left: vw+d_w*2},500);
		$('#b77').animate({top:240, left: vw+d_w*3},500);
		$('#b88').animate({top:260, left: vw+d_w*4},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		fn_mid_libs();
		fn_left_libs();
		fn_right_libs();

		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					// $('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);

		$(this).fadeOut('slow').delay(20000).promise().done(function(){
			$('#video').fadeIn('slow');
		});
		
	});

	$('#video').click(function(){
		var elem = document.getElementById("vshow");
		elem.style.display = "block";
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen();
		}
	});
});
