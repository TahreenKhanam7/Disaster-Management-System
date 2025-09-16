const toggleBtn = document.getElementById("chat-toggle");
const chatbot = document.getElementById("chatbot");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");
const sendBtn = document.getElementById("chat-send");

// Toggle chatbot visibility
toggleBtn.addEventListener("click", () => {
  chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
});

// Add message to chat
function addMessage(sender, text) {
  const msg = document.createElement("div");

  // Decide class based on sender
  if (sender.toLowerCase() === "you") {
    msg.classList.add("chat-message", "user"); // green bubble
  } else {
    msg.classList.add("chat-message", "bot"); // gray bubble
  }

  msg.innerHTML = `<span>${text}</span>`;
  messages.appendChild(msg);
  messages.scrollTop = messages.scrollHeight; // auto scroll
}


// Handle user input
function handleInput() {
  let userText = input.value.trim();
  if (userText === "") return;

  addMessage("You", userText);
  input.value = "";

  let msg = userText.toLowerCase();
  let botResponse = "Sorry, I didn’t understand. Try asking about floods, fire, earthquake, cyclone, or type 'help'.";

  // Greetings
  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    botResponse = "👋 Hello! I’m your Disaster Safety Bot. How can I assist you today?";
  } 
  // Help
  else if (msg.includes("help")) {
    botResponse = "ℹ️ You can ask me about:\n- Emergency numbers\n- Safety during floods\n- Safety during earthquakes\n- What to do in fire or cyclone";
  }
  // Thanks
  else if (msg.includes("thank")) {
    botResponse = "🙏 You’re welcome! Stay safe.";
  }
  // Emergency Numbers
  else if (msg.includes("emergency")) {
    botResponse = "📞 Emergency Numbers:\n112 - National helpline\n108 - Ambulance\n101 - Fire\n100 - Police\n1070 - State Control Room";
  }
  // Flood Safety
  else if (msg.includes("flood")) {
    botResponse = "🌊 Flood Safety Measures:\n- Move to higher ground\n- Do not walk or drive through flood water\n- Keep an emergency kit ready\n- Call 108 for help";
  }
  // Earthquake Safety
  else if (msg.includes("earthquake")) {
    botResponse = "🏠 Earthquake Safety:\n- Drop, Cover, Hold under sturdy furniture\n- Stay away from windows\n- If outside, move to an open area\n- Call 1077 for help";
  }
  // Cyclone Safety
  else if (msg.includes("cyclone")) {
    botResponse = "🌪️ Cyclone Safety:\n- Stay indoors in a strong building\n- Keep emergency supplies ready\n- Stay tuned to weather alerts\n- Call 1070 for assistance";
  }
  // Fire Safety
  else if (msg.includes("fire")) {
    botResponse = "🔥 Fire Safety:\n- Evacuate immediately\n- Do NOT use elevators\n- Call 101 for fire service\n- If trapped, cover nose with wet cloth and stay low";
  }

  addMessage("Bot", botResponse.replace(/\n/g, "<br>")); // support line breaks
}

// Enter key support
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") handleInput();
});

// Send button support
sendBtn.addEventListener("click", handleInput);
