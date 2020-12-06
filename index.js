var body = document.querySelector('body');
setInterval(()=>{
var randomColor = '#'+Math.random().toString(16).slice(-6);
	body.style.borderColor = randomColor;
	console.log(randomColor);
},420)
