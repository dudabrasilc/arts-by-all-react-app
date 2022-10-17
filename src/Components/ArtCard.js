
function ArtCard({ name, image }) { 
  return (
    <div className="card">
      <img className="art-img" src={image} alt={"art name"} />
      <h3 className="art-name">"{name}"</h3>
    </div>
  )
}
  
export default ArtCard;