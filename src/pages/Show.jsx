import React, { useState } from 'react'

const Show = (props) => {
  // the .match method has an object called "params", that we can pull the id from. 
  const id = props.match.params.id
  const people = props.people
  const person = people.find((p) => p._id === id)

  // setting state as the person that we've found from the props
  const [editForm, setEditForm ] = useState(person)

  const handleEdit = (event) => {
    return (
      setEditForm({...editForm, [event.target.name]: event.target.value})
    )
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    props.updatePeople(editForm, person._id)
    // this .history method is being passed down from the "rp" from the Route (similar to .match)
    // this mimicks the browser back button!
    props.history.push("/")
  }

  const removePerson = () => {
    props.deletePeople(person._id)
    props.history.push("/")
  }

  return (
    <div className="person">
      <h1>{person.name} </h1>
      <h2>{person.title}</h2>
      <img src={person.image} alt={person.name} />
      <button className='submitBtn' id='delete' onClick={removePerson}>DELETE</button>
      <form onSubmit={handleSubmit} >
        <input type="text" name="name" placeholder='name' value={editForm.name} onChange={handleEdit} />
        <input type="text" name='image' placeholder='image URL' value={editForm.image} onChange={handleEdit} />
        <input type="text" name='title' placeholder='title' value={editForm.title} onChange={handleEdit} />
        <input className='submitBtn' type="submit" value="Update Person" />
      </form>
    </div>  
  )
}

export default Show