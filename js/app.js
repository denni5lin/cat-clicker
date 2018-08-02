/* Model */

const model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Juan',
			imgSrc: 'img/cat1.jpg',
			imgAttribution: 'https://www.flickr.com/photos/poplinre/625069434'
		},
		{
			clickCount: 0,
			name: 'Pizza',
			imgSrc: 'img/cat2.jpg',
			imgAttribution: 'https://www.flickr.com/photos/chewie/2290467335'
		},
		{
			clickCount: 0,
			name: 'Buttercup',
			imgSrc: 'img/cat3.jpg',
			imgAttribution: 'https://www.flickr.com/photos/95574076@N05/11991979753'
		},
		{
			clickCount: 0,
			name: 'Jellybean',
			imgSrc: 'img/cat4.jpg',
			imgAttribution: 'https://www.flickr.com/photos/iweatherman/8086458090'
		},
		{
			clickCount: 0,
			name: 'Bambi',
			imgSrc: 'img/cat5.jpg',
			imgAttribution: 'https://www.flickr.com/photos/shalva1948/9680261486'
		}
	]
};

/* Octopus */

const octopus = {
	init: function() {
		model.currentCat = model.cats[0];
		catListView.init();
		catView.init();
	},

	getCurrentCat: function() {
		return model.currentCat;
	},

	getCats: function() {
		return model.cats;
	},

	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},

	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();
	}
};

/* View */

const catView = {
	init: function() {
		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImageElem = document.getElementById('cat-img');
		this.countElem = document.getElementById('cat-count');

		this.catImageElem.addEventListener('click', function() {
			octopus.incrementCounter();
		});
	},

	render: function() {
		let currentCat = octopus.getCurrentCat();
		this.countElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImageElem.src = currentCat.imgSrc;
	}
};

const catListView = {
	init: function() {
		this.catListElem = document.getElementById('cat-list');
		this.render();
	},

	render: function() {
		let cat, elem, i;
		let cats = octopus.getCats();

		this.catListElem.innerHTML = '';

		for(let i = 0; i < cats.length; i++) {
			cat = cats[i];
			elem = document.createElement('li');
			elem.textContent = cat.name;

			elem.addEventListener('click', (function(catCopy) {
				return function() {
					octopus.setCurrentCat(catCopy);
					catView.render();
				};
			})(cat));

			this.catListElem.appendChild(elem);
		}
	}
};

octopus.init();



