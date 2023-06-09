const input = document.getElementById("input-message");
const button = document.getElementById("send-button");
const chatBody = document.getElementById("chat-body");

button.addEventListener("click", sendMessage); // 클릭하면 sendMessage 함수 실행
input.addEventListener("keyup", function (event) { // 키보드의 키를 눌렀다가 놓았을 때 다음 함수 실행
  if (event.key === "Enter") { // 눌린 키가 엔터 키인지 확인
    event.preventDefault(); // 기본 동작 취소 (폼을 제출하는 동작을 막는다)
    button.click(); // 엔터 키를 누르면 버튼을 클릭한 것과 동일한 효과를 주는 코드
  }
});

function sendMessage() {

  // 입력된 값 Html에 출력하기
  const userMessage = input.value; // 입력 값을 받아온다
  if (userMessage === "") { // 빈칸이라면, 아무것도 반환하지 않는다
    return;
  }

  // 사용자 메시지를 Flask의 '/get_bot_message' 엔드포인트에 전송하여 챗봇의 답변을 받아온다
  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/get_bot_message', true); // HTTP 메서드를 POST으로 지정, 요청을 보낼 URL 지정, 비동기 여부 true로 설정
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // 요청 헤더에 컨텐트 타입을 설정. 폼 데이터를 전송할 때 사용되는 기본 컨텐트 타입 "application/x-www-form-urlencoded" 설정
  xhr.onreadystatechange = function () { // 서버의 응답 상태를 모니터링하고, 응답이 완료되었을 때 동작 수행하는 이벤트 핸들러 등록
    if (xhr.readyState === 4 && xhr.status === 200) { // 응답이 완료되고, 성공적으로 처리되었을 때 해당 블록의 코드 실행한다 (readyState=4: 응답 완료, status=200: 성공적으로 처리됨)
      const response = JSON.parse(xhr.responseText); // 서버에서 응답받은 텍스트를 JSON 형식으로 파싱한다
      const botMessage = response.botMessage; // 파싱된 JSON 응답에서 botMessage 필드를 가져온다
      displayMessage(botMessage); // 챗봇의 답변을 HTML에 표시한다
    }
  };
  xhr.send('userMessage=' + encodeURIComponent(userMessage)); // POST 요청을 서버로 보낸다. encodeURIComponent: 사용자의 메시지를 URL 인코딩하여 전송한다

  const userMessageNode = document.createElement("div"); // div 요소 생성
  userMessageNode.className = "chat-message user-message"; // 생성한 div 요소에 클래스 속성 추가
  const userMessageText = document.createTextNode(userMessage); // 텍스트 노드 생성
  userMessageNode.appendChild(userMessageText); // 생성한 div 요소 아래에 생성한 텍스트 넣기
  chatBody.appendChild(userMessageNode); // chatBody 요소 아래에 생성한 div 요소 넣기

  input.value = ""; // input 값 초기화하기

  chatBody.scrollTop = chatBody.scrollHeight; // chatBody를 맨 아래로 스크롤한다

}

function displayMessage(botMessage) {
  const botMessageNode = document.createElement("div"); // div 요소 생성하기
  botMessageNode.className = "chat-message bot-message"; // 생성된 div 요소에 클래스 속성 넣기
  const botMessageText = document.createTextNode(botMessage); // 생성된 답변 넣기
  botMessageNode.appendChild(botMessageText); // 생성된 div 요소 아래에 답변 요소 넣기
  chatBody.appendChild(botMessageNode); // html의 chatBody 요소 아래에 생성된 div 요소 넣기

  chatBody.scrollTop = chatBody.scrollHeight; // chatBody를 맨 아래로 스크롤한다

}