

// Get Slider Items using Array.from() => (get an array from somthing)
let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
// Get Number Of Slides
let slidesCount = sliderImages.length;
// Set Current Slide
let currentSlide = 1;
// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");
// Previous And Next Buttons
let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");


// Handle Next And Previous Functions "On Click"
nextButton.onclick = nextSlide;
previousButton.onclick = previousSlide;

// Create The Indicators List Container "Main ul Element" + Add An ID To It
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On The Number Of Slides
for (let i = 1; i <= slidesCount; i++) {
    // Create an "li" Element
    let pageItem = document.createElement("li");

    // Add A Custom Attribute (Data Index)
    pageItem.setAttribute("data-index", i);

    // Add The Text Number To The Item
    pageItem.appendChild(document.createTextNode(i));

    // Appand Item To Its Parent
    paginationElement.appendChild(pageItem);
}

// Add The Pagination Element To its Main Container
let indicators = document.getElementById("indicators");
indicators.appendChild(paginationElement);

// Handle The Click On A Page Item
indicators.onclick = handleIndicatorsClick;


// Trigger the check function on load
window.onload = cheker;


// Next Slide Function
function nextSlide () {
    if (currentSlide < slidesCount) {
        currentSlide++;
        cheker();
    }
}
// Previous Slide Function
function previousSlide () {
    if (currentSlide > 1) {
        currentSlide--;
        cheker();
    }
}

// Checker Function
function cheker () {

    // Set The Slide Number
    slideNumberElement.textContent = `Slide #${currentSlide} of ${slidesCount}`;

    // Remove Class Active From All Images
    sliderImages.forEach((img) => img.classList.remove("active"));
    // Add Class Active To The Current Image
    sliderImages[currentSlide-1].classList.add("active");

    // Remove Class Active From All Page Indicators
    paginationElement.childNodes.forEach((pageInd) => pageInd.classList.remove("active"));
    // Add Class Active To The Current Page Indicator
    paginationElement.childNodes[currentSlide-1].classList.add("active");

    // Disable And Enable Previous And Next Buttons
    if (currentSlide == 1) {
        previousButton.classList.add("disabled");
    } else {
        previousButton.classList.remove("disabled");
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}

function handleIndicatorsClick (event) {
    let clickedPage = event.target.dataset["index"];
    currentSlide = clickedPage;
    cheker();
}