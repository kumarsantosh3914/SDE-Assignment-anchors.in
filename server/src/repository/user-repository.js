const User = require("../models/user");
const CrudRepository = require("./crud-repository");

class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async findBy(data) {
    try {
      const response = await User.findOne(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createUser(username, email, password) {
    try {
      const user = new User({
        username,
        email,
        password,
      });

      await user.save();
      return user;
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email) {
    try {
      return await User.findOne({ email });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserRepository;
