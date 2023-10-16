const { authService } = require('../services');

const logingUser = async (req, res) => {
  try {
    const token = await authService.logingUser(req.body.user, req.body.pass);
    res.json( token );
  } catch (err) {
    res.status(401).json({
      error: 'Invalid User',
    });
  }
};

module.exports = { logingUser };
