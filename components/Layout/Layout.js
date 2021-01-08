import React from "react";
import useWindowSize from "../../hooks/useWindowsSize";
import MobileLayout from "./MobileLayout";

const Layout = (props) => {

    let {width} = useWindowSize();

    const LayoutGrid = ({header,headerTitle,children,footer}) => {
        return (
            <div>
                {header && <div>{headerTitle}</div>}
                <div>
                    {children}
                </div>
                {footer && <div>Footer</div>}
            </div>
        )
    }

    const Render = () => {
        return width > 768
            ? <LayoutGrid {...props}/>
            : <MobileLayout {...props}/>
    }

    return (
        <Render {...props}/>
    );

}

export default Layout;