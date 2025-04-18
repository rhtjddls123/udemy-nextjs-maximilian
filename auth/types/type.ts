export interface TrainingType {
  id: number;
  title: string;
  image: string;
  description: string;
}

export interface SignupErrorsType {
  email?: string;
  password?: string;
}

export interface UserType {
  id: number;
  email: string;
  password: string;
}
