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

export interface IUser {
  first_name: string;
  last_name: string;
  age: string;
  date_of_birth: Date;
  likes: string[];
  experiences: Experiences[];
  educations: Education[];
  role: UserRole;
}

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  USER = "user",
}
