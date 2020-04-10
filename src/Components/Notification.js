import React from 'react';
import { Link } from 'react-router-dom';

function Notification(props) {
    return (
        <div className="notification">
            <div className="notification__box">
                <p>More information about this book is not avaliable. Back to <Link to="/"> <span>Home page</span> </Link> </p> 
            </div>
        </div>
    );
}

export default Notification;