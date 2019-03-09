module.exports = {
  generateToken
};

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

// generate token
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
    // additional information here
  };
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret, options);
}
