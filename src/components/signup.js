import React from 'react'
import { useDispatch } from 'react-redux'
import { noShowPage1 } from '../Features/RedSignup'

export function Signup(){
  const dispatch = useDispatch();
    return(
        <div class="container">
        <div class="card">
          <div class="card_title">
            <h1>Create Account</h1>
          </div>
          <div class="form">
          <form action="/register" method="post">
            <input type="text" name="username" id="username" placeholder="UserName" />
            <input type="email" name="email" placeholder="Email" id="email" />
            <input type="password" name="password" placeholder="Password" id="password" />
            <button>Sign Up</button>
            <button onClick={() => {
              dispatch(noShowPage1())
            }}>Close Button</button>
            </form>
          </div>
        </div>
      </div>
    )
}