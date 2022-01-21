import React from 'react'
import CardDisplay from '../../Components/CardDisplay'
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='heroSection'>
            <div className='heading'>
                Just what is an 'ideal'? If you ask me, the answer is clear. It is a
                <br />
                <span className="colorText">word </span> written on the
                <span className="colorText"> cover of my book </span>.
                <br />

            </div>

            <div className="text1">
                Kunikida Doppo!
            </div>


            <CardDisplay />







        </div>
    )
}

export default HeroSection
