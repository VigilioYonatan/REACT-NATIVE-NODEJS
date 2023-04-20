export interface UserIndexAPI {
  success: boolean;
  data: User[];
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  edad: number;
  createdAt: string;
  updatedAt: string;
}

// GET: show by ID

export interface UserShowAPI {
  success: boolean;
  user: User;
}

export interface User {
  id: number;
  nombre: string;
  email: string;
  password: string;
  edad: number;
  createdAt: string;
  updatedAt: string;
}
