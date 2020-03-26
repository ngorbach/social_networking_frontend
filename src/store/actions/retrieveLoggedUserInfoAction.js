import {retrieveLoggedUserInfo} from "../types";

export const retrieveLoggedUserInfoAction = loggedUserInfo => ({
    type: retrieveLoggedUserInfo,
    payload: loggedUserInfo
});

export const retrieveLoggedUserInfoFunction = () => (dispatch) => {
 
        const URL = `https://motion.propulsion-home.ch/backend/api/users/me/`;
        const headers = new Headers({
                'Content-Type': 'application/json',
                "Authorization": "Bearer " + localStorage.token
        });
        const config = { method:'GET',headers};
        const apiInformation = fetch(URL, config)
            .then( response => response.json() )
            .then( result => {
                dispatch(retrieveLoggedUserInfoAction(result))
        })
};
