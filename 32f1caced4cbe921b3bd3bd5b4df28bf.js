function TRUE_ANSWERS() {
		var true_ans = ['c4ca4238a0b923820dcc509a6f75849b', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', 'c81e728d9d4c2f636f067f89cc14862c'];
		return true_ans;
}
function Passw(marks) {
	var password = prompt("Вы получили оценку " + marks + ". Для продолжения введите пароль" );
	return password;
}
function bad_error() {
	alert ("Вы ответили не на все вопросы");
}