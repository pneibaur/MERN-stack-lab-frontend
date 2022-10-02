import React from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h1>
                Welcome to the Stormlight Characters Archive!
            </h1>
            <Link className='link' to="/people">
                <h3>See Characters </h3>
                <img src="https://i.imgur.com/DX8Lf3Y.png" alt="Bridge Four" />
            </Link>
        </div>
    )
}

export default Home