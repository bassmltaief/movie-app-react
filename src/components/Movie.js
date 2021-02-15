import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


import ReactStars from "react-rating-stars-component";
<link rel="stylesheet" href="node_modules/react-star-rating/dist/css/react-star-rating.min.css"></link>


const Movie = ({ listMovie, search, rating }) => {
    return (
        <div className="mov">
            {listMovie.filter(el=>el.Rate>=rating).filter(el => el.Title.toUpperCase().includes(search.toUpperCase())).map((el, index) => <Card key={index} style={{ width: '25rem' }} className="ca">
                <Card.Img className="imcard" variant="top" src={el.Poster} />
                <Card.Body className="carb">
                    <Card.Title>Title : {el.Title}</Card.Title>
                    <Card.Text>Year : {el.Year}</Card.Text>
                    <Card.Text>
                    <ReactStars classNames="stars"   count={5} 
                         value={el.Rate} size={24} activeColor="#ffd700" /></Card.Text>
                    <Card.Text>Type : {el.Type}</Card.Text>
                    <Link to={`/description/${el.title}`}><Button variant="primary" >Description</Button></Link>
                </Card.Body>
            </Card>)}
            
        </div>
    )
}

export default Movie
