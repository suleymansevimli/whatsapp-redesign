import React, {useState} from "react";
import cn from 'classnames'
import styles from "../../../../styles/mobile/dashboard/chat/chat-information.module.css"
import MobileLayout from "../../../../components/Layout/MobileLayout";
import {BackArrow, Search} from "../../../../components/icons";
import MediaTab from "./_tabs/_media";

const ChatInformation = () => {

    const [activeTab,setActiveTab] = useState("media")

    const [tabs, setTabs] = useState([
        {name: "Media", style: "active", render: <MediaTab/>, key: "media"},
        {name: "Files", style: "default", render: "files", key: "files"},
        {name: "Audio", style: "default", render: "auido", key: "audio"},
        {name: "Links", style: "default", render: "links", key: "links"},
    ])


    const RenderTab = ({tabList}) => {
        return tabList.map((e, i) => {
            return <Tab name={e.name} style={e.style} keys={e.key}/>
        })
    }

    const Tab = ({name, style, keys}) => {
        return (
            <span onClick={() => changeTab(keys)} className={cn([styles.tab, styles[style]])}>{name}</span>
        )
    }

    const changeTab = (key) => {
        setActiveTab(key);
        let tabList = tabs.map((e, i) => {
            if (key === e.key) {
                e.style = "active"
            } else {
                e.style = "default"
            }
            return e;
        })

        setTabs(tabList)
    }

    const RenderContent = () => {
        let render = tabs.filter( (e)=> {
            if (e.key === activeTab) {
                return e
            }
        })

        return render[0].render;
    }

    return (
        <MobileLayout
            header={true}
            headerTitle={"Rahmetli Başkan Kennedy"}
            headerIcon={<BackArrow/>}
            avatar={"/img/kennedy.jpg"}>
            <div className={styles.container}>
                <div className={styles.tabContainer}>
                    <RenderTab tabList={tabs}/>
                </div>
                <div className={styles.search}>
                    <input placeholder={"Search in "+activeTab}/>
                    <Search/>
                </div>
                <div>
                    <RenderContent/>
                </div>

            </div>
        </MobileLayout>
    )
}

export default ChatInformation;