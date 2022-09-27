const searchUrl = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?per_page=100&_embed";
const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");

const postContainers = document.getElementsByClassName("somePost");

const searchPosts = async () =>{
    try {
        event.preventDefault()
        const response = await fetch(searchUrl)
        const posts = await response.json();

        const input = searchBar.value.toUpperCase();
        postsSection.innerHTML = "";
        
        
        for (let i = 0; i < posts.length; i++){
            const specificPost = posts[i].title.rendered.toUpperCase();
            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0]["source_url"]; // Selecting image
            const id = posts[i].id; // Selecting each posts unique id to use in the query parameter

            
            if (specificPost.indexOf(input) > -1){
                

                postsSection.innerHTML +=   `<div class="somePost"">
                                <a href="specificPost.html?id=${id}"><img src="${featuredImage}" class="featuredImage"></a>
                                <a href="specificPost.html?id=${id}" class="titleLink">${posts[i].title.rendered}</a>
                            </div>`;
            } else {
                console.log("Could not retrieve posts!")
            }

            morePostsSection.innerHTML = ``; // Removes the button when user is searching

        }
    } catch {
        console.log("Oh no!")
    }
}
searchButton.addEventListener("click", searchPosts);