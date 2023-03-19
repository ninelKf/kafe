window.onload = function ( ) {
    $('.field').css({
        "width": window.innerWidth * 0.7,
        "height": window.innerWidth * 0.9 / 3,
    })
    var size = window.innerWidth * 0.7 / 7 - 3;
    var amount = 0;
    $('.amount').html(21 - amount);
    $('.thanos').click(function () {
        amount = amount + 1;
        $('.amount').html(21 - amount);
        if (amount < 21) {
            var cell = $('<div class="cell"></div>');
            cell.css({'width': size, 'height': size});
            $('.field').append(cell);
            anime({
                targets: '.thanos',
                left: function () { return anime.random(0, window.innerWidth - 200); },
                top: function () { return anime.random(0, window.innerHeight - 350); },
                duration: function () { return anime.random(1200, 1800); },
                delay: 200,
                direction: 'alternate',
                loop: false
            });
        } else {
            var cell = $('<div class="cell"></div>');
            cell.css({'width': size, 'height': size});
            $('.field').append(cell);
            $('.text').html('Вы спасли мир!');
            anime({
                targets: 'img',
                opacity: 0,
                width: $('.thanos').width() * 1.5,
                height: $('.thanos').height() * 1.5,
                delay: 500,
                duration: 15000,
            })
    }
})
}
