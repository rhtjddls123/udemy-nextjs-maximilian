"use server";

import { MealType } from "@/types/type";
import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(_: { message: string }, formData: FormData) {
  const meal: MealType = {
    title: formData.get("title") as string,
    image: formData.get("image") as File,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    creator: formData.get("name") as string,
    creator_email: formData.get("email") as string,
    slug: ""
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return { message: "Invalid input." };
  }

  await saveMeal(meal);
  revalidatePath("/meals");
  redirect("/meals");
}
