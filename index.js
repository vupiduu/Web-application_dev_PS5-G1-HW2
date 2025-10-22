window.onload = function(){


    fetch('https://c58414.websec.ee/posts.json')
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

                document.body.appendChild(divPost);
            }
        }).catch(err => {
            console.log(err);
    });
}