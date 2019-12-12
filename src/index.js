window.addEventListener('DOMContentLoaded', (event) => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    let container = document.getElementById("dog-image-container");
    let list = document.getElementById("dog-breeds");
    let drop = document.getElementById("breed-dropdown");
    fetch(imgUrl).then(res => res.json()).then(json => {
        for (let i=0; i < json.message.length; i++) {
        let img = document.createElement("IMG");
        img.src = json.message[i];
        container.appendChild(img);
        }
    });
    fetch(breedUrl).then(res => res.json()).then(json => { 
        let keys = Object.keys(json.message);
        for (let i=0; i < keys.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = keys[i];
            list.appendChild(li);
            li.addEventListener("click", (event)=> {
                li.style ="color:blue";
            })
        }
    });
    drop.addEventListener("change", (event) => {
        list.innerHTML = '';
        fetch(breedUrl).then(res => res.json()).then(json => {
            let keys = Object.keys(json.message);
            for (let i=0; i < keys.length; i++) {
                if (keys[i][0] === drop.value) {
                    let li = document.createElement("li");
                    li.innerHTML = keys[i];
                    list.appendChild(li);
                    li.addEventListener("click", (event)=> {
                        li.style ="color:blue";
                    })
                }
            }}
        );
    });
})