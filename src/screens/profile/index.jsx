import React from "react";
import { useLocation } from "react-router-dom";

export const Profile = (props) => {

    const location = useLocation();
    let queryParams = new URLSearchParams(location.search);

    return <div>
        <h1>Profile</h1>
        <p>id:{queryParams.get("id")}</p>
        <p>user_id:{queryParams.get("user_id")}</p>
        <p>name:{queryParams.get("name")}</p>
    </div>
}