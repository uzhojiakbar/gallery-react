import React from 'react'
import { Links, Logo, Nav, Options } from './style'

import LogoImg from '../../Assets/logo/logo.jpg'

import { useNavigate, NavLink } from 'react-router-dom'
import { NavMock } from '../../Mock'

const Navbar = ({ toggle, setToggle }) => {
    const navigate = useNavigate();

    function handleClick(path) {
        navigate(path);
        // console.log(path, ' page ga kirldi!');
    }
    return (
        <Nav className='global'>
            <Logo >
                <img onClick={() => handleClick("/home")} src={LogoImg} alt="" />
            </Logo>
            <Links toggle={toggle}>
                {
                    NavMock.map((v) => {
                        return <NavLink className={({ isActive }) => isActive ? 'link active' : 'link'} to={v.path}>
                            {v.title}
                        </NavLink>
                    })
                }
            </Links>
            <Options>
                <div onClick={() => setToggle(!toggle)} className="mode">
                    {
                        toggle ?
                            <i class="fa-solid fa-moon"></i>
                            :
                            <i class="fa-solid fa-sun"></i>
                    }
                </div>
            </Options>
        </Nav>
    )
}

export default Navbar