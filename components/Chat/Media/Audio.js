import React from "react";
import style from './audio.module.css'
import {Pause, Player} from "../../icons";

const Audio = () => {

    return (
        <div className={style.container}>
            <div className={style.action}>
                <Pause/>
            </div>
            <div className={style.player}>
                <Player/>
            </div>
        </div>
    )
}

export default Audio;