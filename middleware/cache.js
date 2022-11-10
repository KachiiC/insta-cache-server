const NodeCache = require("node-cache");
const shortCache = new NodeCache({ stdTTL: 60 * 60 * 24 });

module.exports = {
  shortCache,
};