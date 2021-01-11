import React from "react";
import style from '../../../../../styles/mobile/dashboard/chat/_tabs/media-tab.module.css'
import {DocFile} from "../../../../../components/icons";
import FileListItem from "../../../../../components/Chat/List/FileListItem";

const MediaTab = () => {
    return (
        <div className={style.container}>
            <div className={style.section}>
                <div className={style.date}>
                    <p>January 2021</p>
                </div>
                <div className={style.files}>
                    <FileListItem icon={<DocFile/>} size={"12.2M"} name={"Report 10.16"} createdAt={"Jan 7, 2020 at 13:32"}/>
                    <FileListItem icon={<DocFile/>} size={"12.2M"} name={"Report 10.16"} createdAt={"Jan 7, 2020 at 13:32"}/>
                    <FileListItem icon={<DocFile/>} size={"12.2M"} name={"Report 10.16"} createdAt={"Jan 7, 2020 at 13:32"}/>
                </div>
            </div>
        </div>
    )
}

export default MediaTab;