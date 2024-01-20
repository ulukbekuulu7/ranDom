const container = document.querySelector('.container')
const body = document.querySelector('.body')
const active = document.querySelector('.active')
const square = document.querySelector('.square')
const passive = document.querySelector('.passive')
const n = 300
for (let i = 0; i < n; i++) {
	const square = document.createElement('div')
	container.append(square)
	square.setAttribute('class', 'square')
	square.addEventListener('mousemove', () => {
		square.style.background = randomColor()
	})
	square.addEventListener('mouseleave', () => {
		square.style.background = square.style.rotate = 'y 180deg'
		square.style.transition = '.5s'
	})

	square.style.rotate = 'y 180deg'
	square.style.transition = '.5'
	square.style.background = randomColor()

	active.addEventListener('click', () => {
		square.style.background = randomColor()
		square.style.rotate = 'x 180deg'
		text.style.transition = '.5s'
	})
	passive.addEventListener('click', () => {
		square.style.background = ''
		square.style.rotate = ''
		text.style.transition = '.5s'
	})
}

function randomColor() {
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 10)
	}
	return color
}

randomColor()
