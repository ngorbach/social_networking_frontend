import {logout} from "../types";

const logoutAction = () => {
    return {
        type: logout
    }
}

export const logoutFunction = () => (dispatch) => {
    console.log('in da logoutHandler')
    localStorage.clear();
    dispatch(logoutAction())
};
