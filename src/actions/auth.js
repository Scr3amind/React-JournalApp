import { googleAuthProvider,firebase } from "../firebase/firebase-config";
import { types } from "../types/types"

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        setTimeout(() => {
            dispatch(login(123, 'Ismael'));
        }, 3500);
    };
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(userCred => {
                console.log(userCred);
            })
    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    }
}