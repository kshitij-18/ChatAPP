import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from "./firebase"
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
    const [{ }, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch(
                {
                    type: actionTypes.SET_USER,
                    user: result.user
                });
        }).catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login__container'>
                <img src='https://scalebranding.com/wp-content/uploads/2020/07/chat-app-logo-scaled.jpg'></img>
                <div className='login__text'>
                    <h1>SignUp to ChatAPP</h1>
                </div>

                <Button className='login__button' type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
