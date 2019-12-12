//Original broken code for:
function forEachRandomImage() 
for(const key in data) {
            
            // create an image element
            let img = document.createElement('img');
            // Set the image element equal to the fetched object property
            console.log(img)
                img.src = `${data[key]}`
            // Append the imgContent to the img element
            // append them to the dog-image-container
            let newImageNode = document.getElementById('dog-image-container').appendChild(img);
            return newImageNode
        }