$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        $('#contact-form').slideUp();
        $('#vopros').delay(300).slideDown();

        var minutes = 60 * 10,
            display = document.querySelector('.timer');
        startTimer(minutes, display);
    });

    $('#vopros-form').on('submit', function (e) {
        e.preventDefault();
        var currentVopros = $('.current-col').html();
        if (currentVopros < 10 ){
            currentVopros++;
            $('.current-col').html(currentVopros);
            var newImage = '<img src="images/vopros.jpg" alt="">',
                newVopros = 'ДРУГОЙ ВОПРОС' + currentVopros;
            $('.vopros-content .image-block').html(newImage);
            $('.vopros-content .text').html(newVopros);
            $('#vopros-form').get(0).reset();
        } else {
            $('#vopros').slideUp();
            clearInterval(timerInterval);
            $('#result').delay(300).slideDown();
        }
    });


});


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            $('#vopros').slideUp();
            clearInterval(timerInterval);
            $('#result').delay(300).slideDown();
        }
    }, 1000);
}