  addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
        window.scrollTo(0, 1);
    }
  /*line*/
    $(function() {
        $(window).scroll(function() {
            if ($(document).height() - $(window).height() - $(window).scrollTop() < 300) {
                $('#lineBanner').stop().fadeOut("fast");
            } else {
                $('#lineBanner').fadeIn("fast");
            }
            if ($(window).width() < 768) {
                $('#lineLink').attr('href','http://line.naver.jp/ti/p/%40kzq1132b'); /*手機版 加入好友連結*/
            } else {
                $('#lineLink').attr('href','http://accountpage.line.me/kzq1132b'); /*電腦版 加入好友連結*/
            }                        
        });
    });

  /*menuzord*/
   $(document).ready(function() {
            $("#menuzord").menuzord({
                     align: "left",
            });
    });

 /*hover*/
 document.execCommand("BackgroundImageCache", false, true);         