import axios from "axios";

function PostClick(data) {
    const trial_id = localStorage.getItem("trial_id");
    data["trial_id"] = trial_id
    axios.patch("/trial/data", data)
        .then(res => console.log(res))
}

export default PostClick;


// coordinates
// time coordinate was clicked
// user_id
// trial_id
// whether the click was a hit or miss on the target
// the node_id that was clicked
// FIX: should only be a hit, if the red node is clicked
// FIX: issue with creating 2 or more trials
// FIX: remove local storage InsertedID after trials are finished