import { useParams } from 'react-router-dom';

function DisplayArt({ arts }) {

  const params = useParams()
  console.log(params)

  console.log(arts)

}