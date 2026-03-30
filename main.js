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
for (let i = 0; i < employees.length; i++) {
const emp = employees[i];
tbody.innerHTML += `
<tr>
<td>${emp.name || emp.fullName || 'N/A'}</td>
<td>${emp.email || 'N/A'}</td>
<td>${emp.phone || 'N/A'}</td>
<td>${emp.department || 'N/A'}</td>
<td>
<button class="btn-details" onclick="viewDetails(${i})">Details</button>
<button class="btn-edit" onclick="editEmployee(${i})">Edit</button>
<button class="btn-delete" onclick="deleteEmployee(${i})">Delete</button>
</td>
</tr>
`;
}
function viewDetails(index) {
let employees = JSON.parse(localStorage.getItem('employees')) || [];
let emp = employees[index];

document.getElementById('detailsContent').innerHTML = `
<p><strong>Name:</strong> ${emp.name || emp.fullName}</p>
<p><strong>Email:</strong> ${emp.email}</p>
<p><strong>Phone:</strong> ${emp.phone}</p>
<p><strong>Department:</strong> ${emp.department}</p>
<p><strong>Position:</strong> ${emp.position || 'N/A'}</p>
`;
document.getElementById('detailsModal').style.display = 'block';
}
function editEmployee(index) {
let employees = JSON.parse(localStorage.getItem('employees')) || [];
let emp = employees[index];

let newName = prompt('Edit Name:', emp.name || emp.fullName);
let newEmail = prompt('Edit Email:', emp.email);
let newPhone = prompt('Edit Phone:', emp.phone);
let newDept = prompt('Edit Department (IT/HR/Marketing/Sales/Finance):', emp.department);
if (newName !== null && newEmail !== null && newPhone !== null && newDept !== null) {
employees[index] = {
...emp,
name: newName,
fullName: newName,
email: newEmail,
phone: newPhone,
department: newDept
};
localStorage.setItem('employees', JSON.stringify(employees));
alert('Employee updated successfully!');
loadEmployees();
}
}