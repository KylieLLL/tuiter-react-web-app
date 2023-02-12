import post from "./posts.js";


const PostItem = (post) => {
    return(`
    <li class="list-group-item">
        <div class="row">
            <div class="col-2"><img src=${post.avatarImage} class="float-start rounded-circle" height="70px" width="70px"></div>
            <div class="col-10">
                <div class="text-white fw-bolder fs-6">${post.Author} <i class="fa-solid fa-check-circle"></i><span class="text-dark fw-normal fs-12"> @${post.handle} • ${post.time}</span><span class="text-secondary float-end">•••</span></div>
                <div class="text-white fs-6 mb-3 mt-1">${post.headings}</div>
                <div class="rounded-4 border border-secondary">
                    <img src=${post.mainPicture} class="rounded-4 border-bottom" width="100%" height="350px">
                    <div class="border-secondary">
                        <div class="fw-bold px-2 mt-2">${post.title}</div>
                        <div class="text-dark px-2 mb-3">${post.content}<span class="text-dark"><i class="fa-solid fa-link"></i>${post.link}</span></div>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-3 text-dark">
                        <a href="#" class="px-2"><i class="fa-regular fa-comment text-dark fs-6"></i></a> <span>${post.message}</span>
                    </div>
                    <div class="col-3 text-dark">
                        <a href="#" class="px-2"><i class="fa-solid fa-retweet text-dark fs-6"></i></a> <span>${post.retweet}</span>
                    </div>
                    <div class="col-3 text-dark">
                        <a href="#" class="px-2"><i class="fa-regular fa-heart text-dark fs-6"></i></a> <span>${post.like}</span>
                    </div>
                    <div class="col-3 text-dark">
                        <a href="#" class="px-2"><i class="fa-solid fa-arrow-up-from-bracket text-dark fs-6"></i></a><span>${post.share}</span>
                    </div>
                </div>
            </div>
        </div>     
    </li>
    `);
}

export default PostItem;