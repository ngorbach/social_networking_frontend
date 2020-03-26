import {fetchUserPosts} from "../types";

export const fetchUserPostsAction = posts => ({
    type: fetchUserPosts,
    payload: posts
});


export const fetchUserPostsFunction = (user_id) => dispatch => {

    const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/user/${user_id}/`;

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
            dispatch(fetchUserPostsAction(posts))
        });
};
