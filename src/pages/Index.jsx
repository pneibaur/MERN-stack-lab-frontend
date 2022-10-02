import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Index = (props) => {
    // state to hold form data
    const [newForm, setNewForm] = useState({
        name: "",
        image: "",
        title: "",
    })
    // handleChange fn for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
    // handle submit for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createPeople(newForm)
        setNewForm({
            name: "",
            image: "",
            title: "",
        })
    }
    const loaded = () => {
        return props.people.map((person) => (
            <div key={person._id} className="person">
                <Link className='link' to={`/people/${person._id}`}>
                    <h1>{person.name}</h1>
                    <img src={person.image} alt={person.name} />
                </Link>
                <h3>{person.title}</h3>
                <hr />
            </div>
        ))
    }
    const loading = () => {
        return <h1>Loading...</h1>
    }
    return (
        <section>
            {/* the reason why we don't put the () at the end of handleSubmit is how React calls this function. 
            If the () is at the end, it will repeatedly call that function and it will break your code. 
            not including the () will tell JS and React that you want to call this fn ONLY on submit. */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={newForm.name} name="name" placeholder='name' onChange={handleChange} />
                <input type="text" value={newForm.image} name="image" placeholder='image URL' onChange={handleChange} />
                <input type="text" value={newForm.title} name="title" placeholder='title' onChange={handleChange} />
                <input className='submitBtn' type="submit" value="Create Person" />
            </form>
            <hr />
            <div className="charDisplay">
                {props.people ? loaded() : loading()}
            </div>
        </section>
    )
}

export default Index