import React, { useState } from 'react'
import './style.css'
import { MainRoot } from './style'
import Navbar from '../Components/Navbar'

const Root = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <MainRoot toggle={toggle} >
            <Navbar toggle={toggle} setToggle={setToggle} />
        </MainRoot>
    )
}

export default Root