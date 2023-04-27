import React from "react";

export default function recipetile({recipe})
{
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null &&
        (
        <div className="recipeTiles">
        <img className="recipetile__img" src={recipe["recipe"]["image"]}/>
        <p  className="recipetile__name">{recipe["recipe"]["label"]}</p>
        </div> 
        )       
    );
}