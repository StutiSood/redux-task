import React from "react";
import { useDispatch } from 'react-redux'
import { noShowPage } from '../Features/RedLogin'
import './login.css'

export function Login() {
    const dispatch = useDispatch();

    return(
            <div className="container">
            <h1>Login Form</h1>
            <input type="text" id="email" placeholder="Email Adress"/>
            <input type="email" id="pass" placeholder="Pasword"/>
            <button id="loginBtn">Login</button>
            <button onClick={() => {
                dispatch(noShowPage())
            }}>Close Button</button>
        </div>
    )
}