import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const MealDataDetails = () => {
    const mealDetails = useLoaderData();
    console.log(mealDetails.categories);
    // const mealdata = mealDetails.categories;
    // const {strCategory,strCategoryDescription} = mealDetails;


    return (
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* <Card.Title>{mealdata.strCategory}</Card.Title> */}
        {/* <Card.Text>
        {categorie.strCategoryDescription}
        </Card.Text> */}
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    );
};

export default MealDataDetails;