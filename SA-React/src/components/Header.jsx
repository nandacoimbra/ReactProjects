import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'

export default function Header() {

    return (

        <header>
            <img src=".\src\assets\cream.png" alt="" />
            <ul>
                <li><Link to='/' className='nav-link'>Home</Link></li>
                <li><Link to='/missao' className='nav-link'>Missão</Link></li>
                <li><Link to='/produtos' className='nav-link'>Produtos</Link></li>
                <li><Link to='/historia' className='nav-link'>Nossa História</Link></li>
                <li><Link to='/contatos' className='nav-link'>Contato</Link></li>
            </ul>
        </header>
    )
}