import { Link, useRouteMatch, Route, Switch } from 'react-router-dom';
import ArtCard from "./ArtCard";
import DisplayArt from "./DisplayArt";

function ArtsList({ arts }) {
  const match = useRouteMatch()
  // console.log(match)

  console.log(arts)

  
  const artsArray = arts.map(art => {
    return (
      <li key={art.id}>
        <Link to={`Arts/${art.name}`}>
          <ArtCard name={art.name} artist={art.artist} image= {art.image} material={art.material} style={art.style} year={art.year}/>
        </Link>
      </li>
    )
  })

}

