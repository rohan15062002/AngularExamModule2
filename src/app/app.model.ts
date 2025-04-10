export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'Admin' | 'User';
  }

export interface Customer {
  id: string;
  name: string;
  email: string;
  phoneNumber: number;
  address: string;
  addedByUser: string | null;
}
  