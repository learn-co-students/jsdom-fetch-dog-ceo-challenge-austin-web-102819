// console.log('%c HI', 'color: firebrick')

window.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    //Global variable that we'll assign in populateBreed
    let liList;
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
           //This is pulling the array inside the response:
            let imgData= data.message
            console.log(imgData[0])
        
            forEachRandomImage(imgData);

        });
    // Find the DOM element we need to append t0
    
    // Having trouble iterating over each array item: imgData keeps throwing a promise error: index.js:19 Uncaught (in promise) ReferenceError: imgData is not defined
    // I believe the issue relates to scope. 
    function forEachRandomImage(imgData) { 
        const imgContainter = document.getElementById('dog-image-container');
        for (const element of imgData) {
            //create element
            const img= document.createElement('img');
            img.src = element;
            imgContainter.appendChild(img);
            
          }

      

    }

    /////New Fetch: All Dog Breeds
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(response => response.json())
        .then(breedData => {
            // Having trouble iteratng over JS objects/data!!!
            // console.log(breedData.message)
            populateBreed(breedData);
        });
    
        function populateBreed(breedData) {
            const breedContainer = document.getElementById('dog-breeds');
            // Iterate over the full object and get the message property
            for(const breed in breedData.message) {
                // console.log(breed);
                // Here we're looping through the individual breed to get the subBreed
                // [breed] is the index/key of the breed 
                for (const subBreed in breedData.message[breed]) {
                    const li = document.createElement('li');
                    li.id = `${breedData.message[breed][subBreed]} ${breed}`;
                    li.addEventListener("click", ()=>{li.style.color = "magenta";});
                    li.innerText = `${breedData.message[breed][subBreed]} ${breed}`;
                    breedContainer.appendChild(li);
                    // console.log(`${breed} - ${breedData.message[breed][subBreed]}`);
                    
                    
                }
            }
            // Creating the clone of the li
            liList = document.querySelectorAll('li');
            // console.log(liList)
        }

        // Filter dog breeds
        //object.Assign({}, )
        const dropdown = document.getElementById('breed-dropdown');
        dropdown.addEventListener("change", filterBreeds);
        
        function filterBreeds() {
            let lisClone = Object.assign({}, liList);
            let ul = document.getElementById('dog-breeds');
            ul.innerHTML = '';
            // Turn this into a  comparison operator
            let pattern = RegExp(`^${dropdown.value}`);
            // iterate over lisCLone
            // In each iteration compare pattern to breed title 
            for(const element in lisClone) {
                console.log(lisClone[element]);
                
                if(pattern.test(lisClone[element].innerText)){
                    // create a new child for ul
                    const li = document.createElement('li');
                    li.id = `${lisClone[element].innerText}`;
                    li.addEventListener("click", ()=>{li.style.color = "magenta";});
                    li.innerText = `${lisClone[element].innerText}`;
                    ul.appendChild(li);
                }
            }
        }

});