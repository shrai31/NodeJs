const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  // const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', {
  //   expiresIn: '30d',
  // });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  // any one is empty
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError('email or password are not be empty');
  }

  // compare user
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError('email is incorrect');
  }

  // compare password
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('password is incorrect');
  }

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });
};

module.exports = {
  register,
  login,
};
