console.log('%c HI', 'color: firebrick');

window.addEventListener('DOMContentLoaded', (event) => {
	let dropDown = document.getElementById('breed-dropdown');
	let lisClone;
	dropDown.addEventListener('change', filterByBreed);

	const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
	fetch(imgUrl)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			populateImage(json);
		});

	const breedUrl = 'https://dog.ceo/api/breeds/list/all';
	fetch(breedUrl)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			populateBreed(json);
		});

	function populateImage(jsonData) {
		let dogImageContainer = document.getElementById('dog-image-container');
		for (const key in jsonData.message) {
			let img = document.createElement('img');
			img.src = `${jsonData.message[key]}`;
			dogImageContainer.appendChild(img);
		}
	}

	function populateBreed(jsonData) {
		let ul = document.getElementById('dog-breeds');

		for (const key in jsonData.message) {
			console.log(jsonData.message[key]);
			console.log(jsonData.message[key].length);

			for (var i = 0; i < jsonData.message[key].length; i++) {
				let li = document.createElement('li');
				li.innerText = `${jsonData.message[key][i]} ${key}`;
				li.id = `${jsonData.message[key][i]} ${key}`;
				li.addEventListener('click', (event) => {
					li.style.color = 'red';
				});
				ul.appendChild(li);
			}
		}
		allLis = document.querySelectorAll('li');
	}

	function filterByBreed() {
		let ul = document.getElementById('dog-breeds');
		let lisClone = Object.assign({}, allLis);

		// clear all li(s)
		ul.innerHTML = '';

		let pattern = RegExp(`^${dropDown.value}`);
		for (key in lisClone) {
			if (!pattern.test(lisClone[key].id)) {
				console.log(`${lisClone[key].id} - removed`);

				if (document.getElementById(`${lisClone[key].id}`)) {
					document.getElementById(`${lisClone[key].id}`).remove();
				}
			} else {
				let li = document.createElement('li');
				li.innerText = `${lisClone[key].id}`;
				li.id = `${lisClone[key].id}`;
				li.addEventListener('click', (event) => {
					li.style.color = 'red';
				});
				ul.appendChild(li);
			}
		}
	}
});
