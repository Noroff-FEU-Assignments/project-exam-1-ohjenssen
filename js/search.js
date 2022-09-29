const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");

const postContainers = document.getElementsByClassName("somePost");

const searchPosts = async () => {
    try {
        event.preventDefault()
        let searchUrl = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?search=" + searchBar.value.toLowerCase() + "&per_page=100&_embed";
        console.log(searchUrl)
        const response = await fetch(searchUrl);
        const posts = await response.json();

        console.log(posts);

        if (!Array.isArray(posts) || posts.length == 0){
            throw `Go to catch`;
        }

        postsSection.innerHTML = ``;

        for (let i = 0; i < posts.length; i++){
            const id = posts[i].id;
            const featuredMedia = posts[i]._embedded["wp:featuredmedia"][0]["source_url"];
            console.log(id)
            postsSection.innerHTML +=    `<div class="somePost">
                                            <a href="specificPost.html?id=${id}"><img src="${featuredMedia}" class="featuredImage"></a>
                                            <a href="specificPost.html?id=${id}" class="titleLink">${posts[i].title.rendered}</a>
                                        </div>`;
        }

        morePostsSection.innerHTML = ``;


    } catch {
        morePostsSection.innerHTML = ``;
        postsSection.innerHTML =    `<div class="somePost">
                                        <h2>No results!</h2>
                                    </div>`;
    }
}

searchButton.addEventListener("click", searchPosts);