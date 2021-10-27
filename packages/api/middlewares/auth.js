const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../constants/auth");

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.token.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, SECRET_KEY);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; // In Google: the sub's meaning the username
    }
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  auth,
};
