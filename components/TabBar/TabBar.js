import React, {useState} from "react";
import style from './tab-bar.module.css'
import {Baloon, Call, Settings, Status} from "../icons";
import {useRouter} from "next/router";

const TabBar = () => {

    const router = useRouter();

    const tabs = [
        {id: "status", route: "/mobile/dashboard/status", className: "default", icon: <Status/>},
        {id: "call", route: "/mobile/dashboard/call", className: "default", icon: <Call/>},
        {id: "message", route: "/mobile/dashboard/", className: style.active, icon: <Baloon/>},
        {id: "settings", route: "/mobile/dashboard/settings", className: "default", icon: <Settings/>}
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
            return <div onClick={() => router.push(e.route)} key={i} className={e.className}>
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