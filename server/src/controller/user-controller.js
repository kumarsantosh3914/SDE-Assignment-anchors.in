const UserService = require("../services/user-service");

const userService = new UserService();

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({
        error: "Please provide username, email, and password",
      });
    }

    const response = await userService.signUp(username, email, password);
    return res.status(201).json({
      success: true,
      message: "Successfully created a new user",
      data: response,
      err: {},
    });
  } catch (error) {
    console.error("Unhandled error in signup:", error);
    return res.status(500).json({
      message: "Something went wrong at controller",
      data: {},
      success: false,
      err: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        error: "Please provide email and password",
      });
    }

    const response = await userService.signIn(email, password);
    return res.status(200).json({
      success: true,
      message: "Successfully signed in",
      data: response,
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      data: {},
      success: false,
      err: error,
    });
  }
};

module.exports = {
  signup,
  signin,
};
