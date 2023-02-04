$( document ).ready(function() {

$('.thumb img').on('click', thumbClick);

});

function thumbClick(event) {
    console.log(event.target)
    let elem = $(this).attr('src')
    console.log(elem);
    let index = elem.slice(12).replace(/[^0-9]/g,'')

    imageSlider(index)
    changeCircleColor(index)
}

function imageSlider(index) {
    $('.imgObj').attr('src', './images/img' + index + '.png')
    console.log('./images/img' + index + '.png');
}

function changeCircleColor(index) {
    switch (index) {
        case '1':
            $('.backCircle').css('background', '#017120')
            $('.content .textBox h2 span').css('color', '#017120')
            $('.content .textBox a').css('background', '#017120')

            break;
        case '2':
            $('.backCircle').css('background', '#f263cd')
            $('.content .textBox h2 span').css('color', '#f263cd')
            $('.content .textBox a').css('background', '#f263cd')
            break;
        case '3':
            $('.backCircle').css('background', '#9210c6')
            $('.content .textBox h2 span').css('color', '#9210c6')
            $('.content .textBox a').css('background', '#9210c6')
            break;
        default:
            $('.backCircle').css('background', '#fff')
            $('.content .textBox h2 span').css('color', '#000')
            $('.content .textBox a').css('background', '#000')
    }
}