var myToggle = document.getElementById('menuBtn');

menuBtn.onclick = function () {

	menuBtn.classList.toggle('active');
}

$(document).ready(function () {

    /*=========nav adding class========*/
    $(window).scroll(function () {
        $n = $(window).scrollTop();
        if ( $n >= 1) {
            $('#navToggle').addClass('nav-panel');
        
        } else {
            $('#navToggle').removeClass('nav-panel');
        
        
        }
    
    
    
    
    })





})