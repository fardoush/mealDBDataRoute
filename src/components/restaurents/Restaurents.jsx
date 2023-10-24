import React from "react";
import { useLoaderData } from "react-router-dom";
import MealData from "../mealData/MealData";

const Restaurents = () => {
  const categoriess = useLoaderData();
  // console.log(mealsdata.categories);
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center m-4 flex-wrap">
        {categoriess.categories.map((categorie) => (
          <MealData key={categorie.idCategory} categorie={categorie}></MealData>
        ))}
      </div>
puio
      {/* </Col>
        
      </Row> */}
    </div>
  );
};

export default Restaurents;
