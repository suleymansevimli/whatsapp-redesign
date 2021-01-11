import React from "react";
import PropTypes from 'prop-types'
import style from "./file-list-item.module.css";

const FileListItem = ({icon,name,size,createdAt}) => {
    return (
        <div className={style.fileRow}>
            <div className={style.icon}>
                {icon}
            </div>
            <div className={style.information}>
                <p className={style.fileName}>{name}</p>
                <p className={style.fileSize}>{size}</p>
            </div>
            <div className={style.createdAt}>
                <p>{createdAt}</p>
            </div>
        </div>
    )
}

export default FileListItem;

FileListItem.propTypes = {
    icon: PropTypes.node,
    name: PropTypes.string,
    size: PropTypes.string,
    createdAt: PropTypes.string
}
