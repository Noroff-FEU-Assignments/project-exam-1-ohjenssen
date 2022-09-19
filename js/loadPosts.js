const postsSection = document.querySelector(".posts");
const url = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?page=1&_embed";

const getPosts = async () => {
    try {

        const response = await fetch(url);
        const posts = await response.json();
        postsSection.innerHTML = "";
        
        if (!Array.isArray(posts)) { //making sure that the catch-block is entered if url is not correct, since the url can still return a valid object without information needed to create the html
            throw `Go to catch`;
        }
        
        
        for (let i = 0; i < posts.length; i++){
            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0]["source_url"]; // Selecting image
            const id = posts[i].id; // Selecting each posts unique id to use in the query parameter
            
            
            postsSection.innerHTML +=   `<div class="somePost"">
                                            <a href="specificPost.html?id=${id}"><img src="${featuredImage}" class="featuredImage"></a>
                                            <a href="specificPost.html?id=${id}" class="titleLink">${posts[i].title.rendered}</a>
                                        </div>`;
            
        }
        
        morePostsSection.innerHTML = `<button type="button" class="ctaBTN" onclick="getMorePosts()">See more</button>`;

    } catch {
        postsSection.innerHTML = `<h2>Uh oh! It appears something went wrong. Try reloading.</h2>`;
        morePostsSection.innerHTML = ``;
    }
}

getPosts();

// Code to show more posts
let pageNum = 2;
let seeMoreUrl = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?page=" + pageNum + "&_embed";
const morePostsSection = document.querySelector(".morePosts");

const getMorePosts = async () => {
    try{

        const response = await fetch(seeMoreUrl)
        const posts = await response.json()

        if (!Array.isArray(posts)) { //making sure that the catch-block is entered if url is not correct, since the url can still return a valid object without information needed to create the html
            throw `Go to catch`;
        }

        for (let i = 0; i < posts.length; i++){
            const featuredImage = posts[i]._embedded["wp:featuredmedia"][0]["source_url"]; // Selecting image
            const id = posts[i].id; // Giving each post a unique id in the query parameter

            postsSection.innerHTML +=   `<div class="somePost">
                                                <a href="specificPost.html?id=${id}"><img src="${featuredImage}" class="featuredImage"></a>
                                                <a href="specificPost.html?id=${id}">${posts[i].title.rendered}</a>
                                            </div>`;
        }
        
        pageNum += 1;
        seeMoreUrl = "https://smarterfitness.oskarjenssen.com/wp-json/wp/v2/posts?page=" + pageNum + "&_embed";

    } catch {
        morePostsSection.innerHTML = `<h2>No more posts to show. Sorry!</h2>`;
    }
}