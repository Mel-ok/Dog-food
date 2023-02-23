import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/button";

const NotFound = ({title, link, buttonText}) => {
    return (
    <>
        {/* <i></i> */}
        <h2>{title}</h2>
        <Link to={link}>
            <Button text={buttonText} />
        </Link>
    </>
    );
};

export default NotFound;