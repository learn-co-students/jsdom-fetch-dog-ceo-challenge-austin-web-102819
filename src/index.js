console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is loaded");
  fetchDogs();
  fetchBreeds();
});

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const fetchBreeds = () => {
  fetch(breedUrl)
    .then(response => response.json())
    .then(data => populateBreedList(data.message));
};

const populateBreedList = data => {
  const breedList = document.getElementById("dog-breeds");

  for (x in data) {
    let dog = document.createElement("li");
    dog.innerText = x;
    breedList.appendChild(dog);
    dog.style.cursor = "pointer";
    dog.addEventListener("click", addColorEffect);
  }
};

const addColorEffect = event => {
  event.target.style.color = "green";
};

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const fetchDogs = () => {
  fetch(imgUrl)
    .then(response => response.json())
    .then(data => addDogImages(data.message));
};

const addDogImages = data => {
  data.forEach(dogImgUrl => {
    let dogsContainer = document.getElementById("dog-image-container");
    let DOM_img = document.createElement("img");
    DOM_img.src = dogImgUrl;
    dogsContainer.appendChild(DOM_img);
  });
};
