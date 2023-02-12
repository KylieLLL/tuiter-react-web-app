import whoList from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <li class="list-group-item">
            <h5 class="fw-bold">Who to follow</h5>
        </li>
        ${
        whoList.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
    </ul>
    `);
}

export default WhoToFollowList;