import { type User } from '../app.model';

const users: User[] = [
  {
    id: '1',
    name: 'admin',
    email: 'admin@admin.com',
    password: 'admin',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Rohan Mishra',
    email: 'rohan@gmail.com',
    password: 'password123',
    role: 'User',
  },
  {
    id: '3',
    name: 'Rahul',
    email: 'rahul@gmail.com',
    password: 'password123',
    role: 'User',
  },
  {
    id: '4',
    name: 'user',
    email: 'user@gmail.com',
    password: 'user',
    role: 'User',
  },
];

export default users;
