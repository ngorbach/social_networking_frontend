import {listLikes} from "../types";

export const listLikesAction = likes => ({
    type: listLikes,
    payload: likes
});

const URL = `https://motion.propulsion-home.ch/backend/api/social/posts/likes/`;

export const listLikesFunction = () => (dispatch) => {

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
        .then(likes => {
            dispatch(listLikesAction(likes))
        });
};
