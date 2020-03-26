import {fetchPost} from "../types";

export const fetchPostAction = post => ({
    type: fetchPost,
    payload: post
});


export const fetchPostFunction = (post_id) => dispatch => {

    const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/${post_id}/`;

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
        .then(post => {
            console.log('data',post);
            dispatch(fetchPostAction(post))
        });
};
