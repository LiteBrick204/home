var checkbox = document.querySelector('input[name=mode]');
 checkbox.addEventListener(‘change’, function() {(this.checked) ? trans(‘darktheme’) : trans(‘lighttheme’)
})

let trans = (theme) => {
document.documentElement.classList.add(‘transition’);
window.setTimeout(() => {
		document.documentElement.classList.remove(‘transition’);
	}, 100)
	document.documentElement.setAttribute(‘data-theme’, theme)
}