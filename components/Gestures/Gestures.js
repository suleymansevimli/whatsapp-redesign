import React from "react";
import cn from 'classnames'
import style from './gestures.module.css'
import {Baloon, Dots, Pin} from "../icons";

const Gestures = ({}) => {

    return (
        <div className={style.container}>
            <div className={cn([style.tab,style.unread])}>
                <Baloon/>
                <p>Unread</p>
            </div>
            <div className={style.divider}/>

            <div className={cn([style.tab,style.pin])}>
                <Pin/>
                <p>Pin</p>
            </div>

            <div className={style.divider}/>
            <div className={cn([style.tab,style.more])}>
                <Dots/>
                <p>More</p>
            </div>
        </div>
    )
}

export default Gestures;