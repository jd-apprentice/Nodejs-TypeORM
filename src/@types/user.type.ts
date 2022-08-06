interface Experiences {
  company: string;
  title: string;
  from: Date;
  to: Date;
}

interface Education {
  school: string;
  degree: string;
  from: Date;
  to: Date;
}

interface Role {
  description: string;
}

export interface IUser {
  first_name: string;
  last_name: string;
  age: number;
  date_of_birth: Date;
  likes: string[];
  isActive: boolean;
}

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
