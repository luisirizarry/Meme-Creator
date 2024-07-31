const memeSection = document.querySelector(".meme-section");
const creatorForm = document.querySelector("#meme-form");
const memeTextAbove = document.querySelector("#text-above");
const memeTextBottom = document.querySelector("#text-below");
const memeUrl = document.querySelector("#meme-url");

function validateImageUrl(url, callback) {
    const img = new Image();
    img.onload = () => callback(true); // Image loaded successfully
    img.onerror = () => callback(false); // Error loading image
    img.src = url;
}

// Usage example
creatorForm.addEventListener("submit", function(event) {
    // Prevent the form from refreshing the page
    event.preventDefault();

    const url = memeUrl.value;
    const textAbove = memeTextAbove.value;
    const textBelow = memeTextBottom.value;

    // Validate the image URL
    validateImageUrl(url, function(isValid) {
        if (isValid) {
            // Add the URL and the text the user wanted to create the meme
            createMeme(url, textAbove, textBelow);

            // Clear the text boxes for the form
            memeUrl.value = "";
            memeTextAbove.value = "";
            memeTextBottom.value = "";
        } else {
            alert("The image URL is not valid. Please provide a valid image URL.");
        }
    });
});

// Create the memes using the URL, and text the user chose
function createMeme(url, textAbove, textBelow){
    // Create the container div
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme-container");

    // Create the top text div
    const textDivTop = document.createElement("div");
    textDivTop.style.position = "absolute";
    textDivTop.classList.add("meme-text-top");
    textDivTop.innerHTML = textAbove;

    // Create the bottom text div
    const textDivBottom = document.createElement("div");
    textDivBottom.style.position = "absolute";
    textDivBottom.classList.add("meme-text-bottom");
    textDivBottom.innerHTML = textBelow;

    // Create the img element
    const memeImg = document.createElement("img");
    memeImg.src = url;
    memeImg.style.width = "100%";

    // Add the image and text divs to the container
    memeDiv.appendChild(memeImg);
    memeDiv.appendChild(textDivTop);
    memeDiv.appendChild(textDivBottom);

    memeSection.appendChild(memeDiv);
}

// Remove the meme when clicked on
memeSection.addEventListener("click", function(e){
    console.log(e.target.classList);
    // Makes sure only the memes get removed
    if(e.target.classList.contains("meme-container")){
        e.target.remove();    
    }
});