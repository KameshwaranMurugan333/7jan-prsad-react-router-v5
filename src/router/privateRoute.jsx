import React from "react";
import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({children, ...rest}) => {

    const isIamLoggedIn = () => {
        if (localStorage.getItem("auth_token")) {
            return true;
        } else {
            return false;
        }
    }

    return <Route
        {...rest}
        render={() =>{
            if(isIamLoggedIn()){
                return children
            }else{
                return <Redirect to="/login" />
            }
        }}
    />
}