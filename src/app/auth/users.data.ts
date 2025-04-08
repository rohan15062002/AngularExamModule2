import { type User } from '../app.model';

const users: User[] = [
  {
    id: '1',
    name: 'admin',
    email: 'admin@example.com',
    password: 'admin',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    password: 'password456',
    role: 'User',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    password: 'password789',
    role: 'User',
  },
  {
    id: '4',
    name: 'user',
    email: 'user@example.com',
    password: 'user',
    role: 'User',
  },
];

export default users;
