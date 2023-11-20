import './Header.css'
import logo from './img/logo.png'
import { FaWallet, FaBtc } from 'react-icons/fa'
import Body from './Content'
import Transaction from './Transaction.js'
import Feedback from './Feedback.js'
import React, { useState } from 'react';
function Logo() {
    return (
        <div className='logo-wrapper'>
                <img src={logo} className='logo' alt=''/>
            </div>
    )
}
function RightMenu() {
    return (
        <div className='RightMenu'>
            <ul className='menu-2'>
                <li>
                    <div className='ic'><div className='icon-wrapper' style={{ backgroundColor: "#f0b90c" }}>
                        <FaBtc className='icons' />
                        </div>
                    </div>
                </li>
                <li>
                    <div className='ic'>
                        <div className='icon-wrapper' style={{ backgroundColor: "#0bbb40" }}>
                            <FaWallet className='icons' />
                        </div>
                    </div>
                </li>
                <li>
                <select className='Language-selection'>
                    <option>English</option>
                    <option>Vietnamese</option>
                </select>
                </li>
                
            </ul>
        </div>
    );
}
const MyFunctionComponent=({tabNum})=> {
    return (
        <>
            {tabNum === 1 &&
                (<>
                <Body />
                <Transaction />
                </>
            )}
        {tabNum === 2 && <Feedback />}
        </>
    )
    
  }
function Menu({ onTabClick,selectedTab }) {
    return (
        <div className='header-menu'>
            <ul className='menu'>
                <li><Logo/></li>
                <li
                    onClick={() => onTabClick(1)}
                    style={{
                        color: selectedTab ===1 ? '#0bbb40' :'black'
                    }}
                ><span
                        style={{ borderBottom: selectedTab === 1 ? 'solid 4px #0bbb40' : '', }}
                    >Transfer</span></li>
                <li
                    onClick={() => onTabClick(2)}
                    style={{
                        color: selectedTab === 2 ? '#0bbb40' : 'black'
                    }}
                ><span
                    style={{ borderBottom: selectedTab === 2 ? 'solid 4px #0bbb40' : '', }}
                    >Feedback</span></li>
                

            </ul>
        </div>
    )
}



function Header() {
    const [selectedTab, setSelectedTab] = useState(1);

    const handleTabClick = (tabNum) => {
        setSelectedTab(tabNum);
    };
    return (
        <>
            <header>
                <Menu onTabClick={handleTabClick} selectedTab={selectedTab} />
                <RightMenu />
            </header>
            <MyFunctionComponent tabNum={selectedTab} />
        </>
    );
}





export default Header