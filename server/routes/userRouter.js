const Router = require("express");
const router = new Router();
const UserControllerb = require("../controllers/userController");
const userController = require("../controllers/userController");

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", userController.check);
router.delete("/delete");

module.exports = router;
