import React from "react";
import PropTypes from 'prop-types'
import style from './message-header.module.css'
import {Call, VerticalDotMenu} from "../../icons";

const MessageHeader = ({avatar,name,status}) => {
    return (
        <div className={style.container}>
            <div className={style.grid}/>
            <div className={style.user}>
                <div className={style.avatar}>
                    <img src={avatar} alt={name}/>
                </div>
                <div className={style.information}>
                    <span className={style.name}>{name}</span>
                    <span className={style.status}>{status}</span>
                </div>
            </div>
            <div className={style.actions}>
                <Call/>
                <VerticalDotMenu/>
            </div>
        </div>
    )
}

export default MessageHeader;

MessageHeader.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string
}

MessageHeader.defaultProps = {
    avatar: "http://localhost:3000/img/kennedy.jpg",
    name: "Rahmetli Başkan Kennedy",
    status: "online"
}