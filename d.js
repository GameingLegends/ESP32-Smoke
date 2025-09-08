let isActive = true;  
let smokeLevel = 65;

const statusEl = document.getElementById("status");
statusEl.textContent = isActive ? "Active" : "Inactive";
statusEl.classList.toggle("active", isActive);
statusEl.classList.toggle("inactive", !isActive);


function updateSmokeLevel(level) {
  const circle = document.querySelector(".circle");
  const text = document.getElementById("smokeLevel");

  text.textContent = level + "%";

  let color = "#28a745"; 
  if (level > 50) color = "#ffc107";
  if (level > 80) color = "#dc3545"; 

  circle.style.background = conic-gradient(${color} ${level}%, #ddd ${level}%);
}


updateSmokeLevel(smokeLevel);
