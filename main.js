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
loadEmployees();
function loadEmployees() {
let employees = localStorage.getItem('employees');
employees = employees;
JSON.parse(employees) ; [];
 };
 document.getElementById('totalCount').innerText = employees.length;
 const tbody = document.getElementById('tableBody');
tbody.innerHTML = '';
if (employees.length === 0) {
   tbody.innerHTML = '<tr><td colspan="5" class="empty">No employees found. Add one!</td></tr>';
  return;
}