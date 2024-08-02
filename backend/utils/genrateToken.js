import jwt from 'jsonwebtoken';

const generateTokenAndCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: '15d',
  });
  

  res.cookie('jwt', token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, // Expiry time in milliseconds
    httpOnly: true, // The cookie is only accessible by the web server
    sameSite: 'Strict', // CSRF protection
    secure : process.env.NODE_ENV !== "development"
  });
};

export default generateTokenAndCookie;
