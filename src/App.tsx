import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { Switch, Route } from 'react-router-dom'
//import { PrivateRoute } from "./components"
import { Login } from "./screens"

export const App = () => (
  <ChakraProvider theme={theme}>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/login' component={Login}/>
        {
          //<PrivateRoute path="/dashboard" component={dashboard} />
        }
      </Switch>
  </ChakraProvider>
)
