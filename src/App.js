import React, { useState } from "react";
import Header from "./Comp/Header";
import Shop from "./Comp/Shop";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Review from "./Comp/Review";
import Manage from "./Comp/Manage";
import Error from "./Comp/Error";
import ProductDetail from "./ProductDetail";
import Shipment from "./Comp/Shipment";
import Login from "./Comp/Login";
import { createContext } from "react";
import PrivateRoute from "./Comp/PrivateRoute";
export const UserContext = createContext()
function App() {
  const [loggedinUser,setLoggedinUser]  = useState()
  console.log(loggedinUser);
  return (
    
      <UserContext.Provider value={[loggedinUser, setLoggedinUser]}>
<BrowserRouter>
  {loggedinUser}
      <Header />
        <Switch>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <PrivateRoute exact path="/shipment">
            <Shipment/>
          </PrivateRoute>
        
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute exact path="/manage">
            <Manage />
          </PrivateRoute>
          <Route exact path="/product/:productkey">
            <ProductDetail />
          </Route>
          <Route exact path="/">
            <Shop/>
          </Route>
          {/* <Route path="*">
            <Error />
          </Route> */}
          <Redirect to="/"    />
        </Switch>
      </BrowserRouter>
  
      </UserContext.Provider>
      
  );
}

export default App;
