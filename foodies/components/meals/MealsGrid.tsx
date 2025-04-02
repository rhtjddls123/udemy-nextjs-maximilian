import { MealType } from "@/types/type";
import classes from "./MealsGrid.module.css";
import React from "react";
import MealItem from "./MealItem";

interface MealsGridProps {
  meals: MealType[];
}

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
