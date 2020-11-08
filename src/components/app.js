import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddTravelPage from "../pages/add-travel-page";
import EditTravelPage from "../pages/edit-travel-page";
import TravelPage from "../pages/travel-page";
import NotFoundPage from "../pages/not-found-page";
import Nav from "./nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Switch>
        <Route path="/" exact>
          <TravelPage />
        </Route>

        <Route path="/add">
          <AddTravelPage />
        </Route>

        <Route path="/edit/:id">
          <EditTravelPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
