import React, {useState} from "react";
import PropTypes from 'prop-types';
import style from './user-information.module.css'
import {Pending, SingleTick, Status, Tick} from "../icons";
import {SwipeableListItem} from "@sandstreamdev/react-swipeable-list";
import Gestures from "../Gestures/Gestures";

const UserInformation = ({user, lastMessage, unreadMessageCount, lastMessageTime, type, status, onClick}) => {

    const RenderType = () => {
        if (type === "received") {
            return <p className={style.notify}>{unreadMessageCount} </p>
        }

        switch (status) {
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

    const [swipeProgress, handleSwipeProgress] = useState();
    const [swipeAction, handleSwipeAction] = useState('None');

    const swipeLeftOptions = () => ({
        content: <Gestures/>,
        action: () => handleSwipeProgress(swipeProgress)
    });

    const handleSwipeStart = () => {
        // console.log('Swipe started');
    };

    const handleSwipeEnd = () => {
        // console.log('Swipe ended');
    };


    return (
        // <SwipeableListItem
        //     swipeLeft={swipeLeftOptions()}
        //     onSwipeEnd={handleSwipeEnd}
        //     onSwipeProgress={handleSwipeProgress}
        //     onSwipeStart={handleSwipeStart}>

            <div className={style.container} onClick={()=>onClick()}>
                <div className={style.information}>
                    <div className={style.avatar}>
                        <img width={55} height={55} src={user.avatar} alt="user avatar"/>
                    </div>
                    <div className={style.content}>
                        <h4 className={style.name}>{user.name}</h4>
                        <p className={style.lastMessage}>{lastMessage}</p>
                    </div>
                </div>
                <div className={style.otherInfo}>
                    <p className={style.lastMessageTime}>{lastMessageTime}</p>
                    <RenderType/>
                </div>

            </div>


    )
}

export default UserInformation;

UserInformation.propTypes = {
    user:PropTypes.object.isRequired,
    lastMessage:PropTypes.string.isRequired,
    unreadMessageCount:PropTypes.number,
    lastMessageTime:PropTypes.string.isRequired,
    type:PropTypes.oneOf(["sent","received"]),
    status:PropTypes.oneOf(["pending","read","delivered","notDelivered"]),
    onClick: PropTypes.func.isRequired
}
