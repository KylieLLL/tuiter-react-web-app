import React from "react";


const PostItem = (
    {
        post = {
            "Author": "Elon Musk",
            "handle": "elonmusk",
            "time":"23h",
            "headings":"Amazing show about @Inspiration4x mission!",
            "title":"Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "avatarImage":"rocket.jpeg",
            "mainPicture":"inspiration4.jpeg",
            "message":"4.2k",
            "retweet":"3.5k",
            "like":"37.5k",
            "share":"",
            "link":"netflix.com"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col col-2">
                    <div><img className="float-start rounded-circle" height="70px" width="70px" alt="" src={`/images/${post.avatarImage}`}/></div>
                </div>
                <div className="col-10">
                    <div className="fw-bolder fs-6">{post.Author} <i className="bi bi-patch-check-fill "></i>
                        <span className="text-dark fw-normal fs-12"> @{post.handle} • {post.time}</span>
                        <span className="text-secondary float-end">•••</span></div>
                    <div className="my-1">{post.headings}</div>
                    <div className="rounded-4 border border-secondary">
                        <img className="rounded-2 " width="100%" alt="" height="350px" src={`/images/${post.mainPicture}`}/>
                            <div className="border-secondary">
                                <div className="fw-bold px-2 mt-2">{post.title}</div>
                                <div className="text-dark px-2 mb-3">{post.content}<span className="text-dark"><i
                                    className="fa-solid fa-link"></i>{post.link}</span></div>
                            </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-3 text-dark">
                            <a href="index.js" className="px-2"><i className="bi bi-chat text-dark fs-6"></i></a>
                            <span>{post.message}</span>
                        </div>
                        <div className="col-3 text-dark">
                            <a href="index.js" className="px-2"><i className="bi bi-repeat text-dark fs-6"></i></a>
                            <span>{post.retweet}</span>
                        </div>
                        <div className="col-3 text-dark">
                            <a href="index.js" className="px-2"><i className="bi bi-suit-heart text-dark fs-6"></i></a>
                            <span>{post.like}</span>
                        </div>
                        <div className="col-3 text-dark">
                            <a href="index.js" className="px-2"><i
                                className="bi bi-box-arrow-up text-dark fs-6"></i></a><span>{post.share}</span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PostItem;