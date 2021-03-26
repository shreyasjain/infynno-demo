import React from 'react'
import "../Styles/Home.scss"
import Sidebar from './Sidebar'
import Body from './Body'

function Home() {
    return (
        <div>
            <div className="home-container">
                <div className="home-sidebar">
                    <Sidebar />
                </div>
                <div className="home-body">
                    <Body />
                </div>
            </div>
        </div>
    )
}

export default Home
