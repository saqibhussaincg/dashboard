import React, { useEffect } from 'react'
import './Menu.css';
import Logo from '../img/logo.png';
import {FaDelicious, FaShoppingCart, FaWallet, FaChartLine, FaRegClock, FaCog, FaSignOutAlt} from 'react-icons/fa';


const Menu = () => {

    // Program For Active Links
    useEffect(() => {
        const mainMenuLi = document.getElementById('mainMenu')
        .querySelectorAll('li');

        // li se active ki sari class remove karo or sirf click per class active karo.
        function changeActive() {
            mainMenuLi.forEach(n => n.classList.remove('active'));

            this.classList.add('active');
        }

        mainMenuLi.forEach( n => n.addEventListener('click', changeActive))


    }, [])
  return (
    <menu>
        <img src={Logo} alt='logo' />

        <ul id='mainMenu'>
            <Icon icon={<FaDelicious />} />
            <Icon icon={<FaShoppingCart />} />
            <Icon icon={<FaWallet />} />
            <Icon icon={<FaChartLine />} />
            <Icon icon={<FaRegClock />} />
        </ul>

        <ul className='lastMenu'>
            <Icon icon={<FaCog />} />
            <Icon icon={<FaSignOutAlt />} />
        </ul>
    </menu>
  )
}

// Props Destructuring
const Icon = ({icon}) => (
    <li><a href='#'>{icon}</a></li>
);

// Props Normal
// const Icon = (props) => (
//     <li><a href='#'>{props.icon}</a></li>
// );

export default Menu