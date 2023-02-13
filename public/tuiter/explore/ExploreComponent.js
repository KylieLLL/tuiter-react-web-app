import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                <div class="col col-11 position-relative">
                    <input class="ps-5  fs-6 form-control rounded-pill" placeholder="Search Tuiter">
                    <i class="fs-7 fas fa-search position-absolute top-0 start-0 mt-2 ms-4 p-1"></i>
                </div>
                <div class="col-1 fs-4">
                    <a href="#"><i class="fa fa-cog"></i></a>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                <li class="nav-item" ><a class="nav-link active fs-8" href="for-you.html">For you</a </li>
                <li class="nav-item" ><a class="nav-link fs-6" href="trending.html">Trending</a </li>
                <li class="nav-item" ><a class="nav-link fs-6" href="news.html">News</a </li>
                <li class="nav-item" ><a class="nav-link fs-6" href="sports.html">Sports</a </li>
                <li class="nav-item" ><a class="nav-link fs-6" href="entertainment.html">Entertainment</a </li>
           </ul>
            <div class="pb-2 position-relative">
                <img src="../../images/starship.jpeg" width="100%" class="mt-0">
                <h2 class="wd-text-darkgray fw-bolder position-absolute bottom-0 ms-2 mb-3" >SpaceX's Starship</h2>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
