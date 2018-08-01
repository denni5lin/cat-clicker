const name = document.getElementById('header');
const imgOne = document.getElementById('catOne');
// const content = document.getElementById('main');
const content = document.getElementById('content');

const countOne = document.getElementById('countOne');
// Cat selector
const juan = document.getElementById('cat1');
const pizza = document.getElementById('cat2');
const buttercup = document.getElementById('cat3');
const jellybean = document.getElementById('cat4');
const bambi = document.getElementById('cat5');

// Cat Objects
const cats = [
  {
    name: 'Juan Carlos',
    img: 'img/cat1.jpg',
    click: 0  
  },
  {
    name: 'Pizza',
    img: 'img/cat2.jpg',
    click: 0 
  },
  {
    name: 'Buttercup',
    img: 'img/cat3.jpg',
    click: 0 
  },
  {
    name: 'Jellybean',
    img: 'img/cat4.jpg',
    click: 0
  },
  {
    name: 'Bambi',
    img: 'img/cat5.jpg',
    click: 0
  }
];

// name.insertAdjacentHTML('afterend', `<h3>${catName[0]}</h3>`);

// imgOne.addEventListener('click', function() {
// 	cats[0].click += 1;
	// countOne.innerText = cats[0].click;
// }, false);

for(let i = 0; i < cats.length; i++) {
	// number we are currently on
	let num = cats[i].click;
	// create a DOM element for this number

	// when we click, add 1 to this number
	// display new number under cat pic  
}
// <p>Number of click(s): ${cats[0].click}</p></p>

function loadCat(index) {
	content.innerHTML = "";
	content.innerHTML = `<h3>${cats[index].name}</h3>
		<img id='catOne' src='${cats[index].img}' alt='Cat picture 1'>`;
}

juan.addEventListener('click', function() {
	loadCat(0);
}, false);

pizza.addEventListener('click', function() {
	loadCat(1);
}, false);

buttercup.addEventListener('click', function() {
	loadCat(2);
}, false);

jellybean.addEventListener('click', function() {
	loadCat(3);
}, false);

bambi.addEventListener('click', function() {
	loadCat(4);
}, false);


const catNames = ['Juan Carlos', 'Pizza', 'Buttercup', 'Jellybean', 'Bambi'];

