import { fetchUser } from "../types";

export const fetchUserAction = user => ({
    type: fetchUser,
    payload: user
});


export const fetchUserFunction = (user_id) => (dispatch) => {

    const URL = `https://motion.propulsion-home.ch/backend/api/users/${user_id}/`;
    console.log('URL',URL)

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
        .then(user => {
            dispatch(fetchUserAction(user))
        });
};