import React from "react";
import PropTypes from 'prop-types';
import style from './user-information.module.css'
import {Pending, SingleTick, Status, Tick} from "../icons";

const UserInformation = ({message}) => {

    const RenderType = () => {
        if (message.type === "received") {
            return <p className={style.notify}>{message.unreadMessageCount} </p>
        }

        switch (message.status) {
            case "pending":
                return (
                    <p><Pending/></p>
                )
            case "notDelivered":
                return (
                    <p><SingleTick/></p>
                )
            case "delivered":
                return (
                    <p> <Tick/> </p>
                )
            case "read":
                return (
                    <p><Tick style={{color:"#1E98BE"}}/></p>
                )
        }
    }


    return (
        <div className={style.container}>
            <div className={style.information}>
                <div className={style.avatar}>
                    <img width={55} height={55} src={message.user.avatar} alt="user avatar"/>
                </div>
                <div className={style.content}>
                    <h4 className={style.name}>{message.user.name}</h4>
                    <p className={style.lastMessage}>{message.lastMessage}</p>
                </div>
            </div>
            <div className={style.otherInfo}>
                <p className={style.lastMessageTime}>{message.lastMessageTime}</p>
                <RenderType/>
            </div>

        </div>
    )
}

export default UserInformation;

UserInformation.propTypes = {
    message : PropTypes.object.isRequired
}

UserInformation.defaultProps = {
    message: {
        user : {
            avatar: "http://localhost:3000/img/avatar.png",
            name: "Joe Doe"
        },
        lastMessage: "Hey! Are you okey ?",
        unreadMessageCount: 2,
        lastMessageTime: "13:45",
        type: "received",
        status: "read"
    }
}