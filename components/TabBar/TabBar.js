import React, {useState} from "react";
import style from './tab-bar.module.css'
import {Baloon, Call, Settings, Status} from "../icons";

const TabBar = () => {

    const tabs = [
        {id: "status", route: "/status", className: "default", icon: <Status/>},
        {id: "call", route: "/call", className: "default", icon: <Call/>},
        {id: "message", route: "/message", className: style.active, icon: <Baloon/>},
        {id: "settings", route: "/settings", className: "default", icon: <Settings/>}
    ]

    const [tab, setTabs] = useState(tabs)

    const changeTab = (id) => {
        let setTab = tabs.map(e => {
            if (e.id === id) {
                e.className = style.active;
            } else {
                e.className = "default"
            }
            return e;
        })

        setTabs(setTab);
    }

    const RenderTab = () => {
        return tab.map((e, i) => {
            return <div onClick={() => changeTab(e.id)} key={i} className={e.className}>
                {e.icon}
            </div>
        })
    }


    return (
        <div className={style.container}>
            <RenderTab/>
        </div>
    )
}

export default TabBar;