import React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom'
import { PrivateRoute } from "./components"
import { Login } from "./screens"
import { ProvideAuth } from "./store"


export const App = () => (
  <ChakraProvider theme={theme}>
    <ProvideAuth>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path="/dashboard" component={Login} />
        </Switch>
   </ProvideAuth>
  </ChakraProvider>
)
