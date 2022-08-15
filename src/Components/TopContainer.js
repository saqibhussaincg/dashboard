import React, { useEffect } from 'react'
import {BiSearchAlt} from 'react-icons/bi';
import {FaBell, FaChevronDown} from 'react-icons/fa';
import Women from '../img/women.jpg'
const TopContainer = () => {

    useEffect(() => {
        const menuTarget = document.getElementById('menuChevron');
        const menuContainer = document.getElementById('menuContainer');

        //Jub mouseenter hoga tou en function trigger hoga.
        menuTarget.addEventListener('mouseenter', () => {
            menuContainer.style.transform = 'translateX(0px)';
            menuTarget.style.transform = 'rotate(180deg)';
            // console.log('Hello!')
        })



        menuTarget.addEventListener('mouseleave', () => {
            menuContainer.style.transform = 'translateX(300px)';
            menuTarget.style.transform = 'rotate(0deg)';
            // console.log('Bye Bye')
        })
    }, [])

  return (
    <div className='topContainer'>


        <div className='inputBox'>
            <input type='text' placeholder='Search item, collections' />
            <i><BiSearchAlt /></i>
        </div>


        <div className='profileContainer'>
            <i className='profileIcon'>
                <FaBell />
            </i>

            <div className='profileImage'>
                <img src={Women} alt='profile' />
            </div>

            <p className='profileName'>
                Olivia Christine
            </p>

            <i className='menuChevron' id='menuChevron'>
                <FaChevronDown />
            </i>

            <div className='menuContainer' id='menuContainer'>
                <ul>
                    <li>Web Design</li>
                    <li>UI / UX</li>
                    <li>Form Design</li>
                    <li>UI Design</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default TopContainer

