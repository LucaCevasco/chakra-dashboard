import React from "react";
import { Route, Redirect } from "react-router-dom"

type RouteProps = {
    component: React.FunctionComponent,
    authed: boolean
  }

const PrivateRoute: React.FunctionComponent<RouteProps> = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={({ location }) => authed === true
          ? <Component />
          : <Redirect to={{pathname: '/login', state: {from: location}}} />}
      />
    )
}

export default PrivateRoute;
