import data from './data.js';
import lookupHandler from './utils/lookupHandler.js';

const dom = {
    input: document.getElementById('input'),
    images : document.querySelector(".images")
  
};

//create image 
const makeImage = (image) => {

    /// image box
    const imageBox = document.createElement("div");
    imageBox.classList.add("image-box");
    imageBox.id = image.id;

    /// image
    const img = document.createElement("img");
    img.src = image.src;
    img.alt = image.title;

    /// title
    const title = document.createElement("h4");
    title.innerText = image.title;

    /// show the images
    imageBox.append(img, title);
    
    return imageBox;
}


//lookupEvent 
const lookupEvent = () => {
    dom.input.addEventListener("keyup", () => {
        const value = dom.input.value
        lookupHandler(value)
        
    })

}

// loadHandler
const loadHandler = () => {
    data.images.forEach(( image) =>{
      
        const imageBox = makeImage(image);
       
        dom.images.append(imageBox);
    })
    }

//loadEvent 
    const loadEvent = () => {
        window.addEventListener("load", loadHandler)
        
        }

//utile 
        loadEvent();
        lookupEvent()