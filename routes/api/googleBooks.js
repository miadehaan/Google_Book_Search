const router = require("express").Router();
const GoogleAPI = require("../../controllers/GoogleAPI");

router.route("/")
    .get(GoogleAPI.findAll);

module.exports = router;