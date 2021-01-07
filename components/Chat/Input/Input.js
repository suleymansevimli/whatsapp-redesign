import React from "react";
import style from './input.module.css'
import {Attach, Emoji, Microphone} from "../../icons";

const Input = () => {
    return (
        <div className={style.container}>
            <div className={style.attach}>
                <Attach/>
            </div>

            <div className={style.inputContainer}>
                <input type="text" placeholder={"Message"}/>
                <Emoji/>
            </div>

            <div className={style.mic}>
                <Microphone/>
            </div>
        </div>
    )
}

export default Input;
