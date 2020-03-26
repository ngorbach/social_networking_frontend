import {logout} from "../types";

const logoutAction = () => {
    return {
        type: logout
    }
}

export const logoutFunction = () => (dispatch) => {
    localStorage.clear();
    dispatch(logoutAction())
};

export const logoutHandler = () => {
    dispatch(logoutFunction())
    //props.dispatch(logoutFunction())
    //props.history.push('/')
};