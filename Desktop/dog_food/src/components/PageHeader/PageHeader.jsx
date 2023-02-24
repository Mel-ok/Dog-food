import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const PageHeader = ({title, link, buttonText}) => {
    return (
        <>
            <Link to={link}>
                <h3>{buttonText}</h3>
            </Link>
            <div className="title">{title}</div>
        </>
    );
};

export default PageHeader;