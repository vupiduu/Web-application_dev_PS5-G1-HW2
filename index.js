window.onload = function(){

    //we uploaded the file to staticsave where it was deployed and accessible
    //fetch('https://temp.staticsave.com/68f8b2d0115c8.json')

    //with local file:
    fetch('./res/posts/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

            for(const postFromJSON of json){
                const divPost = document.createElement("div");
                divPost.className = "post";
                const divPostHeader = document.createElement("div");
                if (postFromJSON.picture !== ""){
                    const imgPost = document.createElement("img");
                    imgPost.className = "post-image";
                    imgPost.src = postFromJSON.picture;
                    divPostHeader.appendChild(imgPost);
                }
                divPostHeader.className = "post-header";


                const divPostUserInfo = document.createElement("div");
                const userName = document.createElement("span");
                const postDate = document.createElement("span");
                divPostUserInfo.className = "post-user-info";
                userName.className = "username";
                userName.innerText = postFromJSON.userName;
                postDate.className = "post-date";
                postDate.innerText = postFromJSON.date;
                divPostUserInfo.appendChild(userName);
                divPostUserInfo.appendChild(postDate);

                const divPostDescription = document.createElement("div");
                const postDescription = this.document.createElement("p");
                divPostDescription.className = "post-content";
                postDescription.innerText = postFromJSON.content;
                divPostDescription.appendChild(postDescription);

                const divPostActions = document.createElement("div");
                const likeButton = this.document.createElement("button");
                likeButton.className = "like-btn";
                likeButton.innerText = "👍 Like"
                divPostActions.className = "post-actions";
                divPostActions.appendChild(likeButton);


                divPost.appendChild(divPostHeader);
                divPost.appendChild(divPostUserInfo);
                divPost.appendChild(divPostDescription);
                divPost.appendChild(divPostActions);

                document.getElementById("main-content").appendChild(divPost)

               // document.body.appendChild(divPost);
            }
        }).catch(err => {
            console.log(err);
    });

    const base = window.location.pathname.includes("Web-application_dev_PS5-G1-HW2")? 
    "/Web-application_dev_PS5-G1-HW2/" : "/";
    
    const profilePic = document.getElementById('profile-container');
    const userInfoDropdown = document.getElementById('userInfoDropdown');
    
    if (profilePic && userInfoDropdown){
        profilePic.addEventListener("click", () => {
            userInfoDropdown.style.display = 'block';
        });

        // Close the dropdown if the user clicks outside of it
        window.addEventListener("click", (event) => {
        if (!event.target.closest(".profile-container")) {
            userInfoDropdown.style.display = "none";
        }
        });

        const logoutBtn = document.getElementById('logoutBtn');

        logoutBtn.addEventListener("click", () => {
            window.location = base + "src/html/login.html";
        });
    }

    const profilePic_in_login = document.getElementById('profilePicBtn');

    profilePic_in_login.addEventListener("click", () => {
        window.location = base + "index.html";
    });
}


