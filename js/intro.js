       var a = document.querySelectorAll('.intro');
       console.log(a[0].offsetHeight);

       $('.intro').animate({
           "height": "100vh"
       }, 5000);

       var timer;
       timer = setInterval(function () { //타임 자동
           console.log($('.intro').outerHeight());


           if ($('.intro').outerHeight() >= 30) {
               $('.go').show();
           }

           if ($('.intro').outerHeight() >= 450) {
               $('.me').show();
           }

           if ($('.intro').outerHeight() == 2000) {
               clearInterval(timer); //타임 자동 함수 멈춤
           }
       }, 100);

       var count = 1;
       setInterval(function () {
           if (count == 1) {
               $('.web1').css({
                   "top": "-50%",
                   "transform": "rotateX(90deg)"
               });
               $('.web2').css({
                   "top": "0",
                   "transform": "rotateX(0deg)"
               });
               $('.web3').css({
                   "top": "50%",
                   "transform": "rotateX(270deg)"
               });
               $('.web4').css({
                   "top": "0",
                   "transform": "rotateX(180deg)"
               });
               count++;
           } else if (count == 2) {
               $('.web1').css({
                   "top": "0%",
                   "transform": "rotateX(180deg)"
               });
               $('.web2').css({
                   "top": "-50%",
                   "transform": "rotateX(90deg)"
               });
               $('.web3').css({
                   "top": "0%",
                   "transform": "rotateX(0deg)"
               });
               $('.web4').css({
                   "top": "50%",
                   "transform": "rotateX(270deg)"
               });
               count++;
           } else if (count == 3) {
               $('.web1').css({
                   "top": "50%",
                   "transform": "rotateX(270deg)"
               });
               $('.web2').css({
                   "top": "0%",
                   "transform": "rotateX(180deg)"
               });
               $('.web3').css({
                   "top": "-50%",
                   "transform": "rotateX(90deg)"
               });
               $('.web4').css({
                   "top": "0%",
                   "transform": "rotateX(0deg)"
               });
               count++;
           } else {
               $('.web1').css({
                   "top": "0%",
                   "transform": "rotateX(0deg)"
               });
               $('.web2').css({
                   "top": "50%",
                   "transform": "rotateX(270deg)"
               });
               $('.web3').css({
                   "top": "0%",
                   "transform": "rotateX(180deg)"
               });
               $('.web4').css({
                   "top": "-50%",
                   "transform": "rotateX(90deg)"
               });
               count = 1
           }
       }, 2000)