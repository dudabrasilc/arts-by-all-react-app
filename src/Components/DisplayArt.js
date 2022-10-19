import { useParams } from 'react-router-dom';

function DisplayArt({ arts }) {

  const params = useParams()
  
  const matched = arts.filter(art => {
    console.log(params)
    return params.artName === art.name
  })
  console.log(matched)
  let matchedObj = matched[0]
  console.log(matchedObj)

  if (!matchedObj) {
    return (
      <p>Loading...</p>
    )
  } else {
    return (
  <div className="card">
    <img src={matched[0].image} alt="image" />
    <h2>{matched[0].name}</h2>
    <p>By: {matched[0].artist}</p>
    <p>Drawing style: {matched[0].style}</p>
    <p>Year: {matched[0].year}</p>
    <p>Description: {matched[0].description}</p>
  </div>
    )
  }
}

export default DisplayArt;