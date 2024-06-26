// Get elements
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('#sidebar-toggle');
const chatContainer = document.querySelector('.chat-container');
const chatBox = document.querySelector('#chat-box');
const userInput = document.querySelector('#user-input');
const sendButton = document.querySelector('#send-button');
const modeToggleCheckbox = document.querySelector('#mode-toggle-checkbox');

// Add event listeners
sidebarToggle.addEventListener('click', toggleSidebar);
sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
modeToggleCheckbox.addEventListener('change', toggleDarkMode);

// Functions
function toggleSidebar() {
  sidebar.classList.toggle('sidebar-collapsed');
  chatContainer.classList.toggle('chat-container-expanded');
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message !== '') {
    const messageHTML = `
      <div class="message">
        <p class="message-text">${message}</p>
      </div>
    `;
    chatBox.innerHTML += messageHTML;
    userInput.value = '';
  }
}