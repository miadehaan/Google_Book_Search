const router = require("express").Router();
const savedBookRoutes = require("./books");
const googleBookRoutes = require("./googleBooks");

// Book routes
router.use("/books", savedBookRoutes);
router.use("/google", googleBookRoutes);

module.exports = router;