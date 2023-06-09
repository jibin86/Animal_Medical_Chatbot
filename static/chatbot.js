const input = document.getElementById("input-message");
const button = document.getElementById("send-button");
const chatBody = document.getElementById("chat-body");

button.addEventListener("click", sendMessage);
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});

function sendMessage() {
  const userMessage = input.value;
  if (userMessage === "") {
    return;
  }
  const userMessageNode = document.createElement("div");
  userMessageNode.className = "chat-message user-message";
  const userMessageText = document.createTextNode(userMessage);
  userMessageNode.appendChild(userMessageText);
  chatBody.appendChild(userMessageNode);

  input.value = "";

  const botMessage = getBotMessage(userMessage);
  const botMessageNode = document.createElement("div");
  botMessageNode.className = "chat-message bot-message";
  const botMessageText = document.createTextNode(botMessage);
  botMessageNode.appendChild(botMessageText);
  chatBody.appendChild(botMessageNode);

  chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotMessage(userMessage) {
  // 여기에 챗봇이 답변을 생성하는 로직을 작성하세요.
  // 이 예제에서는 무조건 "I'm a chatbot." 이라는 답변을 반환합니다.
  return "I'm a chatbot.";
}
