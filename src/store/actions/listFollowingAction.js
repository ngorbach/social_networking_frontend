import {listFollowing} from "../types";

export const listFollowingAction = users => ({
    type: listFollowing,
    payload: users
});

const URL = `https://motion.propulsion-home.ch/backend/api/social/followers/following/`;

export const listFollowingFunction = () => (dispatch) => {

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
        .then(users => {
            dispatch(listFollowingAction(users))
        });
};
