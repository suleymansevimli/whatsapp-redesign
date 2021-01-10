import React from "react";
import PropTypes from 'prop-types'
import cn from 'classnames'
import style from './message-card.module.css'
import {Pending, SingleTick, Tick} from "../../icons";
import Audio from "../Media/Audio";

const MessageCard = ({type, children, status, media}) => {


    const RenderMedia = () => {
        switch (media) {
            case "audio":
                return <Audio/>
        }
    }

    const RenderStatus = () => {
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
                    <p><Tick/></p>
                )
            case "read":
                return (
                    <p><Tick style={{color: "#1E98BE"}}/></p>
                )
        }
    }

    return (
        <div className={cn([style.container, style[type]])}>
            <div className={style.children}>
                {media ? <RenderMedia/> : children}
            </div>
            <div className={style.information}>
                <div className={style.time}>13:45</div>
                {type === "sent" && <div className={style.status}>
                    <RenderStatus/>
                </div>}
            </div>
        </div>
    )
}

export default MessageCard;

MessageCard.propTypes = {
    type: PropTypes.oneOf(["received", "sent"]),
    children: PropTypes.node.isRequired,
    status: PropTypes.oneOf([""])
}