const imgOne = document.getElementById('catOne');
const imgTwo = document.getElementById('catTwo');
const countOne = document.getElementById('countOne');
const countTwo = document.getElementById('countTwo');
const catName = ['Poplinre', 'Chewie'];

let clickCountOne = 0; 
let clickCountTwo = 0; 
countOne.innerText = clickCountOne;
countTwo.innerText = clickCountTwo;

imgOne.insertAdjacentHTML('beforebegin', `${catName[0]}`);
imgTwo.insertAdjacentHTML('beforebegin', `${catName[1]}`);

imgOne.addEventListener('click', function() {
	clickCountOne += 1;
	countOne.innerText = clickCountOne;
}, false);

imgTwo.addEventListener('click', function() {
	clickCountTwo += 1;
	countTwo.innerText = clickCountTwo;
}, false);