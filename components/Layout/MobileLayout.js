import React from "react";
import PropTypes from 'prop-types';
import style from './mobile-layout.module.css'
import Header from "../Header/Header";
import TabBar from "../TabBar/TabBar";

const MobileLayout = ({header, headerTitle, children, footer, bgImage, headerIcon, backTitle,avatar, backAction}) => {
    return (
        <div className={style.container} style={bgImage && {"backgroundImage": `url(${bgImage})`}}>
            {header && <Header title={headerTitle} icon={headerIcon} backTitle={backTitle} avatar={avatar} backAction={()=>backAction()}/>}

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
    children: PropTypes.any,
    tabBar: PropTypes.node,
    bgImage: PropTypes.string,
}