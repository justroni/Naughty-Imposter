document.addEventListener("DOMContentLoaded", () => {
  const hostBtn = document.getElementById("hostBtn");
  const hostModal = document.getElementById("hostModal");
  const closeHostBtn = document.getElementById("closeHostBtn");
  const createLobbyBtn = document.getElementById("createLobbyBtn");
  const playersInput = document.getElementById("playersInput");
  const impostersSelect = document.getElementById("impostersSelect");

  // Open Host Modal
  hostBtn.addEventListener("click", () => {
    hostModal.classList.remove("hidden");
    updateImposterOptions();
  });

  // Close Host Modal
  closeHostBtn.addEventListener("click", () => {
    hostModal.classList.add("hidden");
  });

  // Dynamically update imposter choices based on player count
  function updateImposterOptions() {
    let count = parseInt(playersInput.value) || 3;
    const currentSelected = impostersSelect.value;
    
    // Clear current choices
    impostersSelect.innerHTML = "";

    // Determine max imposters allowed
    let maxImposters = 1;
    if (count >= 10) {
      maxImposters = 3;
    } else if (count >= 6) {
      maxImposters = 2;
    }

    // Populate dropdown options
    for (let i = 1; i <= maxImposters; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${i} Imposter${i > 1 ? "s" : ""}`;
      impostersSelect.appendChild(option);
    }

    // Keep previous choice if still valid
    if (currentSelected && currentSelected <= maxImposters) {
      impostersSelect.value = currentSelected;
    }
  }

  // Handle typing & bound enforcement (3 to 15)
  playersInput.addEventListener("input", updateImposterOptions);
  
  playersInput.addEventListener("blur", () => {
    let val = parseInt(playersInput.value) || 3;
    if (val < 3) playersInput.value = 3;
    if (val > 15) playersInput.value = 15;
    updateImposterOptions();
  });

  // Create Lobby Action
  createLobbyBtn.addEventListener("click", () => {
    let playerCount = parseInt(playersInput.value) || 3;
    
    // Enforce 3 to 15 range on submit
    if (playerCount < 3) playerCount = 3;
    if (playerCount > 15) playerCount = 15;
    playersInput.value = playerCount;

    const hostName = document.getElementById("hostNameInput").value.trim() || "Host Pig";
    const category = document.getElementById("categorySelect").value;
    const imposters = impostersSelect.value;
    const roomCode = Math.floor(1000 + Math.random() * 9000);

    alert(`🎉 Lobby Created!\n\nRoom Code: ${roomCode}\nHost: ${hostName}\nCategory: ${category.toUpperCase()}\nPlayers: ${playerCount}\nImposters: ${imposters}`);
    hostModal.classList.add("hidden");
  });
});
