import {listPosts} from "../types";
import { HOST_URL } from "../../constants.js"

export const listPostsAction = posts => ({
    type: listPosts,
    payload: posts
});

const URL = `${HOST_URL}backend/api/social/posts/`;

export const listPostsFunction = () => dispatch => {

    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'GET',
        headers
    };

    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(posts => {
            console.log('data',posts);
            dispatch(listPostsAction(posts))
        });
};
