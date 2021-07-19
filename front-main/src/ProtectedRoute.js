import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({isAuth: isAuth, component: Component, ...rest}) => {
    return (
        <Route {...rest}
            render={(props) => {
                const user_key = localStorage.getItem("USER_KEY");
                console.log(user_key)
                if(user_key != null){
                    return <Component/>
                } else {
                    return <Redirect to={{pathname : "/auth/login", state: { from: props.location}}}/>
                }
            }}
        />
    )
}

export default ProtectedRoute
