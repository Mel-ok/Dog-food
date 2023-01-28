import React from "react";
import './style.css';

const User = ({user}) => {
    return (
        <div className="user">
            <span className="name">{user?.name || 'Name'}</span>
            <span className="about">{user?.about || 'Profession'}</span>
        </div>
    );
};

export default User;