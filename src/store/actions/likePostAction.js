import { likePost } from "../types";

export const likePostAction = user => ({
    type: likePost,
});


export const likePostFunction = (post_id) => (dispatch) => {

    const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/toggle-like/${post_id}/`;

    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'POST',
        body: JSON.stringify({content:'like'}),
        headers
    };

    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(user => {
            dispatch(likePostAction(user))
        });
};