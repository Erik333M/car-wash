import React from 'react'
import { Link } from 'react-router-dom'
 
import "./sidebar.scss"

const SidebarContent = ({categoris}) => {
  
  return (
    <div className='side-component'>
        {categoris.map((e) => {
            return <div key={e.id}>
                <Link to={`${e.name}`}>
                    {e.name}
                </Link>
            </div>
        })}
    </div>
  )
}

export default SidebarContent 
