import React from 'react'
import { Route, Switch } from "react-router-dom"
import { useEffect, useState } from 'react'
import Index from '../pages/Index'
import Show from '../pages/Show'

const Main = (props) => {
    const [people, setPeople] = useState(null)
    const URL = "https://mern-stack-lab-1311.herokuapp.com/people/"

    const getPeople = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setPeople(data)
    }

    const createPeople = async (person) =>{
        await fetch  (URL, {
            method: "POST",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(person)
        })
        getPeople()
    }

    const updatePeople = async (person, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {"Content-Type": "Application/json"},
            body: JSON.stringify(person)
        })
        getPeople()
    }

    const deletePeople = async (id) => {
        await fetch(URL+id, {
            method: "DELETE"
        })
        getPeople()
    }

    useEffect(() => {
        getPeople()
    }, [])

    return (
        <main>
            <Switch>
                <Route exact path="/people">
                    <Index 
                    people={people} 
                    createPeople={createPeople} />
                </Route>
                {/* the "rp" stands for router props. we put this in the Route 
                because we are passing down built in functions
                that come with importing Route from React Router Dom.  */}
                <Route path="/people/:id" render={(rp) => (
                    <Show 
                    people={people} 
                    updatePeople={updatePeople} 
                    deletePeople={deletePeople} 
                    // right here, we are sending down a whole bunch of built in
                    // functions from "Route", such as the ".match" method.
                    // we aren't importing "Route" on the show page, so we pass it here. 
                    {...rp} />
                )} />
            </Switch>
        </main>
    )
}

export default Main