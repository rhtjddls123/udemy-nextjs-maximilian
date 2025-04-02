import { MealType } from "@/types/type";
import sql from "better-sqlite3";

const db = sql("meals.db");

export const getMeals = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.prepare("SELECT * FROM meals").all() as MealType[];
};

export const getMeal = (slug: string) => {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug) as MealType;
};
