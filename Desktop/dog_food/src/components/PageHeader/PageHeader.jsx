import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const PageHeader = ({title, link, buttonText}) => {
    return (
        <>
            <Link to={link}>{buttonText}</Link>
            <div className="title">{title}</div>
        </>
    );
};

export default PageHeader;