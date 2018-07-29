const imgOne = document.getElementById('catOne');
const count = document.getElementById('count');

let clickCount = 0; 
count.innerText = clickCount;

imgOne.addEventListener('click', function() {
	clickCount += 1;
	count.innerText = clickCount;
}, false);