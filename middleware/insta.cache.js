const { shortCache } = require("./cache");

const instaListCache = (ctx, next) => {
  try {
    if (shortCache.has("insta-list")) {
      return (ctx.body = shortCache.get("insta-list"));
    }
    return next();
  } catch (err) {
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  instaListCache,
};