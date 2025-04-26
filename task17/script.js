const container = document.getElementById("studentContainer");
const searchBox = document.getElementById("searchBox");
let students = [];

// Fetch students from a placeholder API (simulate real student records)
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    // Simulate structure: name, marks, class, address
    students = data.map(user => ({
      name: user.name,
      marks: Math.floor(Math.random() * 40 + 60), // random marks 60–100
      class: `Class ${Math.floor(Math.random() * 4 + 8)}${String.fromCharCode(65 + Math.floor(Math.random() * 3))}`,
      address: user.address.city
    }));
    renderStudents(students);
  })
  .catch(err => console.error("Failed to fetch data", err));

// Render student cards
function renderStudents(studentList) {
  container.innerHTML = "";
  studentList.map(student => {
    const card = `
      <div class="card">
        <h3>${student.name}</h3>
        <p><strong>Marks:</strong> ${student.marks}</p>
        <p><strong>Class:</strong> ${student.class}</p>
        <p><strong>Address:</strong> ${student.address}</p>
      </div>`;
    container.innerHTML += card;
  });
}

// Filter on input
searchBox.addEventListener("input", () => {
  const searchTerm = searchBox.value.toLowerCase();
  const filtered = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm)
  );
  renderStudents(filtered);
});
