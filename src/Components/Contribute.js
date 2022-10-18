import { useState } from "react";

function Contribute({ addArt }) {
  const [formData, setFormData] = useState({
    name: "",
    artist: "",
    image: "",
    year: "2022",
    style: "",
    description: ""
  })
  const [submitted, setSubmitted] = useState("")
  const [checkArt, setCheckArt] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/arts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(newArt => {
      console.log(newArt)
      setFormData({
        name: "",
        artist: "",
        image: "",
        year: "",
        style: "",
        description: ""
      })
      addArt(newArt)
      setSubmitted("Your art was submitted!")
      setCheckArt("To see your art in the collection, navigate to the Arts tab.")
    })  
  }
    
  return (
    <div className="form-style-8">
      <h2>Contribute to our Art Collection</h2>
      <h4>Fill in the form to submit your art</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Art name" value={formData.name} onChange={handleChange}/>
        <input type="text" name="artist" placeholder="Artist name" value={formData.artist} onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image" value={formData.image} onChange={handleChange}/>
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
        <input type="number" min={0} max={new Date().getFullYear()} name="year" placeholder="Year" value={formData.year} onChange={handleChange}/>
        <select value={formData.style} name="style" onChange={handleChange}>
          <option value="Pencil drawing">Pencil drawing</option>
          <option value="Ink drawing">Ink drawing</option>
          <option value="Pen drawing">Pen drawing</option>
          <option value="Chalk drawing">Chalk drawing</option>
          <option value="Crayon drawing">Crayon drawing</option>
          <option value="Digital drawing">Digital drawing</option>
          <option value="Charcoal drawing">Charcoal drawing</option>
        </select>
        <br></br>
        <button id="button" type="submit">Submit Art</button>
        <br></br>
        <p className="submitted">{submitted}</p>
        <p className="submitted">{checkArt}</p>
      </form>
    </div>
  );
}

export default Contribute;