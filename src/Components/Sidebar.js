import React from 'react'
import { Nav } from "react-bootstrap"
import HomeIcon from '@material-ui/icons/Home';
import StarsIcon from '@material-ui/icons/Stars';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import InfoIcon from '@material-ui/icons/Info';
import ChatIcon from '@material-ui/icons/Chat';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import SettingsIcon from '@material-ui/icons/Settings';
import "../Styles/Sidebar.scss"

function Sidebar() {
    return (
        <div className="sidebar-options">
            <div className="sidebar-logo">
                <span class="logo-shade">CINEMA</span><span>SCORE</span>
            </div>
            <Nav.Link eventKey="disabled" disabled>
                General
                </Nav.Link>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home"><HomeIcon/> Active</Nav.Link>
                <Nav.Link eventKey="link-1"><StarsIcon/> Rating</Nav.Link>
                <Nav.Link eventKey="link-2"><ThumbUpIcon/> Popular</Nav.Link>
                <Nav.Link eventKey="link-1"><FavoriteIcon/> Favourite</Nav.Link>
                <Nav.Link eventKey="link-2"><CardGiftcardIcon/> Bonuses</Nav.Link>
                <Nav.Link eventKey="link-2"><InfoIcon/> About</Nav.Link>

                <Nav.Link eventKey="disabled" disabled>
                    Account
                </Nav.Link>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home"><ChatIcon/> Chats</Nav.Link>
                    <Nav.Link eventKey="link-1"><BookmarkIcon/> Saved</Nav.Link>
                    <Nav.Link eventKey="link-2"><AccountBalanceWalletIcon/> Wallet</Nav.Link>
                    <Nav.Link eventKey="link-1"><SettingsIcon/> Settings</Nav.Link>
                </Nav>
            </Nav>
        </div>
    )
}

export default Sidebar
