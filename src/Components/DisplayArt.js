import { useParams } from 'react-router-dom';

function DisplayArt({ arts }) {

  const params = useParams()
  console.log(params)

  console.log(arts)
  
  const matched = arts.filter(art => {
    return params.artName === art.name
  })
  console.log(matched)
  let matchedObj = matched[0]
  console.log(matchedObj)

  return (
    <div className="card">
      <img src={matchedObj.image} alt="image" />
      <h2>{matchedObj.name}</h2>
      <p>By: {matchedObj.artist}</p>
      <p>Drawing style: {matchedObj.style}</p>
      <p>Year: {matchedObj.year}</p> 
    </div>
  )
}

export default DisplayArt;