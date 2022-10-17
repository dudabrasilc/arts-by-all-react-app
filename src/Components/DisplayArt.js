import { useParams } from 'react-router-dom';

function DisplayArt({ arts }) {

  const params = useParams()
  console.log(params)

  console.log(arts)
  
  const matched = arts.filter(art => {
    // console.log(art.id)
    // console.log(params.artId)
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
    </div>
  )
}