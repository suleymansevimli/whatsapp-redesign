import React from "react";
import PropTypes from 'prop-types';
import style from './mobile-layout.module.css'
import Header from "../Header/Header";

const MobileLayout = ({header, headerTitle, children, footer, bgImage, headerIcon, backTitle,avatar, backAction,avatarClick}) => {
    return (
        <div className={style.container} style={bgImage && {"backgroundImage": `url(${bgImage})`}}>
            {header &&
                (<div className={style.header}>
                    <Header avatarClick={()=>avatarClick()} title={headerTitle} icon={headerIcon} backTitle={backTitle} avatar={avatar} backAction={()=>backAction()}/>
                </div>)
            }

            <div className={style.children}>
                {children}
            </div>

            {footer && <div className={style.tabBar}>
                {footer}
            </div>}
        </div>
    )
}

export default MobileLayout;

MobileLayout.propTypes = {
    header: PropTypes.bool,
    headerTitle: PropTypes.string,
    backAction: PropTypes.func,
    children: PropTypes.any,
    tabBar: PropTypes.any,
    bgImage: PropTypes.string,
}