import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin user',
    email: 'admin@google.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@google.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Kevin Smith',
    email: 'kevin@google.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
