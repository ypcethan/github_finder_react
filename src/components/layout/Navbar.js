import React from 'react'
import { Link } from 'react-router-dom';
// impt for shortcut.
import PropTypes from 'prop-types'

const Navbar = (props) => {


  return (
    <div className='navbar bg-primary'>
      <i className={props.icon} /> {props.title}

      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </div>
  )

}

Navbar.defaultProps = {

  title: "Github Finder",
  icon: "fab fa-github"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default Navbar
