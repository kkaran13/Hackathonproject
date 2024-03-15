import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8b12f067e0224c7fb5a35d62ba8ac3a6&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.image);
      })
      .catch(() => {
        console.log("error");
      });
  }, [meal.id]);

  return (
    <article className="art">
      <h1>{meal.title}</h1>
      <img src={imageUrl} alt="recipe" className="recipe"/>
      <ul className="instructions text-slate-400">
        <li>Preparation time: {meal.readyInMinutes} minutes</li>
        <li>Number of servings: {meal.servings}</li>
      </ul>

      <a href={meal.sourceUrl} className="url text-slate-400">Go to Recipe</a>
    </article>
  );
}
