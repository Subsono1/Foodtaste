import React from 'react'

function Flavors(props) {
  return (
    <div>
      <h3>Foods Flavors</h3>

      {props.flavors.map(flavor => (   //with one line you can use () with multi-lines use {}
      <p key={flavor.id}>{flavor.name}</p>
      ))}
    </div>
  )
}

export default Flavors
