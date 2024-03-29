import React from 'react'
import {Link} from 'react-router-dom';

export default function Header() {

    return (

        <header>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/missao'>Missão</Link></li>
                <li><Link to='/produtos'>Produtos</Link></li>
                <li><Link to='/historia'>Nossa História</Link></li>
                <li><Link to='/contatos'>Contato</Link></li>
            </ul>
        </header>
    )
}