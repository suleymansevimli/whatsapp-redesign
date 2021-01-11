import React from "react";
import style from './header.module.css'
import PropTypes from 'prop-types'

const Header = ({title, icon, backTitle, avatar, backAction}) => {
    return (
        <div className={style.container}>
            <div className={style.icon} onClick={()=>backAction()}>
                {icon}
                <p>{backTitle}</p>
            </div>

            <div className={style.header}>
                <p>{title}</p>
            </div>

           <div className={style.avatar}>
               {avatar && <> <img src={avatar} alt=""/>
                <div className={style.dot}/> </> }
            </div>
        </div>
    )
}

export default Header;

Header.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.node,
    backTitle: PropTypes.string,
    avatar: PropTypes.string,
    backAction: PropTypes.func
}

Header.defaultProps = {
    title: ""
}

