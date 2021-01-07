import React from "react";
import style from './camera-tab-bar.module.css'
import {Reverse} from "../icons";

const CameraTabBar = () => {
    return (
        <div className={style.container}>
            <div className={style.lastImage}>
                <img src={"http://localhost:3000/img/photo.png"} alt="last taken photo"/>
            </div>

            <div className={style.takePhoto}>
                <div className={style.coverCircle}>
                    <div className={style.takeButton}/>
                </div>
            </div>

            <div className={style.reverseCamera}>
                <Reverse/>
            </div>

        </div>
    )
}

export default CameraTabBar;