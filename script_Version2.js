// Reservation Form Handler
document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('resName').value.trim();
  const email = document.getElementById('resEmail').value.trim();
  const date = document.getElementById('resDate').value;
  const time = document.getElementById('resTime').value;
  const people = document.getElementById('resPeople').value;

  // Simple frontend validation
  if (!name || !email || !date || !time || !people) {
    document.getElementById('reservationMsg').textContent = 'Please fill all fields.';
    return;
  }

  document.getElementById('reservationMsg').textContent = 'Reservation submitted! We look forward to seeing you.';
  document.getElementById('reservationForm').reset();

  setTimeout(() => {
    document.getElementById('reservationMsg').textContent = '';
  }, 4000);
});

// Chat Widget Handler
const chatWidget = document.getElementById('chatWidget');
const chatToggleBtn = document.getElementById('chatToggleBtn');
const chatHeader = document.getElementById('chatHeader');
const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

function toggleChatWidget() {
  if (chatWidget.style.display === 'flex') {
    chatWidget.style.display = 'none';
    chatToggleBtn.style.display = 'flex';
  } else {
    chatWidget.style.display = 'flex';
    chatToggleBtn.style.display = 'none';
    chatInput.focus();
  }
}

chatToggleBtn.addEventListener('click', toggleChatWidget);
chatHeader.addEventListener('click', toggleChatWidget);

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = chatInput.value.trim();
  if (!message) return;

  // Add user's message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  // Fake bot reply
  setTimeout(() => {
    const botMsg = document.createElement('div');
    botMsg.className = 'chat-message';
    botMsg.textContent = getBotReply(message);
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 900);

  chatInput.value = '';
});

function getBotReply(userMsg) {
  // Very simple bot logic for demo purposes
  const msg = userMsg.toLowerCase();
  if (msg.includes('hello') || msg.includes('hi')) return 'Hello! How can we help you today?';
  if (msg.includes('menu')) return 'You can see our menu highlights above! Would you like a specific recommendation?';
  if (msg.includes('wifi')) return 'Yes, we offer free high-speed WiFi for all guests.';
  if (msg.includes('reservation')) return 'You can reserve a spot using the form above, or let us know your desired date and time here!';
  if (msg.includes('hours') || msg.includes('open')) return 'We are open daily from 8am to 10pm.';
  return "Thanks for your message! We'll get back to you as soon as possible.";
}

// Optionally, open chat if URL contains #chat
if (window.location.hash === '#chat') {
  toggleChatWidget();
}