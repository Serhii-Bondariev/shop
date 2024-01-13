const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User, Basket } = require("../models/models");
const { config } = require("dotenv");
const jwt = require("jsonwebtoken");

config(); // Завантажує змінні оточення

const generateJwt = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { email, password, role } = req.body;
    if (!email || !password) {
      return next(ApiError.badRequest("Incorrect email or password"));
    }

    try {
      const candidate = await User.findOne({ where: { email } });
      if (candidate) {
        return next(ApiError.badRequest(`User with this ${email} already exists!`));
      }

      const hashPassword = await bcrypt.hash(password, 5);
      const user = await User.create({ email, role, password: hashPassword });
      const basket = await Basket.create({ userId: user.id });
      const token = generateJwt(user.id, user.email, user.role);

      return res.json({ token });
    } catch (e) {
      return next(ApiError.internal("Registration error"));
    }
  }
  
  async login(req, res, next) {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw ApiError.internal(`User with email ${email} not found!`);
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            throw ApiError.internal("Incorrect password");
        }

        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ token }); 
    } catch (error) {
        console.error(error);  // Додайте вивід докладностей про помилку у консоль
        return next(ApiError.internal("Login error"));
    }
}


  async check(req, res, next) {
    const token = generateJwt(req.user.id, req.user.email, req.user.role)
    return res.json({token})
  }
}

module.exports = new UserController();

