const imgOne = document.getElementById('catOne');
const name = document.getElementById('header');
const countOne = document.getElementById('countOne');
const juan = document.getElementById('cat1');

const catName = ['Juan Carlos', 'Chewie'];

let clickCountOne = 0; 

countOne.innerText = clickCountOne;

name.insertAdjacentHTML('afterend', `<h3>${catName[0]}</h3>`);

imgOne.addEventListener('click', function() {
	clickCountOne += 1;
	countOne.innerText = clickCountOne;
}, false);

juan.addEventListener('click', function() {
	alert('Juan was clicked');
}, false);

