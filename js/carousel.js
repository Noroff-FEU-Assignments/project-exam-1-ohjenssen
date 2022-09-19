const crselContainer = document.querySelector(".crselContainer");
const crselSlide = document.getElementsByClassName("crselSlide");

let slideIndex = 1;

function plusSlides(x) {
    showSlides(slideIndex += x);
}

function showSlides(x){

    if (x > crselSlide.length) {
        slideIndex = 1;
    }
    if (x < 1) {
        slideIndex = crselSlide.length;
    }

    for (let i = 0; i < crselSlide.length; i++){
        crselSlide[i].style.display = "none";
    }

    crselSlide[slideIndex - 1].style.display = "block";
}

const url = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?&_embed";

const getPosts = async (url) => {
    const response= await fetch(url);
    const posts = await response.json();

    crselContainer.innerHTML = `
                                    <button class="arrow-left" onclick="plusSlides(-1)">&#10094;</button>
                                    <button class="arrow-right" onclick="plusSlides(1)">&#10095;</button>`;
    
    for (let i = 0; i < posts.length; i++){
        const featuredImage = posts[i]._embedded["wp:featuredmedia"][0]["source_url"];
        const id = posts[i].id;

        crselContainer.innerHTML += `
                                        <div class="crselSlide">
                                            <img src="${featuredImage}" class="crselImg">
                                            <div class="txtContainer">
                                                <a class="crselText" href="specificPost.html?id=${id}">${posts[i].title.rendered}</a>
                                            <div>
                                        </div>`;

    }
    showSlides(slideIndex);


}

getPosts(url);