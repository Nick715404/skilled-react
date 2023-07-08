import React from 'react'
import Status from '../_videoStatus/Status'

function Header() {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logos logos"></div>
          <Status />
        </div>
      </div>
    </header>
  )
}

export default Header
