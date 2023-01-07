import React from "react";
import { useParams } from "react-router-dom";

export const ProfileById = (props) => {

    const urlParams = useParams();

    return <div>
        <h1>ProfileById</h1>
        <p>id:{urlParams.id}</p>
        <p>user_id:{urlParams.user_id}</p>
    </div>
}