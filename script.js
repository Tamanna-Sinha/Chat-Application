function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    const chatBox = document.getElementById('chat-box');
  
    if (message === '') return;
  
    // Display user message
    const sentMessage = document.createElement('div');
    sentMessage.classList.add('message', 'sent');
    sentMessage.textContent = message;
    chatBox.appendChild(sentMessage);
  
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  
    // Simulate a bot reply after a delay
    setTimeout(() => {
      const reply = document.createElement('div');
      reply.classList.add('message', 'received');
  
      reply.textContent = getBotReply(message);
      chatBox.appendChild(reply);
      chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
  }
  
  // Basic chatbot logic
  function getBotReply(message) {
    const msg = message.toLowerCase();
  
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hey there! 😊";
    } else if (msg.includes("how are you")) {
      return "I'm just a bot, but I'm functioning perfectly!";
    } else if (msg.includes("bye")) {
      return "Goodbye! Come back soon!";
    } else if (msg.includes("thank")) {
      return "You're most welcome!";
    } else if (msg.includes("what is your name")) {
      return "I'm ChatBot 1.0 🤖";
    } else if (msg.includes("who made you")) {
      return "I was created by a brilliant developer (maybe you?) 😄";
    } else if (msg.includes("joke")) {
      return "Why don’t programmers like nature? It has too many bugs! 🐛";
    } else {
      const defaultReplies = [
        "That's interesting!",
        "Tell me more.",
        "Hmm, I need to think about that.",
        "Can you explain that again?",
        "Wow, really?",
        "Nice!",
        "Haha, that's funny!",
        "Cool story!",
      ];
      const randomIndex = Math.floor(Math.random() * defaultReplies.length);
      return defaultReplies[randomIndex];
    }
  }
  