import React from "react";
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../../store"

type RouteProps = {
    component: React.FunctionComponent,
    path: string
  }

const PrivateRoute: React.FunctionComponent<RouteProps> = ({component: Component, path,...rest}) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      path={path}
      render={({ location }) => auth.user !== ""
        ? <Component />
        : <Redirect to={{pathname: '/login', state: {from: location}}} />}
    />
  )
}

export default PrivateRoute;
