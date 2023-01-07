import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { PrivateRoute } from "./router/privateRoute";
import { AllRoutes } from "./router/routes";
import { Home } from "./screens/home";
import { Login } from "./screens/login";
import { Profile } from "./screens/profile";
import { ProfileById } from "./screens/profileById";
import { View } from "./screens/view";

const App = () => {
  return <BrowserRouter>
    <Switch>

      {/* Type 1 */}
      <Route exact path={"/"} component={Login} />

      {/* Type 2 */}
      <Route exact path={"/loginv2"} render={() => <Login />} />

      {/* Type 3 */}
      {/* Login Route */}
      <Route exact path={AllRoutes.login}>
        <Login />
      </Route>

      {/* Home Route */}
      <PrivateRoute exact path={AllRoutes.home}>
        <Home />
      </PrivateRoute>

      {/* Profile Route */}
      <PrivateRoute exact path={AllRoutes.profile}>
        <Profile />
      </PrivateRoute>

      {/* View Route */}
      <PrivateRoute exact path={AllRoutes.view}>
        <View />
      </PrivateRoute>

      {/* Profile By Id Route */}
      <PrivateRoute exact path={AllRoutes.profileById}>
        <ProfileById />
      </PrivateRoute>

      {/* Rediecting form /loginV2 to /login */}
      <Redirect from="/loginV2" to={AllRoutes.login} />

    </Switch>
  </BrowserRouter>
}

export default App;
