import React from "react";
import style from '../../../../styles/mobile/dashboard/chat/friend-profile.module.css'
import {
    BackArrow, Bell,
    CallBordered,
    Image,
    Message,
    NextArrow,
    Search,
    Starred,
    Video
} from "../../../../components/icons";
import {useRouter} from "next/router";

const FriendProfile = () => {

    const router = useRouter()

    return (
        <div className={style.container}>
            <div className={style.profile}>
                <img src={"/img/kennedy.jpg"} alt=""/>

                <span onClick={()=>router.push("/mobile/dashboard/chat/1")} >
                    <BackArrow/> Message
                </span>
            </div>

            <div className={style.information}>
                <div className={style.card}>
                    <div className={style.infoCard}>
                        <div className={style.nameAndNumber}>
                            <p className={style.name}>Rahmetli Başkan Kennedy</p>
                            <p className={style.number}>+23437482947</p>
                        </div>
                        <div className={style.actions}>
                            <Message/>
                            <Video/>
                            <CallBordered/>
                        </div>
                    </div>

                    <div className={style.statusCard}>
                        <div className={style.header}>
                            <p>Status</p>
                        </div>
                        <div className={style.content}>
                            Magical: you leave one person, and you return completely different
                        </div>
                    </div>

                    <div className={style.messageItemsCard}>
                        <div className={style.listItem} onClick={()=>router.push("/mobile/dashboard/chat/chat-information")}>
                            <div className={style.listTitle}>
                                <Image/>
                                <span>Media, Links, and Docs</span>
                            </div>
                            <div className={style.listArrow}>
                                <span>190</span>
                                <NextArrow/>
                            </div>
                        </div>
                        <div className={style.listItem}>
                            <div className={style.listTitle}>
                                <Starred/>
                                <span>Starred Messages</span>
                            </div>
                            <div className={style.listArrow}>
                                <span>2</span>
                                <NextArrow/>
                            </div>
                        </div>
                        <div className={style.listItem}>
                            <div className={style.listTitle}>
                                <Search style={{background:"var(--green)",borderRadius:"50%",color:"var(--white)",padding:"10px"}}/>
                                <span>Chat Search</span>
                            </div>
                            <div className={style.listArrow}>
                                <span/>
                                <NextArrow/>
                            </div>
                        </div>

                        <div className={style.listItem}>
                            <div className={style.listTitle}>
                                <Bell/>
                                <span>Mute</span>
                            </div>
                            <div className={style.listArrow}>
                                <span>No</span>
                                <NextArrow/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendProfile;