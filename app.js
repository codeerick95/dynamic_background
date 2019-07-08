const container = document.getElementById('container'),
	bgStorage = window.localStorage.getItem('background')

if(bgStorage) {
	document.body.style.backgroundColor = bgStorage
}

container.addEventListener('click', e => {
	let buttonBgColor = window.getComputedStyle(e.target).backgroundColor;
	window.localStorage.setItem('background', buttonBgColor)
	if(e.target.tagName === 'BUTTON') {
		document.body.style.backgroundColor = buttonBgColor
	}
})