import { registerUser } from "../types";

export const registerUserAction = (success,data) => ({
    type: registerUser,
    payload: {success, email: data}
});

const URL = `https://motion.propulsion-home.ch/backend/api/auth/registration/`;

export const registerUserFunction = (email) => (dispatch) => {

    const headers = new Headers({
        'Content-Type': 'application/json'
    });
    console.log('in da register data',email)

    const config = {
        method: 'POST',
        body: JSON.stringify(email),
        headers
    };

    console.log('in da register config',config)

    const apiInformation = fetch(URL, config)
        .then(response => response.json())
        .then(result => {
            console.log('then result',result)
            dispatch(registerUserAction(false,result.email))
        })
        .catch(result => {
            console.log('catch result',result)
            dispatch(registerUserAction(true,`We've sent a confirmation code to your email ${email.email}.`))
        })
};
