const { sendActivationMail } = require("./nodemailer");

const Router = require("express").Router;
const router = new Router();
router.post("/login", async (req, res, next) => {
  console.log(req.body);
  await sendActivationMail();

  return res.json("12345");
});

module.exports = router;
