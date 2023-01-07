import React from "react";
import { Link, useHistory } from "react-router-dom";
import { AllRoutes } from "../../router/routes";

export const Home = (props) => {

    const history = useHistory();

    const handleOnClick = () => {
        history.push(AllRoutes.profile);
    }

    const goForward = () => {
        history.goForward();
    }

    const goBackward = () => {
        history.goBack();
    }

    const goToViewWithState = () => {
        history.push({
            pathname: AllRoutes.view,
            state: {
                id: 1,
                user_id: 2,
                name: "Kamesh",
                isMale: true,
            }
        })
    }

    return <div>
        <h1>Home</h1>
        <Link to={AllRoutes.profile}>Go to Profile</Link><br />
        <Link to={AllRoutes.profile + "/1/2"}>Go to Profile by Id</Link><br />
        <Link to={AllRoutes.profile + "?id=1&user_id=2&name=kamesh"}>Go to Profile with query params</Link><br />
        <button onClick={handleOnClick} >Go to Profiles</button>
        <button onClick={goForward} >Go to Forward</button>
        <button onClick={goBackward} >Go to Backward</button>
        <button onClick={goToViewWithState} >Go to View with state</button>
    </div>
}