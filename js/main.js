$(function () {
	// $('.products__item-images').slick()
})

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('burger').addEventListener('click', function () {
		document.querySelector('header').classList.toggle('open')
	})
})

const showMore = document.querySelector('.show-more')
const productsLength = document.querySelectorAll('.products__item').length
let items = 8

showMore.addEventListener('click', () => {
	items += 4
	const array = Array.from(document.querySelector('.products__items').children)
	const visItems = array.slice(0, items)

	visItems.forEach(el => el.classList.add('is-visible'))

	if (visItems.length === productsLength) {
		showMore.style.display = 'none'
	}
})

window.onload = () => {
	let input = document.querySelector('#input');
	input.oninput = function() {
		let value = this.value.trim();
		let list = document.querySelectorAll('.products__item');
		
		if (value != '') {
			list.forEach(elem => {
				if(elem.innerText.search(value) == -1){
					elem.classList.add('hide');
				}
			});
		}
		else{
			list.forEach(elem => {
				elem.classList.remove('hide');
			});
		}
	};
};






