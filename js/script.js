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
    /*=========small-nav adding class========*/
    $('#menuBtn').click(function () {
        $nav = 1;
        if ($nav <= 50) {
            $('#showNav').toggleClass('nav-show')
        } else {
        
        }

    
        
    
    
    
    })
    /*==========top-btn============*/
    top-btn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        
        })
    
    
    }




})