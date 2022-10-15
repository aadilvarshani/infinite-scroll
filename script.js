const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];
// Unsplash Api

const accessKey = '0kip9skZKcRZj52_lCbJloyi0PQRsGgVrhTOUkPPfz4';


const count = '10';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;


// creating elements to display
function displayPhoto(){
    //run function for each photo
    photoArray.forEach( (photo) => {
        //create elements to link to unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //create image for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        // put image inside anchor element
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

//fetch photos

async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhoto();
    } catch (error) {
        //
    }
}

//on load

getPhotos();