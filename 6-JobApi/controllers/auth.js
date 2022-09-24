const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError } = require('../errors');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  // const { name, email, password } = req.body;
  //this is optional we are using now moongose validator
  //   if (!name || !email || !password) {
  //     throw new BadRequestError('One of the missing name , email, password');
  //   }
  // create the middleware for hash in model User.js
  // const salt = await bcrypt.genSalt(10);
  // const hashPassword = await bcrypt.hash(password, salt);
  // const tempUser = { name, email, password: hashPassword };
  const user = await User.create({ ... req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login user');
};

module.exports = {
  register,
  login,
};
