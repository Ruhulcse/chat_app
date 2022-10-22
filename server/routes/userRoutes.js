const { register, login, setAvatar } = require("../controllers/userControler");

const router = require("express").Router();
router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setAvatar);

module.exports = router;
