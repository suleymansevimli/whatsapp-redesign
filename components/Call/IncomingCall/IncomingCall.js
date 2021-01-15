import React from "react";
import style from './incoming-call.module.css'
import Modal from "../../Modal/Default/Modal";
import SvgCallBordered from "../../icons/CallBordered";
import {Decline} from "../../icons";

const IncomingCall = ({open, afterOpen, children, close, image}) => {

    const Render = () => {
        if (children) {
            return children;
        }

        return (
            <div className={style.container}>
                <img className={style.background} src={"/img/fenerbahceli-cemil.jpg"} alt=""/>

                <img className={style.avatar} src={"/img/fenerbahceli-cemil.jpg"} alt=""/>

                <div className={style.actions}>
                    <div className={style.accept}>
                        <SvgCallBordered/>
                        <p>Accept</p>
                    </div>
                    <div className={style.decline}>
                        <Decline onClick={()=>close()}/>
                        <p>Decline</p>
                    </div>
                </div>

                <div className={style.close} onClick={()=>close()}>
                    <p> &times; </p>
                </div>

            </div>
        )

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