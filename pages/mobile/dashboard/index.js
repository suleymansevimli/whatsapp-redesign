import React, {useState} from "react";
import style from '../../../styles/mobile/dashboard/index.module.css'
import MobileLayout from "../../../components/Layout/MobileLayout";
import UserInformation from "../../../components/UserInformation/UserInformation";
import {
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import Gestures from "../../../components/Gestures/Gestures";

const Dashboard = () => {

    const users = [
        {avatar: "/img/avatar.png", name: "Nadia Comaneci"},
        {avatar: "/img/fenerbahceli-cemil.jpg", name: "Fenerbahçeli Cemil"},
        {avatar: "/img/brigitt-bardot.jpg", name: "Brigitte Bardot"},
        {avatar: "/img/kaleci-mayer.jpg", name: "Kaleci Mayer"},
        {avatar: "/img/kennedy.jpg", name: "Rahmetli Başkan Kennedy"},
    ]

    const [swipeProgress, handleSwipeProgress] = useState();
    const [swipeAction, handleSwipeAction] = useState('None');

    const swipeLeftOptions = () => ({
        content: <Gestures/>,
        action: () => handleSwipeProgress(swipeProgress)
    });

    const handleSwipeStart = () => {
        // console.log('Swipe started');
    };

    const handleSwipeEnd = () => {
        // console.log('Swipe ended');
    };

    return (
        <MobileLayout header headerTitle={"Messages"} tabBar>
            <div className={style.container}>
                <SwipeableList>
                    <SwipeableListItem
                        swipeLeft={swipeLeftOptions()}
                        onSwipeEnd={handleSwipeEnd}
                        onSwipeProgress={handleSwipeProgress}
                        onSwipeStart={handleSwipeStart}>
                        <UserInformation type={"received"} user={users[0]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Hello :)"}/>
                    </SwipeableListItem>

                    <SwipeableListItem
                        swipeLeft={swipeLeftOptions()}
                        onSwipeEnd={handleSwipeEnd}
                        onSwipeProgress={handleSwipeProgress}
                        onSwipeStart={handleSwipeStart}>
                        <UserInformation type={"sent"} user={users[1]} lastMessageTime={"13:45"} status={"read"} lastMessage={"Halı saha maçı kaçtaydı ?"}/>
                    </SwipeableListItem>

                    <SwipeableListItem
                        swipeLeft={swipeLeftOptions()}
                        onSwipeEnd={handleSwipeEnd}
                        onSwipeProgress={handleSwipeProgress}
                        onSwipeStart={handleSwipeStart}>
                        <UserInformation type={"received"} user={users[2]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Hi :) What are you doing now?"}/>
                    </SwipeableListItem>

                    <SwipeableListItem
                        swipeLeft={swipeLeftOptions()}
                        onSwipeEnd={handleSwipeEnd}
                        onSwipeProgress={handleSwipeProgress}
                        onSwipeStart={handleSwipeStart}>
                        <UserInformation type={"received"} user={users[3]} unreadMessageCount={1} lastMessageTime={"13:45"} lastMessage={"Benim ayağım sakat gelemiyorum."}/>
                    </SwipeableListItem>


                    <SwipeableListItem
                        swipeLeft={swipeLeftOptions()}
                        onSwipeEnd={handleSwipeEnd}
                        onSwipeProgress={handleSwipeProgress}
                        onSwipeStart={handleSwipeStart}>
                        <UserInformation type={"sent"} status={"pending"} user={users[4]} lastMessageTime={"13:45"} lastMessage={"Başkanım önemli bir durum var !"}/>
                    </SwipeableListItem>
                </SwipeableList>
            </div>
        </MobileLayout>
    )
}

export default Dashboard;