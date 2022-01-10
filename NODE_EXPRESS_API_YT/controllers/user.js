import { v4 as uuidv4 } from "uuid";
let users = [];

export const getUser = (req, res) => {
  res.send(users);
};

export const getUserByID = (req, res) => {
  const id = req.params.id;

  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUserByID = (req, res) => {
  const id = req.params.id;
  users = users.filter((user) => user.id != id);
  res.send(`User Deleted with id ${id}`);
};

export const createUser = (req, res) => {
  console.log(req.body);
  const user = req.body;
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.firstName} added to the database`);
};

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, age } = req.body;
  console.log(req.body);

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`user with id: ${id} is updated`);
};
