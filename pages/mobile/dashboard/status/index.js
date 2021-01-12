import React from "react";
import style from '../../../../styles/mobile/dashboard/status/index.module.css'
import CameraTabBar from "../../../../components/Camera/CameraTabBar";
import {Cancel} from "../../../../components/icons";
import {useRouter} from "next/router";

const Status = () => {

    const router = useRouter()

    return (
        <div className={style.container}>
            <div className={style.camera}>
                <img src={"/img/take-photo.png"} alt=""/>
                <div className={style.cancel} onClick={()=>router.back()}>
                    <Cancel/>
                </div>
            </div>
            <div className={style.tabBar}>
                <CameraTabBar/>
            </div>
        </div>
    )
}

export default Status;