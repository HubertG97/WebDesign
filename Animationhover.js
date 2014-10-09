 $(document).ready(function () {
        $(".table img").hover(function () {
            $(this).stop().animate({ width: 150, height: 180 }, 100);
        }, function () {
            $(this).stop().animate({ width: 100, height: 120 }, 100);
        });
    });

