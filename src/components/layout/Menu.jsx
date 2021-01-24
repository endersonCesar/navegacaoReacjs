import React from "react";
import './Menu.css';
import {  Link} from "react-router-dom";
function Menu() {
    return (
        <aside className="Menu">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/param/12">Param #1</Link></li>
                    <li><Link to="/param">Param #2</Link></li>
                    <li><Link to="/naoExiste">Não Existe</Link></li>
        
                </ul>
            </nav>
        </aside>
    );

}
export default Menu