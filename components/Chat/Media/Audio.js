import React, {useRef, useState} from "react";
import style from './audio.module.css'
import {Pause, Play, Player, PlayerTransparent} from "../../icons";

const Audio = () => {

    const [play, setPlay] = useState(true);
    const [time,setTime] = useState(0);

    const player = useRef()

    const playSong = () => {
        const music = player.current;
        music.addEventListener("timeupdate", timeUpdate, false)
        music.play();
    }

    const pauseSong = () => {
        const music = player.current;
        music.pause();
    }

    const timeUpdate = () => {
        if (player.current.currentTime) {
            console.log("curtime", parseInt(player.current.currentTime,10))
            console.log("duration", (player.current.currentTime/player.current.duration))
            setTime(parseInt(player.current.currentTime,10))

        }
    }


    return (
        <div className={style.container}>
            <div className={style.action} onClick={() => setPlay(!play)}>
                {play ? <Play onClick={() => playSong()}/> : <Pause onClick={() => pauseSong()}/>}
            </div>
            <div className={style.player}>
                <audio ref={player} src={"/audio/audio.mp3"}/>
                <PlayerTransparent/>
                <div style={
                    {width:`${(time)}px`,
                        maxWidth: "200px",
                        background:"var(--white)",
                        height:"45px",
                        position:"absolute",
                        left:"0"
                    }}/>
            </div>
        </div>
    )
}

export default Audio;