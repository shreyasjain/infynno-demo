import React, { useEffect, useState } from 'react'
import Axios from "axios"
import { Form, FormControl, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import "../Styles/Body.scss"

function Body() {

    const [data,updateData] = useState("")

    useEffect(() => {
        console.log("useEffect")
        Axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=99b0bb23dafb09cbb79b85dfe1f81cee`)
            .then(res => {
                console.log(res.data.results)
                updateData(res.data.results)
            })
            .catch(err => console.log(err.message))
    }, [0])

    return (
        <div>
            <div className="body-search custom-container">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
            <div className="body-posters">
                {data!=""?
                (data.map(movie=>{
                    return(<div className="body-poster-pics">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
                </div>)
                }))
            :""}

            </div>
            <div className="custom-container">
                <div className="body-options">
                    <div>
                        <h5>Recommended For You:</h5>
                    </div>
                    <div>
                        <DropdownButton id="dropdown-basic-button" title="Popular">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="New">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton id="dropdown-basic-button" title="Trending">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <div className="body-movies">

                    {data!=""?
                    (data.map(movie=>{
                        return(
                            <div className="body-movie-poster">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                        <h6>{movie.title}</h6>
                        <p>{movie.popularity}</p>
                    </div>
                        )
                    }))
                    :""}
                </div>
            </div>
        </div>
    )
}

export default Body
