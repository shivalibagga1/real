$(document).ready(function(){
	$('.collapse-menu').on("click",function(e){
        e.preventDefault();
		$('#nav a:not(:first)').toggle();
        $('#sub-nav1').toggle();
	});
    
	$('.ui.dropdown').dropdown();
    $("#prop-tab").on("click",function(e){
        e.preventDefault();
        $('#sub-nav1 a').toggle();
    });
});


$(window).scroll(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    $('.prop1').each(function (index) {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            // $(this).addClass('visible').delay();
            var $this = $(this);
            setTimeout(function () { $this.addClass("enterIn"); }, index * 500);
        }else{
            // $(this).removeClass('visible');
        }
    });
});

$(window).scroll(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    $('.about1').each(function (index) {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            $(this).addClass('show').delay();
            // var $this = $(this);
            // setTimeout(function () { $this.addClass("show"); }, index * 700);
        }else{
            // $(this).removeClass('visible');
        }
    });

    
});

$(window).scroll(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    $('.about3').each(function (index) {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            $(this).addClass('show1').delay();
            // var $this = $(this);
            // setTimeout(function () { $this.addClass("show"); }, index * 700);
        }else{
            // $(this).removeClass('visible');
        }
    });
});


$(window).scroll(function () {
    var topOfWindow = $(window).scrollTop(),
        bottomOfWindow = topOfWindow + $(window).height();

    $('.others').each(function (index) {
        var imagePos = $(this).offset().top;

        if(imagePos <= bottomOfWindow && imagePos >= topOfWindow){
            // $(this).addClass('visible').delay();
            var $this = $(this);
            setTimeout(function () { $this.addClass("enterIn"); }, index * 500);
        }else{
            // $(this).removeClass('visible');
        }
    });
});

// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })





