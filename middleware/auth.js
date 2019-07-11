const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  // Get Token from the header
  const token = req.header('x-auth-token');

  // Check Token
  if (!token) {
    return res.status(401).json({ msg: 'Sin token, autorización denegada.' });
  }

  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'El token no es valido.' })
  }
}