import React, {useState} from "react";
import style from './incoming-call.module.css'
import Modal from "../../Modal/Default/Modal";
import SvgCallBordered from "../../icons/CallBordered";
import {Camera, Decline, Mute, VideoOff} from "../../icons";

const IncomingCall = ({open, afterOpen, children, close}) => {

    const [status, setStatus] = useState("income")


    const Render = () => {
        if (children) {
            return children;
        }

        switch (status) {
            default:
                return (
                    <div className={style.container}>
                        <img className={style.background} src={"/img/fenerbahceli-cemil.jpg"} alt=""/>

                        <img className={style.avatar} src={"/img/fenerbahceli-cemil.jpg"} alt=""/>

                        <div className={style.actions}>
                            <div className={style.accept}>
                                <SvgCallBordered onClick={() => setStatus("accepted")}/>
                                <p>Accept</p>
                            </div>
                            <div className={style.decline}>
                                <Decline onClick={() => close()}/>
                                <p>Decline</p>
                            </div>
                        </div>

                        <div className={style.close} onClick={() => close()}>
                            <p> &times; </p>
                        </div>

                    </div>
                )
            case "accepted" :
                return (
                    <div className={style.meetingContainer}>
                        <img className={style.me} src={"/img/online-call-man.png"} alt=""/>
                        <img className={style.you} src={"/img/online-call.png"} alt=""/>

                        <div className={style.meetingActions}>
                            <div className={style.callActions}>
                                <Mute/>
                                <Decline/>
                                <VideoOff/>
                            </div>
                        </div>

                        <div className={style.close} onClick={() => close()}>
                            <p>&times;</p>
                        </div>

                    </div>
                )
        }


    }


    return (
        <Modal
            open={open}
            closeModal={close}
            afterOpenModal={afterOpen}>
            <Render/>
        </Modal>
    )
}

export default IncomingCall;