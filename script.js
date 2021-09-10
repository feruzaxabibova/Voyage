 var modal = document.getElementById('myModal');
 var btn = document.getElementById('myBtn');
 var span = document.getElementsByClassName('close')[0];
 var val = document.getElementById("input-in");
 var send = document.getElementById("send");
 var result = document.querySelector('.class-js');
 var ageNormal = 18;

 btn.onclick = function () {
 	modal.style.display = 'block';
 }

 span.onclick = function() {
 	modal.style.display = 'none';
 }

// var span = document.getElementsByClassName("close")[0];
// 	span.onclick = function () {
// 	modal.style.display = "none";
// }

send.onclick = function() {
	var val = document.getElementById("input-in").value;

	if (val >= ageNormal) {
		result.style.backgroundColor = 'green';
		document.getElementById("str").innerHTML = "We wish you an interesting holiday!";
	}else {
		result.style.backgroundColor = 'red';
		document.getElementById("str").innerHTML = "Your age is not suitable!";
	}
}





