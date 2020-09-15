import React from 'react'
import Header from '../components/Header'


function Layout(props) {
  return (
    <>
      <Header currentUser={props.currentUser}
        handleLogout={props.handleLogout}/>
      <main>{props.children}
      </main>
    </>
  )
}

export default Layout
