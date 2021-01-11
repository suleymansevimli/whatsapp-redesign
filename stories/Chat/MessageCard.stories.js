import React from 'react';
import MessageCardComp from "../../components/Chat/Card/MessageCard";

export default {
    title: "Components/MessageCard",
    component: MessageCardComp
}


export const Received = (args) => {
    return <MessageCardComp {...args}/>
}

Received.args = {
    children: "Hi :)",
    type: "received"
}

export const Sent = (args) => {
    return <MessageCardComp {...args}/>
}

Sent.args = {
    children: "Hello :)",
    type: "sent",
    status: "delivered"
}


export const Audio = (args) => {
    return <MessageCardComp {...args} />
}

Audio.args = {
    type: "sent",
    status: "delivered",
    media: "audio",
    src: "http://localhost:3000/audio/audio.mp3"
}


export const File = (args) => {
    return <MessageCardComp {...args} />
}

File.args = {
    type: "sent",
    status: "notDelivered",
    fileName: "Report.docx",
    media: "file"
}


