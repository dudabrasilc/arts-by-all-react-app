import { Route, useRouteMatch, Switch } from "react-router-dom";
import React from 'react';
import ArtsList from "./ArtsList.js";
import DisplayArt from "./DisplayArt.js";

function ArtsPage({ arts }) {
  const match = useRouteMatch()

  return (
    <Switch>
      <Route exact path='/Arts'>
        <ArtsList arts={ arts } />
      </Route>
      <Route exact path={`${match.url}/:artName`}>
        <DisplayArt arts={ arts } />
      </Route>
    </Switch>
  )
}

export default ArtsPage;
