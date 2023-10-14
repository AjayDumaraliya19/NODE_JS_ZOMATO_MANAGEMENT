const express = require("express");
const userRouter = require("./user.route");
const tokenRouter = require("./token.route");
const countryRouter = require("./contry.route");
const stateRouter = require("./state.route");
const cityRouter = require("./city.route");
const bannerRouter = require("./banner.route");
const restrotypeRouter = require("./restroType.route");
const restroRouter = require("./restrorant.route");
const cartRouter = require("./cart.route");
const orderRouter = require("./order.route");
const serachRouter = require("./serach.route");

/* ---------- Create the router function for the speticulers routes --------- */
const router = express.Router();

router.use("/user", userRouter);
router.use("/token", tokenRouter);
router.use("/country", countryRouter);
router.use("/state", stateRouter);
router.use("/city", cityRouter);
router.use("/banner", bannerRouter);
router.use("/restroType", restrotypeRouter);
router.use("/restro", restroRouter);
router.use("/cart", cartRouter);
router.use("/order", orderRouter);
router.use("/serach", serachRouter);

/* ---------------------- Export the router module here --------------------- */
module.exports = router;
