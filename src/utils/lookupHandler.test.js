import lookupHandler from "./lookupHandler.js";

/**
 * param{string} value - The value to be searched for in the image titles.
 * * This function filters the images based on the provided value.
 * * It hides images whose titles do not include the value (case insensitive).
 * * @returns {void}
 * * @example
 * * lookupHandler('ozark');
 * * This will show only the images with titles that include 'ozark'.
 * * * lookupHandler('');
 * * This will show all images.
 * * * lookupHandler('xyz');
 * * This will hide all images since none of the titles include 'xyz'.
 * 
 */

describe("lookupHandler", () => {
    let images;

    beforeEach(() => {
        document.body.innerHTML = `
            <div class="image-box"><h4>Ozark</h4></div>
            <div class="image-box"><h4>Breaking Bad</h4></div>
            <div class="image-box"><h4>Stranger Things</h4></div>
        `;
        images = document.querySelectorAll(".image-box");
    });

    test("should show only the images with titles that include 'ozark'", () => {
        lookupHandler('ozark');
        expect(images[0].classList.contains('hidden')).toBe(false);
        expect(images[1].classList.contains('hidden')).toBe(true);
        expect(images[2].classList.contains('hidden')).toBe(true);
    });

    test("should show all images when the value is an empty string", () => {
        lookupHandler('');
        images.forEach(img => {
            expect(img.classList.contains('hidden')).toBe(false);
        });
    });

    test("should hide all images when none of the titles include 'xyz'", () => {
        lookupHandler('xyz');
        images.forEach(img => {
            expect(img.classList.contains('hidden')).toBe(true);
        });
    });
});