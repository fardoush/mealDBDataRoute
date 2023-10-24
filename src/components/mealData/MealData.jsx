import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MealData = ({categorie}) => {
    const {idCategory,strCategoryThumb,strCategory,strCategoryDescription} = categorie;
    return (
     <Col className='col-3 mx-3'>
        <Card className=''>
      <Card.Img variant="top" src={strCategoryThumb}/>
      <Card.Body>
        <Card.Title>{strCategory}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">{strCategory}</Card.Subtitle> */}
        <Card.Text>{strCategoryDescription}</Card.Text>
        <Link to={`/mealData/${idCategory}`}><Button variant="primary">Go somewhere</Button> </Link>
        
      </Card.Body>
    </Card></Col>
    );
};

export default MealData;