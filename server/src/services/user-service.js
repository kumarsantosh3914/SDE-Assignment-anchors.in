// const UserRepository = require("../repository/user-repository");
// const User = require("../models/user");

// class UserService {
//   constructor() {
//     this.userRepository = new UserRepository();
//   }

//   async signup(data) {
//     try {
//       const user = await this.userRepository.create(data);
//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async signUp(username, email, password) {
//     try {
//       const existUser = await this.userRepository.findUserByEmail(email);
//       if (existUser) {
//         return {
//           error: "Email is already taken",
//         };
//       }

//       const user = await User.create({
//         username: username.username,
//         email: email.email,
//         password: password.password,
//       });

//       console.log("username " + username);
//       return { ...user._doc, otp: this.generateOTP() };
//     } catch (error) {
//       throw error;
//     }
//   }

//   async getUserByEmail(email) {
//     try {
//       const user = await this.userRepository.findBy({ email });
//       return user;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async signin(data) {
//     try {
//       const user = await this.getUserByEmail(data.email);
//       if (!user) {
//         throw {
//           message: "No user found",
//           success: false,
//         };
//       }
//       if (!user.comparePassword(data.password)) {
//         throw {
//           message: "incorrect password",
//           success: false,
//         };
//       }
//       const token = user.genJWT();
//       return token;
//     } catch (error) {
//       throw error;
//     }
//   }

//   async signIn(email, password) {
//     try {
//       const user = await this.userRepository.findUserByEmail(email);
//       if (!user) {
//         return {
//           error: "User not found",
//         };
//       }

//       if (password == user.password) {
//         return user;
//       } else {
//         return {
//           error: "Password incorrect",
//         };
//       }
//     } catch (error) {
//       throw error;
//     }
//   }

//   generateOTP() {
//     const otp = Math.floor(10000 + Math.random() * 90000).toString();
//     return otp;
//   }
// }

// module.exports = UserService;

const UserRepository = require("../repository/user-repository");
const User = require("../models/user");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signUp(username, email, password) {
    try {
      const existUser = await this.userRepository.findUserByEmail(email);
      if (existUser) {
        return {
          error: "Email is already taken",
        };
      }

      const user = await User.create({
        username: username, // Updated here
        email: email,
        password: password,
      });

      return { ...user._doc, otp: this.generateOTP() };
    } catch (error) {
      throw error;
    }
  }

  async signIn(email, password) {
    try {
      const user = await this.userRepository.findUserByEmail(email);
      if (!user) {
        return {
          error: "User not found",
        };
      }

      // Replace the password comparison logic with a secure method (e.g., bcrypt)
      if (password !== user.password) {
        return {
          error: "Password incorrect",
        };
      }

      return user;
    } catch (error) {
      throw error;
    }
  }

  // ... other methods

  generateOTP() {
    const otp = Math.floor(10000 + Math.random() * 90000).toString();
    return otp;
  }
}

module.exports = UserService;
