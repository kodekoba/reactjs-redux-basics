import { resolve } from "path";

export function setName(name) {
    return dispatch => {
        setTimeout( () => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }, 200);
    };
    // return { //redux-promise-middleware needed for this method
    //     type: "SET_NAME",
    //     payload: new Promise( (resolve, reject) => {
    //         setTimeout( () => {
    //             resolve(name);
    //         }, 500);
    //     })
    // };
};

export function setAge(age) {
    return {
        type: "SET_AGE",
        payload: age
    };
};