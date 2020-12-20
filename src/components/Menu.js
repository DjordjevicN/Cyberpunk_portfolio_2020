import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Menu() {
    const [pageNumber, setPageNumber] = useState(0)
    let location = window.location.pathname;
    return (
        <div className='menuWrapper'>
            <div className="menuContent" style={{ "@fontFace": 'src: /fonts/Dirga.ttf', fontFamily: "Dirga" }}>
                <Link className="menuTab" to="/" onClick={() => {
                    setPageNumber(0)
                }}><img src={location === '/' ? `/images/menuTabOn.png` : `/images/menuTabOff.png`} alt="menuTab" />
                    <span className="nameTag">HOME</span>
                </Link>
                <Link className="menuTab" to="/projects" onClick={() => {
                    setPageNumber(1)
                }}><img src={location === '/projects' ? `/images/menuTabOn.png` : `/images/menuTabOff.png`} alt="menuTab" />
                    <span className="nameTag">PROJECTS</span>
                </Link>
                <Link className="menuTab" to="/skills" onClick={() => {
                    setPageNumber(2)
                }}><img src={location === '/skills' ? `/images/menuTabOn.png` : `/images/menuTabOff.png`} alt="menuTab" />
                    <span className="nameTag">MY STACK</span></Link>
                <Link className="menuTab" to="/aboutMe" onClick={() => {
                    setPageNumber(3)
                }}><img src={location === '/aboutMe' ? `/images/menuTabOn.png` : `/images/menuTabOff.png`} alt="menuTab" />
                    <span className="nameTag">ABOUT ME</span>
                </Link>
                <p className="pageNumber">0{pageNumber}</p>
            </div>

        </div>
    );
}

export default Menu;
