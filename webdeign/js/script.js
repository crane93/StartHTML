//파일로 만들어서 쓸때는 <script> 라는 태그 필요없당
function login_check() {						<!--자바스크립트를 위한 함수 생성, 아이디랑 패스워드 입력안하면 경고창 뜨게 만들기~, 이 함수는 어느줄에 잇어도 상관없당-->
	if(document.login.id.value == ""){
		alert("아이디 입력");
		document.login.id.focus();					<!--오 커서의 위치가 알아서 아이디쪽으로 감-->
		return false;
	}
	if(document.login.pw.value==""){
		alert("패스워드 입력");
		document.login.pw.focus();
		return false;
	}
}