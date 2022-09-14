const sliderWrapper = document.querySelector(".slider-wrapper")
const slidesContainer = document.getElementById("slides-container");
const prevButton = document.getElementById("slide-arrow-prev")
const nextButton = document.getElementById("slide-arrow-next")

const url = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?per_page=100&_embed";

const getPosts = async (url) => {
    const response= await fetch(url);
    const posts = await response.json();
    
    for (let i = 0; i < 4; i++){
        const featuredImage = posts[i]._embedded["wp:featuredmedia"][0]["source_url"];
        const id = posts[i].id;

        slidesContainer.innerHTML += `
        <li class="slide">
            <a href="specificPost.html?id=${id}">
                <img src="${featuredImage}" class="carouselImg">
                <button class="carouselBtn">View</button>
            </a>
        </li>`;
    }

    const slide = document.querySelector(".slide")
    
    nextButton.addEventListener("click", (event) => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
    })
    
    prevButton.addEventListener("click", (event) => {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft -= slideWidth;
    })
}

getPosts(url);

// nextButton.addEventListener("click", (event) => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft += slideWidth;
// })

// prevButton.addEventListener("click", (event) => {
//     const slideWidth = slide.clientWidth;
//     slidesContainer.scrollLeft -= slideWidth;
// })