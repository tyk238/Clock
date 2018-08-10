var hours = document.querySelector(".hours");
var minutes = document.querySelector(".minutes");
var seconds = document.querySelector(".seconds");


function clock(){
	var data = new Date();
	hours.style.transform = "rotateZ(" + data.getHours()*30 + "deg)";
	minutes.style.transform = "rotateZ(" + data.getMinutes()* 6+ "deg)";
	seconds.style.transform = "rotateZ(" + data.getSeconds()*6 + "deg)";
}

setInterval(clock,1000);