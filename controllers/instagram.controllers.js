const { getInstagramData } = require("../services/instagram.services");
const { shortCache } = require("../middleware/cache");

const getInstagramList = async (ctx) => {
  try {
    const resData = await getInstagramData();
    shortCache.set("insta-list", resData);
    ctx.body = resData;
    ctx.status = 200;
  } catch (err) {
    ctx.body = "Error!";
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  getInstagramList,
};
