import React from 'react'
import {withRouter} from "react-router-dom";

const dashboard = (props) => {
    function logout(){
        localStorage.clear();
        props.history.push('/auth/login');
    }
    return (
        <div>
            You are logged in!
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default withRouter(dashboard)
