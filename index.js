var body = document.querySelector('body');
window.scroll({
  top: -1000,
  behavior: 'smooth'
});
setInterval(()=>{
var randomColor = '#'+Math.random().toString(16).slice(-6);
	body.style.borderColor = randomColor;
},420)
