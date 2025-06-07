function login() {
  const coupleId = document.getElementById("coupleId").value.trim();
  const yourName = document.getElementById("yourName").value.trim();

  if (coupleId && yourName) {
    localStorage.setItem("coupleId", coupleId);
    localStorage.setItem("yourName", yourName);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter both Couple ID and Your Name 🌸");
  }
}
window.addEventListener("load", () => {
  const name = localStorage.getItem("yourName");
  const coupleId = localStorage.getItem("coupleId");
  
   if (!name || !coupleId) {
    window.location.href = "login.html";
  } else {
    const nameDisplay = document.getElementById("nameDisplay");
    const idDisplay = document.getElementById("idDisplay");

    if (nameDisplay) nameDisplay.textContent = name;
    if (idDisplay) idDisplay.textContent = coupleId;
  }
});

function updateName() {
  const newName = document.getElementById("newName").value.trim();
  if (newName) {
    localStorage.setItem("yourName", newName);
    document.getElementById("nameDisplay").textContent = newName;
    celebrateWithConfetti(); // Optional confetti to make it magical!
    alert("Name updated 💌");
  } else {
    alert("Please enter a name ✨");
  }
}

function logout() {
  localStorage.removeItem("yourName");
  localStorage.removeItem("coupleId");
  alert("Logged out. See you again soon 💔");
  window.location.href = "login.html";
}

function celebrateWithConfetti() {
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ffc0cb', '#ffe4e1', '#ff1493'],
    scalar: 1.2,
  });
}

document.getElementById("addNoteBtn").addEventListener("click", () => {
  const note = document.getElementById("noteInput").value;
  if (note.trim() !== "") {
    // Save your note logic here
    celebrateWithConfetti();  // 🎉 Woohoo!
    alert("Your love note is saved 💌");
  } else {
    alert("Write something sweet first! 🥺");
  }
});

setInterval(() => {
  confetti({
    particleCount: 2,
    startVelocity: 0,
    ticks: 300,
    origin: { x: Math.random(), y: Math.random() - 0.2 },
    colors: ['#ff69b4'],
    shapes: ['circle'],
    scalar: Math.random() + 0.5,
  });
}, 250);
