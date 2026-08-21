document.addEventListener("DOMContentLoaded", () => {
  // Host Elements
  const hostBtn = document.getElementById("hostBtn");
  const hostModal = document.getElementById("hostModal");
  const closeHostBtn = document.getElementById("closeHostBtn");
  const createLobbyBtn = document.getElementById("createLobbyBtn");
  const playersInput = document.getElementById("playersInput");
  const impostersSelect = document.getElementById("impostersSelect");

  // Join Elements
  const joinBtn = document.getElementById("joinBtn");
  const joinModal = document.getElementById("joinModal");
  const closeJoinBtn = document.getElementById("closeJoinBtn");
  const enterRoomBtn = document.getElementById("enterRoomBtn");

  // Help Elements
  const helpBtn = document.getElementById("helpBtn");
  const helpModal = document.getElementById("helpModal");
  const closeHelpBtn = document.getElementById("closeHelpBtn");
  const gotItBtn = document.getElementById("gotItBtn");

  // --- HOST MODAL LOGIC ---
  hostBtn.addEventListener("click", () => {
    hostModal.classList.remove("hidden");
    updateImposterOptions();
  });

  closeHostBtn.addEventListener("click", () => {
    hostModal.classList.add("hidden");
  });

  function updateImposterOptions() {
    let count = parseInt(playersInput.value) || 3;
    const currentSelected = impostersSelect.value;
    impostersSelect.innerHTML = "";

    let maxImposters = 1;
    if (count >= 10) {
      maxImposters = 3;
    } else if (count >= 6) {
      maxImposters = 2;
    }

    for (let i = 1; i <= maxImposters; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${i} Imposter${i > 1 ? "s" : ""}`;
      impostersSelect.appendChild(option);
    }

    if (currentSelected && currentSelected <= maxImposters) {
      impostersSelect.value = currentSelected;
    }
  }

  playersInput.addEventListener("input", updateImposterOptions);
  
  playersInput.addEventListener("blur", () => {
    let val = parseInt(playersInput.value) || 3;
    if (val < 3) playersInput.value = 3;
    if (val > 15) playersInput.value = 15;
    updateImposterOptions();
  });

  createLobbyBtn.addEventListener("click", () => {
    let playerCount = parseInt(playersInput.value) || 3;
    if (playerCount < 3) playerCount = 3;
    if (playerCount > 15) playerCount = 15;
    
    const hostName = document.getElementById("hostNameInput").value.trim() || "Host Pig";
    const category = document.getElementById("categorySelect").value;
    const imposters = impostersSelect.value;
    const roomCode = Math.floor(1000 + Math.random() * 9000);

    alert(`🎉 Lobby Created!\n\nRoom Code: ${roomCode}\nHost: ${hostName}\nCategory: ${category.toUpperCase()}\nPlayers: ${playerCount}\nImposters: ${imposters}`);
    hostModal.classList.add("hidden");
  });

  // --- JOIN MODAL LOGIC ---
  joinBtn.addEventListener("click", () => {
    joinModal.classList.remove("hidden");
  });

  closeJoinBtn.addEventListener("click", () => {
    joinModal.classList.add("hidden");
  });

  enterRoomBtn.addEventListener("click", () => {
    const playerName = document.getElementById("joinNameInput").value.trim() || "Naughty Pig";
    const roomCode = document.getElementById("roomCodeInput").value.trim();

    if (roomCode.length !== 4) {
      alert("⚠️ Please enter a valid 4-digit room code.");
      return;
    }

    alert(`🎮 Joining Lobby!\n\nPlayer: ${playerName}\nRoom Code: ${roomCode}`);
    joinModal.classList.add("hidden");
  });

  // --- HOW TO PLAY MODAL LOGIC ---
  helpBtn.addEventListener("click", () => {
    helpModal.classList.remove("hidden");
  });

  closeHelpBtn.addEventListener("click", () => {
    helpModal.classList.add("hidden");
  });

  gotItBtn.addEventListener("click", () => {
    helpModal.classList.add("hidden");
  });
});
