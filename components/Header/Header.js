import React from "react";
import style from './header.module.css'
import PropTypes from 'prop-types'
import {Camera} from "../icons";

const Header = ({title}) => {
    return (
        <div className={style.container}>
            <Camera/>
            <p className={style.header}>{title}</p>
        </div>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired
}

Header.defaultProps = {
    title: "Call"
}

