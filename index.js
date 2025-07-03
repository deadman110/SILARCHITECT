window.addEventListener('scroll',function(){
    let navbar= document.querySelector('.navbar');
    if(window.scrollY > 20){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.building');
    const sideNav = document.getElementById('side-nav');

    if (toggleBtn && sideNav) {
        toggleBtn.addEventListener('click', function () {
            if (sideNav.style.width === '250px') {
                sideNav.style.width = '0';
            } else {
                sideNav.style.width = '250px';
            }
        });
    }
});
