/**
 * Check if a number is even
 *
 * @param {number} num - The number to check if it is even
 * @returns {boolean} - True if the number is even, false otherwise
 */


const lookupHandler = (value) => {
    const images = document.querySelectorAll(".image-box")
    images.forEach((img) =>{
        const title = img.querySelector("h4").innerText;

        if(title.toLowerCase().includes(value.toLowerCase())){
            img.classList.remove("hidden");
        }else {
            img.classList.add("hidden");

        }
    })

}

export default lookupHandler;