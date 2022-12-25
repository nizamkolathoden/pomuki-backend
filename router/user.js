const router = require('express').Router()
const {signup, YodaYouhouAllUsers, YodaYouhouDeleteAllUsers, profile, YodaYouhouNewUser} = require("../controller/user")
const { isloggedIn } = require('../middleware/user')


router.post("/siginup",signup)

router.get("/userprofile",isloggedIn,profile)


router.route("/YodaYouhou/allusers")
.get(YodaYouhouAllUsers)
.delete(YodaYouhouDeleteAllUsers)


module.exports = router
