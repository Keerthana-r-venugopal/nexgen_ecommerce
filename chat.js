document.getElementById('send-button').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim()) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'user');
      messageElement.textContent = userInput;
      document.getElementById('chat-box').appendChild(messageElement);
      document.getElementById('user-input').value = '';
      scrollToBottom();
  }
});

document.getElementById('image-upload').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.alt = "User uploaded image";

          const messageElement = document.createElement('div');
          messageElement.classList.add('message', 'user');
          messageElement.appendChild(imgElement);

          document.getElementById('chat-box').appendChild(messageElement);
          scrollToBottom();
      };
      reader.readAsDataURL(file);
  }
});

function scrollToBottom() {
  const chatBox = document.getElementById('chat-box');
  chatBox.scrollTop = chatBox.scrollHeight;
}
