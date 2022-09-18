const jwt = require('jsonwebtoken');
const CustomAPIError = require('../errors/custom-error');

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new CustomAPIError(`username or password not empty`, 400);
  }

  //just for demo, normally provided by DB!!!!
  const id = new Date().getDate();
  // try to keep payload small, better experience for user
  // just for demo, in production use long, complex and unguessable string value!!!!!!!!!
  console.log(id, process.env.JWT_SECRET);
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new CustomAPIError(`No token provided`, 401);
  }
  const token = authHeader.split(' ')[1];
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${decoded.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
  } catch (error) {
    throw new CustomAPIError(`No authorized to access this route`, 401);
  }
};

module.exports = {
  login,
  dashboard,
};
