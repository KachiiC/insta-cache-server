const Router = require("koa-router");
const router = new Router();
const { instaListCache } = require("./middleware/insta.cache");
const { getInstagramList } = require("./controllers/instagram.controllers");

router.get("/insta_list", instaListCache, getInstagramList);

module.exports = router;