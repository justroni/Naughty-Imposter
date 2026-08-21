document.addEventListener("DOMContentLoaded", () => {
  const hostBtn = document.getElementById("hostBtn");
  const hostModal = document.getElementById("hostModal");
  const closeHostBtn = document.getElementById("closeHostBtn");
  const createLobbyBtn = document.getElementById("createLobbyBtn");

  // Open Host Modal
  hostBtn.addEventListener("click", () => {
    hostModal.classList.remove("hidden");
  });

  // Close Host Modal
  closeHostBtn.addEventListener("click", () => {
    hostModal.classList.add("hidden");
  });

  // Create Lobby Action
  createLobbyBtn.addEventListener("click", () => {
    const hostName = document.getElementById("hostNameInput").value.trim() || "Host Pig";
    const category = document.getElementById("categorySelect").value;
    const players = document.getElementById("playersSelect").value;
    const roomCode = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit code

    alert(`🎉 Lobby Created!\n\nRoom Code: ${roomCode}\nHost: ${hostName}\nCategory: ${category}\nPlayers: ${players}`);
    hostModal.classList.add("hidden");
  });
});
