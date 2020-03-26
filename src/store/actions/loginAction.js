import {login} from "../types";
import { HOST_URL } from "../../constants.js"

export const loginAction = token => ({
    type: login,
    payload: token
});

const URL = `${HOST_URL}backend/api/auth/token/`;

export const loginFunction = (credentials) => (dispatch) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });

    const config = {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers
    };

    console.log('in da loginfunction config',config)

    const apiInformation = fetch(URL, config)
        .then(response => response.json())
        .then(data => {
            console.log('!!',data)
            dispatch(loginAction(data.access))
            localStorage.setItem('token', data.access)
        });
};
