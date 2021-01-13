import React from "react";
import MessageHeaderComp from "../../components/Header/Message/MessageHeader";

export default {
    title: "Components/MessageHeader",
    component: MessageHeaderComp
}

export const MessageHeader = (args) => {
    return <MessageHeaderComp {...args}/>
}
