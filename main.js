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

const hour = new Date().getHours();
let greeting = '';

if (hour < 12) greeting = 'Good Morning! ';
else if (hour < 18) greeting = 'Good Afternoon! ';
else greeting = 'Good Evening! ';

if (heading && !heading.innerHTML.includes(greeting)) {
heading.innerHTML = `${greeting}<br>${heading.innerHTML}`;
}

