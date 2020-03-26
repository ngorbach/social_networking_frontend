import {listUsers} from "../types";
import { HOST_URL } from "../../constants.js"

export const listUsersAction = users => ({
    type: listUsers,
    payload: users
});

const URL = `${HOST_URL}backend/api/users/`;

export const listUsersFunction = () => (dispatch) => {

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
            dispatch(listUsersAction(users))
        });
};
