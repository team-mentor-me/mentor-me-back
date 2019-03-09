module.exports = {
  generateToken
};

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
