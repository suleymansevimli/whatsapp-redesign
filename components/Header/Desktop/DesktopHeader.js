import React from "react";
import style from './desktop-header.module.css'
import PropTypes from 'prop-types'
import {Logo} from "../../icons";

const DesktopHeader = ({logo,appName,searchPlaceholder,userAvatar,userName}) => {
    return (
        <div className={style.container}>
            <div className={style.top}>
                <div className={style.logo}>
                    {logo ? logo : <Logo/>}
                    <span>{appName}</span>
                </div>
                <div className={style.search}>
                    <input placeholder={searchPlaceholder}/>
                </div>
                <div className={style.profile}>
                    <span>{userName}</span>
                    <img src={userAvatar} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default DesktopHeader;

DesktopHeader.propTypes = {
    logo : PropTypes.node,
    appName: PropTypes.string,
    searchPlaceholder: PropTypes.string,
    userName: PropTypes.string,
    userAvatar: PropTypes.string
}

DesktopHeader.defaultProps = {
    appName: "WhatsApp",
    searchPlaceholder: "Search Messages",
    userName: "User name",
    userAvatar: "http://localhost:3000/img/avatar.png"
}