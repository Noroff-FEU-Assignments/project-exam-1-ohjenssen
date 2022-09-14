const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const queryID = params.get("id");

const url = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts/" + queryID + "?_embed";
console.log(url)

const modalContainer = document.querySelector(".modalContainer");
const docTitle = document.querySelector("title");
const pageTitle = document.querySelector(".pageTitle");
const articleTop = document.querySelector(".article_top");
const bodyContent = document.querySelector(".bodyText")


const loadSpecificPost = async (url) => {
    const response = await fetch(url);
    const post = await response.json(url);

    const featuredImage = post._embedded["wp:featuredmedia"][0]["source_url"]
    
    docTitle.innerHTML = post.title.rendered;

    pageTitle.innerHTML =`<h1>${post.title.rendered}</h1>`;
            
    articleTop.innerHTML =  `<h2>${post.excerpt.rendered}</h2>
                            <img src="${featuredImage}" class="featuredImage">`;

    bodyContent.innerHTML = `${post.content.rendered}`;

    const pictureContent = document.querySelectorAll("figure img");


    // Creating a listener event for each picture.
    pictureContent.forEach((picture) =>{
        picture.addEventListener("click", (event) =>{ // Creating content for the modalContainer, using the sourceUrl of whatever image that was clicked
            modalContainer.innerHTML = `<div class="modal"><img src="${event.target.currentSrc}" class="modalImage"></div>`;

            const modal = document.querySelector(".modal");
            modal.style.display = "flex";

            function exitModal(){
                modal.style.display = "none";
                modalContainer.innerHTML = "";
            }
                    
            modal.addEventListener("click", exitModal);
        })
    })
}


loadSpecificPost(url);