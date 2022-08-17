import React from 'react'
import { Link } from 'react-router-dom'


const MyLinks = () => {
  return (
    <>
        <div>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/second'}>About</Link></li>
            </ul>
        </div>
    </>
  )
}

export default MyLinks
