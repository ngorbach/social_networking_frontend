import { followUser } from "../types";

export const followUserAction = user => ({
    type: followUser,
});


export const followUserFunction = (user_id) => (dispatch) => {

    const URL = `https://motion.propulsion-home.ch/backend/api/social/followers/toggle-follow/${user_id}/`;
    console.log('URL',URL)

    const headers = new Headers({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.token
    });

    const config = {
        method: 'POST',
        headers
    };

    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(user => {
            dispatch(followUserAction(user))
        });
};