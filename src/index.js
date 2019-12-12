document.addEventListener('DOMContentLoaded', (event) => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl).then(res => res.json()).then( json => dogImages(json));

  function dogImages(jsonData) {
    let dogImageContainer = document.getElementById('dog-image-container');

    for ( const key in jsonData.message ){
      let img = document.createElement('img');
      img.src = `${jsonData.message[key]}`;
      dogImageContainer.appendChild(img);
    }
  };

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl).then(res => res.json()).then(json => breeds(json));

  function breeds(jsonData) {
    let dogBreeds = document.getElementById('dog-breeds');

    for (const breed in jsonData.message) {
      let breedLi = document.createElement('li') 
          breedLi.innerText = `${breed}`
          dogBreeds.appendChild(breedLi)
          breedLi.addEventListener('click', (event) => {
            breedLi.style.color = 'blue'
          });
    }

    

    dogBreeds.innerHTML
  };





    

























});