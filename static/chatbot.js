const input = document.getElementById("input-message");
const button = document.getElementById("send-button");
const chatBody = document.getElementById("chat-body");

// 메시지 전송 버튼 클릭 시 sendMessage 함수 실행
button.addEventListener("click", sendMessage);

// 입력창에서 Enter 키를 눌렀을 때도 sendMessage 함수 실행
input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    button.click();
  }
});

function sendMessage() {
  // 사용자 입력 값 가져오기
  const userMessage = input.value;
  if (userMessage === "") {
    return;
  }

  // 챗봇 응답을 받아오기 위해 서버에 POST 요청 보내기
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/get_bot_message", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const botMessage = response.botMessage;
      displayMessage(botMessage);
    }
  };
  xhr.send("userMessage=" + encodeURIComponent(userMessage));

  // 사용자 입력 메시지를 HTML에 표시
  const userMessageNode = document.createElement("div");
  userMessageNode.className = "chat-message user-message";
  const userMessageText = document.createTextNode(userMessage);
  userMessageNode.appendChild(userMessageText);
  chatBody.appendChild(userMessageNode);

  // 입력창 초기화
  input.value = "";

  // 채팅창 스크롤 맨 아래로 이동
  chatBody.scrollTop = chatBody.scrollHeight;
}

function displayMessage(botMessage) {
  // 챗봇 응답을 HTML에 표시
  const botMessageNode = document.createElement("div");
  botMessageNode.className = "chat-message bot-message";
  const botMessageText = document.createTextNode(botMessage);
  botMessageNode.appendChild(botMessageText);
  chatBody.appendChild(botMessageNode);

  // 채팅창 스크롤 맨 아래로 이동
  chatBody.scrollTop = chatBody.scrollHeight;
}
