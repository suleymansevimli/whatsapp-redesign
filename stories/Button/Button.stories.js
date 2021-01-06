import React from "react";
import ButtonComp from "../../components/Button/Button";

export default {
    title: "Components/Button",
    component: ButtonComp
}

export const Button = (args) => {
    return <ButtonComp {...args}/>
}

Button.args = {
    children: "Test",
    disable: false
}

export const DisableButton = (args) => {
    return <ButtonComp {...args}/>
}

DisableButton.args = {
    children: "Disabled",
    disable: true
}



