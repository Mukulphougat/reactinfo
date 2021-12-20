import React from "react";
import './NavStyles.css'
import log from './react-logo.png'
function Nav() {
    return (
        <nav className="nav">
            <div className="navD">
                <img src={log} width={60}/>
                <a href="https://acultivatedmindset.com/fun-facts-about-react-js/" target="_blank" className="links"><h3 className="head">ReactFacts</h3></a>
            </div>
            <a href="https://reactjs.org/" target="_blank" className="links"><h3 className="head">React Info Site</h3></a>
        </nav>
    );
}

export default Nav;