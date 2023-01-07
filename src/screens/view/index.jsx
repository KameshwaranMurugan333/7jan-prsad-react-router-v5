import React from "react";
import { useLocation } from "react-router-dom";

export const View = (props) => {

    const location = useLocation();

    return <div>
        <h1>View</h1>
        <p>id: {location?.state?.id ?? "Id not found"}</p>
        <p>user_id: {location?.state?.user_id}</p>
        <p>name: {location?.state?.name}</p>
        <p>isMale: {location?.state?.isMale.toString()}</p>
    </div>
}