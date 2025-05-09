function greetUser() {
    const name = document.getElementById("nameInput").value;
    const greeting = document.getElementById("greeting");
    greeting.textContent = name ? `Hello, ${name}` : "Hello";
  }
  
  const colors = ["red", "blue", "green", "yellow"];
  
  colors.forEach(color => {
    const box = document.getElementById(color);
    box.addEventListener("click", () => {
      box.style.backgroundColor = color;
    });
  });
  