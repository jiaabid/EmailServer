const { sendEmail } = require("../controllers/email")
const router = require("express").Router()

router.post("/sendEmail", sendEmail)

module.exports = router