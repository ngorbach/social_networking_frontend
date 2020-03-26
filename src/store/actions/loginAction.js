import {login} from "../types";


export const loginAction = response => ({
    type: login,
    payload: response
});

const URL = `https://motion.propulsion-home.ch/backend/api/auth/token/`;

export const loginFunction = (data) => (dispatch) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    console.log('in da loginaction data',data)

    const config = {
        method: 'POST',
        body: JSON.stringify(data),
        headers
    };

    console.log('in da loginaction config',config)

    const apiInformation = fetch(URL, config)
        .then(res => res.json())
        .then(data => {
            console.log('data',data.user);
            const {access} = data;
            dispatch(loginAction(data))
            localStorage.setItem('token', access);
        });
};