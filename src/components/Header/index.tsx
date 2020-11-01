import React from 'react';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import HeaderType from './../../interfaces/HeaderType';

import listIcon from './../../assets/icons/list.svg';
import trashIcon from './../../assets/icons/trash.svg';
import plusIcon from './../../assets/icons/plus.svg';

import './styles.css';

const Header = (props: HeaderType) => {
    return (
        <motion.header
            className="header"
            initial={{
                opacity: 0,
                translateY: -20
            }}
            animate={{
                opacity: 1,
                translateY: 0
            }}
        >
            <nav className="navbar">
                <div className="left">
                    <h2>Super Todos</h2>
                </div>
                <div className="right">
                    <Link to="/" className="navbar-option-item" href="/">
                        <img src={listIcon} alt="Ver Todos"/>
                    </Link>
                    <Link to="/apagar" className="navbar-option-item" href="/">
                        <img src={trashIcon} alt="Excluir Todos"/>
                    </Link>
                    <Link to="/criar" className="navbar-option-item" href="/">
                        <img src={plusIcon} alt="Criar Todo"/>
                    </Link>
                </div>
            </nav>

            <div className="header-content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </motion.header>
    )
}

export default Header;