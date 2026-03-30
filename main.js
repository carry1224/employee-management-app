const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const links = document.querySelectorAll('.nav-links li a');

links.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage) {
        link.classList.add('active');
    }
});
const heading = document.getElementById('heading');
const para = document.getElementById('para');