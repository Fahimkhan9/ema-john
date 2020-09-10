import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../App'
function PrivateRoute({children,...rest}) {
   const [loggedinUser,setLoggedinUser] = useContext(UserContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
         loggedinUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}

export default PrivateRoute
