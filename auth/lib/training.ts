import { TrainingType } from "@/types/type";
import db from "./db";

export function getTrainings() {
  const stmt = db.prepare("SELECT * FROM trainings").all() as TrainingType[];
  return stmt;
}
