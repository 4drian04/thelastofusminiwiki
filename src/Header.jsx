import React from 'react'
import './Header.css'
import banner from "./assets/BANNER-THE-LAST-OF-US.png"

function Header() {
    return (
        <header>
            <img src={banner} className="banner-img"></img>
        </header>
    )
}

export default Header