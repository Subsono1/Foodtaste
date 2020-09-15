import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
  const {currentUser} = props
  return (
    <header>
      <h1>Tasteville</h1>
      {
        currentUser ?
          <div>
        <p> {currentUser.username} </p>
        <button onClick ={props.handleLogout}>Logout</button>

      </div> :
        <Link to='/login'>Login/Register</Link>
      }
      <hr />
      {
        currentUser && 
        <>
          <Link to='/foods'>Foods</Link>
          <Link to='/flavors'>flavors</Link>
          </>
      }

    </header>
  )
}

export default Header
