import React from 'react';
import { Link } from 'react-router-dom';

const  Navbar = () => {
  
  return (
    <div className='navbar_style bg-warning'>
        <Link to="/" className='tag_logo'> Employee Details</Link>

        <Link to="add"><button className='add_button bg-primary px-2'>Add Employee</button></Link>
    </div>
  )
}

export default Navbar