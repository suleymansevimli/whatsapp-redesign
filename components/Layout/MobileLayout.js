import React from "react";
import PropTypes from 'prop-types';
import style from './mobile-layout.module.css'
import Header from "../Header/Header";
import TabBar from "../TabBar/TabBar";

const MobileLayout = ({header,headerTitle,children,tabBar,bgImage}) => {
    return (
        <div className={style.container} style={bgImage && {"backgroundImage":`url(${bgImage})`}}>
            {header && <Header title={headerTitle} />}

            <div>
                {children}
            </div>

            {tabBar && <TabBar/>}
        </div>
    )
}

export default MobileLayout;

MobileLayout.propTypes = {
    header: PropTypes.bool,
    headerTitle: PropTypes.string,
    children: PropTypes.any,
    tabBar: PropTypes.bool,
    bgImage: PropTypes.string,
}