import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import Homepage from "../homepage/Hompepage";

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>

        <Route exact path="/companies">
          <CompanyList />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyDetail />
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default Routes;
