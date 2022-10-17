import { Route, useRouteMatch, Switch } from "react-router-dom";
import ArtsList from "./ArtsList.js";
import DisplayArt from "./DisplayArt.js";

function ArtsPage({ arts }) {
  const match = useRouteMatch()
  console.log(match)

  return (
    <Switch>
      <Route exact path='/Arts'>
        <ArtsList arts={ arts } />
      </Route>
    </Switch>
  )


}