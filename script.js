// Toggle the side navigation
document.querySelector('.building').addEventListener('click', function () {
    const sideNav = document.getElementById('side-nav');
    sideNav.style.width = sideNav.style.width === '250px' ? '0' : '250px';
});

// Close side-nav when clicking on a link
document.querySelectorAll('.side-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('side-nav').style.width = '0';
    });
});
