import React from 'react'
import './NavBar.css';
import { Image } from 'react-bootstrap';



function NavBar() {
    return (
        <div>


            <div className="navBar">
                <Image className='logo' src='Images/logo.svg' alt='logo' />

                <div className="options">
                    <button className='btn'>Home</button>
                    <button className='btn '>Anime</button>
                    <button className='btn Responsive'>Manga</button>
                    <button className='btn Responsive' >Manhwa</button>

                </div>

            </div>

        </div>
    )
}

export default NavBar

