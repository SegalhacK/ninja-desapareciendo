 // 01 HID
 $(document).ready(function () {
    $('#btn-hide').on('click', function () {
        $('#parrhide').hide();
    })

    // 02 SHOW
    $('#btn-show').on('click', function () {
        $('#pshow').show();
    })

    // 03 TOGGLE
    $('#btn-toggle').on('click', function () {
        $('#ptoggle').toggle();
    })

    // 04 SLIDE DOWN
    $('#btn-slidedown').on('click', function () {
        $('#pslidedown').slideDown();
    })

    // 05 SLIDE UP
    $('#btn-slideup').on('click', function () {
        $('#pslideup').slideUp();
    })

    // 06 FADE IN
    $('#btn-fadein').on('click', function () {
        $('#pfadein').fadeIn();
    })

    // 07 FADE OUT
    $('#btn-fadeout').on('click', function () {
        $('#pfadeout').fadeOut();
    })

    // 08 ADD CLASS
    $('#btn-addclass').on('click', function () {
        $('#paddclass').addClass('bg-danger');
    })

    // 09 BEFORE
    $('#btn-before').on('click', function () {
        $('#pbefore').before('<p><b>Esto se inserta ANTES del elemento</b></p>');
    })

    // 10 AFTER
    $('#btn-after').on('click', function () {
        $('#pafter').after('<p><b>Esto se inserta DESPUÉS del elemento</b></p>');
    })

    // 11 APPEND
    $('#btn-append').on('click', function () {
        $('#pappend').append($('#fxhide'));
    })

    // 12 HTML
    $('#btn-html').on('click', function () {
        $('#phtml').html('<h1>Agregué un h1<h1>');
    })

    // 13 ATTR
    $('#btn-html').on('click', function () {
        $('#phtml').html('<h1>Agregué un h1<h1>');
    })

    // 14 VAL
    // Get the value from a checked checkbox
    $('#btn-val').on('click', function () {
        $( "input[type=checkbox][name=color]:checked" ).val();
    })

    // 15 TEXT
    $('#btn-text').on('click', function () {
        $('#ptext').text('<h1>Agregué un h1 y lo interpreta como string<h1>');
    })
})