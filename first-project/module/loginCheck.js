const loginCheck = (req, res, next) => {
    const userLogin = false;
    if (userLogin) {
      next();
    } else {
      res.status(400).json({
        message: "login fail!!",
      })
    }
  }

  module.exports = loginCheck;