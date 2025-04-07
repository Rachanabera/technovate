
function generatePassport() {
  const name = document.getElementById("nameInput").value;
  if (!name) return alert("Enter your name!");

  const variantID = "VAR-" + Math.random().toString(36).substring(2, 6).toUpperCase();
  const universe = "Earth-" + Math.floor(Math.random() * 9999);
  const powers = ["Glitch Warp", "Chrono Freeze", "Quantum Blink", "Neon Dash", "Vibe Duplication"];
  const origins = ["Cracked Timeline", "Void Chamber", "Starfall Nexus", "Echoed Reality"];
  const status = ["Temporal Nomad", "Quantum Drifter", "Dimensional Ghost"];

  const passport = `
    <h2>🪐 Dimensional Passport</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Variant ID:</strong> ${variantID}</p>
    <p><strong>Universe:</strong> ${universe}</p>
    <p><strong>Power:</strong> ${powers[Math.floor(Math.random()*powers.length)]}</p>
    <p><strong>Origin:</strong> ${origins[Math.floor(Math.random()*origins.length)]}</p>
    <p><strong>Status:</strong> ${status[Math.floor(Math.random()*status.length)]}</p>
  `;

  document.getElementById("passportCard").innerHTML = passport;
}
